import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import { DrawingManager, GoogleMap, Marker, Polygon, useLoadScript } from '@react-google-maps/api';
import axios from 'axios';
import { useFormikContext } from 'formik';
import { useEffect, useRef, useState } from 'react';

const Map = ({
  forPhase,
  phase_long,
  phase_lat,
  locationAddress,
  xs,
  lg,
  height,
  num,
  normallng,
  normallat,
  setSubmitted,
  phaseID,
  close
}) => {
  const apiKey = 'AIzaSyAfJQs_y-6KIAwrAIKYWkniQChj5QBvY1Y';
  const { setFieldValue } = useFormikContext();
  const { isLoaded } = useLoadScript({ googleMapsApiKey: apiKey, libraries: ['drawing'] });

  const [lat, setLat] = useState(normallat ? normallat : 24.4984312);
  const [long, setLong] = useState(normallng ? normallng : 54.4036975);
  const mapRef = useRef();
  const polygonRefs = useRef([]);
  const activePolygonIndex = useRef([]);
  const [polygons, setPolygons] = useState([]);

  const polygonOptions = {
    fillOpacity: 0.3,
    fillColor: '#90caf9',
    strokeColor: '#1976d2',
    strokeWeight: 2,
    draggable: true,
    editable: true
  };

  const drawingManagerOptions = {
    polygonOptions: polygonOptions,
    drawingControl: true,
    drawingControlOptions: {
      position: window.google?.maps?.ControlPosition?.TOP_CENTER,
      drawingModes: [window.google?.maps?.drawing?.OverlayType?.POLYGON]
    }
  };

  const getloc = (add) => {
    const url = 'https://maps.googleapis.com/maps/api/geocode/json';
    axios
      .get(url, {
        params: {
          address: add,
          key: apiKey
        }
      })
      .then((response) => {
        setLat(response.data?.results[0]?.geometry?.location?.lat);
        setLong(response.data?.results[0]?.geometry?.location?.lng);
      })
      .catch((error) => {
        console.log('error', error);
      });
  };

  const onLoadMap = (map) => {
    mapRef.current = map;
    map.setOptions({ draggableCursor: 'pointer' });

    window.google.maps.event.addListener(map, 'dragstart', () => {
      map.setOptions({ draggableCursor: 'grabbing' });
    });

    window.google.maps.event.addListener(map, 'dragend', () => {
      map.setOptions({ draggableCursor: 'pointer' });
    });
  };

  const onLoadPolygon = (polygon, index) => {
    polygonRefs.current[index] = polygon;
  };

  const onClickPolygon = (index) => {
    activePolygonIndex.current = index;
  };

  const onEditPolygon = (index) => {
    const polygonRef = polygonRefs.current[index];
    if (polygonRef) {
      const coordinates = polygonRef
        .getPath()
        .getArray()
        .map((latLng) => ({ lat: latLng.lat(), lng: latLng.lng() }));
      const allPolygons = [...polygons];
      allPolygons[index] = coordinates;
      setPolygons(allPolygons);
    }
  };

  const onDeleteDrawing = () => {
    setPolygons([]);
    activePolygonIndex.current = null;
  };

  const getPaths = (polygon) => {
    var polygonBounds = polygon.getPath();
    var bounds = [];
    for (var i = 0; i < polygonBounds.length; i++) {
      var point = {
        lat: polygonBounds.getAt(i).lat(),
        lng: polygonBounds.getAt(i).lng()
      };
      bounds.push(point);
    }
    return bounds;
  };

  useEffect(() => {
    getloc(locationAddress);
  }, [locationAddress]);

  useEffect(() => {
    setFieldValue('lat', lat);
    setFieldValue('long', long);
  }, [lat, long]);

  const onLoadDrawingManager = (drawingManager) => {
    drawingManagerRef.current = drawingManager;
  };

  const onOverlayComplete = ($overlayEvent) => {
    drawingManagerRef.current.setDrawingMode(null);
    if ($overlayEvent.type === window.google.maps.drawing.OverlayType.POLYGON) {
      const newPolygon = $overlayEvent.overlay
        .getPath()
        .getArray()
        .map((latLng) => ({ lat: latLng.lat(), lng: latLng.lng() }));

      // start and end point should be same for valid geojson
      const startPoint = newPolygon[0];
      newPolygon.push(startPoint);
      $overlayEvent.overlay?.setMap(null);
      setPolygons([...polygons, newPolygon]);
    }
  };

  const drawingManagerRef = useRef();

  const mapOptions = {
    polygonOptions: polygonOptions
  };

  if (!isLoaded) {
    return <div>loading....</div>;
  }

  {
    /*  */
  }
  return (
    <Grid item xs={xs} lg={lg}>
      <GoogleMap
        mapContainerStyle={{ position: 'relative', height: height, width: '100%' }}
        center={{ lat: phase_lat && forPhase ? phase_lat : lat, lng: phase_long && forPhase ? phase_long : long }}
        zoom={12}
        onClick={(e) => {
          setLat(e.latLng.lat());
          setLong(e.latLng.lng());
        }}
        onLoad={onLoadMap}
      >
        <Marker position={{ lat: lat, lng: long }} />

        {forPhase && (
          <>
            <DrawingManager onLoad={onLoadDrawingManager} onOverlayComplete={onOverlayComplete} options={drawingManagerOptions} />
            {polygons.map((iterator, index) => (
              <Polygon
                key={index}
                onLoad={(event) => onLoadPolygon(event, index)}
                onMouseDown={() => onClickPolygon(index)}
                onMouseUp={() => onEditPolygon(index)}
                onDragEnd={() => onEditPolygon(index)}
                options={mapOptions.polygonOptions}
                paths={iterator}
                draggable
                editable
              />
            ))}

            <Button
              variant="contained"
              startIcon={<RemoveCircleIcon />}
              onClick={() => {
                onDeleteDrawing();
                setSubmitted(false);
              }}
              sx={{
                position: 'absolute',
                right: '60px',
                top: '10px',
                backgroundColor: '#FFFFFF',
                borderRaduis: '1px',
                color: 'black',
                height: '41px',
                '&:hover': {
                  backgroundColor: 'rgb(235,235,235)'
                }
              }}
            >
              Clear Drawings
            </Button>
          </>
        )}
      </GoogleMap>
      {forPhase && (
        <Grid item xs={12} lg={12} justifyContent={'center'} sx={{ padding: '16px 0 0 0', textAlign: 'center' }}>
          <Button
            variant="contained"
            onClick={() => {
              const flattenedArray = [].concat(...polygons);
              console.log(flattenedArray);
              setFieldValue(`phases[${num}].polygonCoords`, [...flattenedArray]);
              close(false);
              setSubmitted(polygons.length !== 0 && num === phaseID);
            }}
          >
            Submit Location
          </Button>
        </Grid>
      )}
    </Grid>
  );
};

export default Map;

// import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
// import { Grid } from '@mui/material';
// import Button from '@mui/material/Button';
// import {
//   DrawingManager,
//   GoogleMap,
//   Marker,
//   Polygon,
//   useLoadScript
// } from '@react-google-maps/api';
// import axios from 'axios';
// import { useFormikContext } from 'formik';
// import { useEffect, useRef, useState } from 'react';

// export default function Map({
//   forPhase,
//   phase_long,
//   phase_lat,
//   locationAddress,
//   xs,
//   lg,
//   height,
//   num,
//   normallng,
//   normallat,
//   setSubmitted,
//   phaseID,
//   close
// }) {
//   const [lat, setlat] = useState(normallat ? normallat : 24.4984312);
//   const [long, setlong] = useState(normallng ? normallng : 54.4036975);
//   const [polygonsDrawn, setPolygonsDrawn] = useState();
//   const apiKey = 'AIzaSyAfJQs_y-6KIAwrAIKYWkniQChj5QBvY1Y';
//   const enable = false;

//   const { setFieldValue } = useFormikContext();

//   const handleMapLoad = (map) => {
//     map.setOptions({ draggableCursor: 'pointer' });

//     window.google.maps.event.addListener(map, 'dragstart', () => {
//       map.setOptions({ draggableCursor: 'grabbing' });
//     });

//     window.google.maps.event.addListener(map, 'dragend', () => {
//       map.setOptions({ draggableCursor: 'pointer' });
//     });
//   };

//   const getloc = (add) => {
//     const url = 'https://maps.googleapis.com/maps/api/geocode/json';
//     axios
//       .get(url, {
//         params: {
//           address: add,
//           key: apiKey
//         }
//       })
//       .then((response) => {
//         setFieldValue('lat', response.data?.results[0]?.geometry?.location?.lat);
//         setFieldValue('long', response.data?.results[0]?.geometry?.location?.lng);
//       })
//       .catch((error) => {
//         console.log('error', error);
//       });
//   };

//   useEffect(() => {
//     getloc(locationAddress);
//   }, [locationAddress]);

//   useEffect(() => {
//     setFieldValue('lat', lat);
//     setFieldValue('long', long);
//   }, [lat, long]);

//   const { isLoaded } = useLoadScript({
//     googleMapsApiKey: apiKey,
//     libraries: ['drawing']
//   });

//   const mapRef = useRef();
//   const polygonRefs = useRef([]);
//   const activePolygonIndex = useRef();
//   const autocompleteRef = useRef();
//   const drawingManagerRef = useRef();

//   const [polygons, setPolygons] = useState([]);
//   useEffect(() => {
//     console.log(polygons);
//   }, [polygons]);

//   const polygonOptions = {
//     fillOpacity: 0.3,
//     fillColor: '#90caf9',
//     strokeColor: '#1976d2',
//     strokeWeight: 2,
//     draggable: true,
//     editable: true
//   };

//   const drawingManagerOptions = {
//     polygonOptions: polygonOptions,
//     drawingControl: true,
//     drawingControlOptions: {
//       position: window.google?.maps?.ControlPosition?.TOP_CENTER,
//       drawingModes: [window.google?.maps?.drawing?.OverlayType?.POLYGON]
//     }
//   };

//   const onLoadMap = (map) => {
//     mapRef.current = map;
//   };

//   const onLoadPolygon = (polygon, index) => {
//     polygonRefs.current[index] = polygon;
//   };

//   const onClickPolygon = (index) => {
//     activePolygonIndex.current = index;
//   };

//   const onLoadAutocomplete = (autocomplete) => {
//     autocompleteRef.current = autocomplete;
//   };

//   const onPlaceChanged = () => {
//     const { geometry } = autocompleteRef.current.getPlace();
//     const bounds = new window.google.maps.LatLngBounds();
//     if (geometry.viewport) {
//       bounds.union(geometry.viewport);
//     } else {
//       bounds.extend(geometry.location);
//     }
//     mapRef.current.fitBounds(bounds);
//   };

//   const onLoadDrawingManager = (drawingManager) => {
//     drawingManagerRef.current = drawingManager;
//   };

//   const onOverlayComplete = ($overlayEvent) => {
//     drawingManagerRef.current.setDrawingMode(null);
//     if ($overlayEvent.type === window.google.maps.drawing.OverlayType.POLYGON) {
//       const newPolygon = $overlayEvent.overlay
//         .getPath()
//         .getArray()
//         .map((latLng) => ({ lat: latLng.lat(), lng: latLng.lng() }));

//       // start and end point should be same for valid geojson
//       const startPoint = newPolygon[0];
//       newPolygon.push(startPoint);
//       $overlayEvent.overlay?.setMap(null);
//       setPolygons([...polygons, newPolygon]);
//     }
//   };

//   const onDeleteDrawing = () => {
//     setPolygons([]);
//     activePolygonIndex.current = null; // Reset the activePolygonIndex
//   };

//   const onEditPolygon = (index) => {
//     const polygonRef = polygonRefs.current[index];
//     if (polygonRef) {
//       const coordinates = polygonRef
//         .getPath()
//         .getArray()
//         .map((latLng) => ({ lat: latLng.lat(), lng: latLng.lng() }));
//       const allPolygons = [...polygons];
//       allPolygons[index] = coordinates;
//       setPolygons(allPolygons);
//     }
//   };

//   function getPaths(polygon) {
//     var polygonBounds = polygon.getPath();
//     var bounds = [];
//     for (var i = 0; i < polygonBounds.length; i++) {
//       var point = {
//         lat: polygonBounds.getAt(i).lat(),
//         lng: polygonBounds.getAt(i).lng()
//       };
//       bounds.push(point);
//     }
//     return bounds;
//   }
//   if (!isLoaded) {
//     return <div>loading....</div>;
//   } else {
//     return (
//       <Grid item xs={xs} lg={lg}>
//         <GoogleMap
//           mapContainerStyle={{ position: 'relative', height: height, width: '100%' }}
//           center={{ lat: phase_lat && forPhase ? phase_lat : lat, lng: phase_long && forPhase ? phase_long : long }}
//           zoom={12}
//           onClick={(e) => {
//             setlat(e.latLng.lat());
//             setlong(e.latLng.lng());
//           }}
//           onLoad={onLoadMap}
//         >
//           <Marker position={{ lat: lat, lng: long }} />
//           {forPhase && (
//             <>
//               <DrawingManager
//                 onLoad={onLoadDrawingManager}
//                 onOverlayComplete={onOverlayComplete}
//                 onPolygonComplete={(e) => {
//                   setPolygons([...polygons, getPaths(e)]);
//                   if (polygonsDrawn == 1) {
//                     setPolygonsDrawn(0);
//                     setPolygons([]);
//                   } else {
//                     setPolygonsDrawn(1);
//                   }
//                 }}
//                 options={drawingManagerOptions}
//               />
//               {polygons.map((iterator, index) => (
//                 <Polygon
//                   key={index}
//                   onLoad={(event) => onLoadPolygon(event, index)}
//                   onMouseDown={() => onClickPolygon(index)}
//                   onMouseUp={() => onEditPolygon(index)}
//                   onDragEnd={() => onEditPolygon(index)}
//                   options={polygonOptions}
//                   paths={iterator}
//                   draggable
//                   editable
//                 />
//               ))}

//               <Button
//                 variant="contained"
//                 startIcon={<RemoveCircleIcon />}
//                 onClick={() => {
//                   onDeleteDrawing();
//                   setSubmitted(false);
//                 }}
//                 sx={{
//                   position: 'absolute',
//                   right: '60px',
//                   top: '10px',
//                   backgroundColor: '#FFFFFF',
//                   borderRaduis: '1px',
//                   color: 'black',
//                   height: '41px',
//                   '&:hover': {
//                     backgroundColor: 'rgb(235,235,235)'
//                   }
//                 }}
//               >
//                 Clear Drawings
//               </Button>
//             </>
//           )}
//         </GoogleMap>
//         {forPhase && (
//           <>
//             <Grid item xs={12} lg={12} justifyContent={'center'} sx={{ padding: '16px 0 0 0', textAlign: 'center' }}>
//               <Button
//                 variant="contained"
//                 onClick={() => {
//                   const flattenedArray = [].concat(...polygons);
//                   console.log(flattenedArray);
//                   setFieldValue(`phases[${num}].polygonCoords`, [...flattenedArray]);
//                   close(false);
//                   setSubmitted(polygons.length != 0 && num == phaseID ? true : false);
//                 }}
//               >
//                 Submit Location
//               </Button>
//             </Grid>
//           </>
//         )}
//       </Grid>
//     );
//   }
// }
