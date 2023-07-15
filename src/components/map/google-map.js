import React, { useState, useEffect, useRef } from 'react';
import {
  useLoadScript,
  GoogleMap,
  Marker,
  DrawingManager,
  Polygon,
  Rectangle,
  RectangleFunctional,
  useJsApiLoader
} from '@react-google-maps/api';
import { Grid } from '@mui/material';
import axios from 'axios';
import { useFormikContext } from 'formik';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import Button from '@mui/material/Button';
import { Height } from '@mui/icons-material';
import { border } from '@mui/system';

export default function Map({
  forPhase,
  setPhaseLat,
  setPhaseLong,
  phase_long,
  phase_lat,
  locationAddress,
  xs,
  lg,
  mapUrl,
  values,
  height,
  i,
  close
}) {
  const [lat, setlat] = useState(24.4984312);
  const [long, setlong] = useState(54.4036975);
  const [polygonsDrawn, setPolygonsDrawn] = useState();
  // const []
  const apiKey = 'AIzaSyAfJQs_y-6KIAwrAIKYWkniQChj5QBvY1Y';
  const enable = false;
  // const { setFieldValue, values } = useFormikContext();
  const handleMapLoad = (map) => {
    // Set custom cursor for the map container
    map.setOptions({ draggableCursor: 'pointer' });

    // Optionally, you can also change the cursor when dragging the map
    window.google.maps.event.addListener(map, 'dragstart', () => {
      map.setOptions({ draggableCursor: 'grabbing' });
    });

    window.google.maps.event.addListener(map, 'dragend', () => {
      map.setOptions({ draggableCursor: 'pointer' });
    });
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
        // setFieldValue('lat', response.data.results[0].geometry.location.lat);
        // setFieldValue('long', response.data.results[0].geometry.location.lng);
      })
      .catch((error) => {
        console.log('error', error);
      });
  };

  useEffect(() => {
    getloc(locationAddress);
  }, [locationAddress]);

  useEffect(() => {}, [lat, long]);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: apiKey,
    libraries: ['drawing']
  });

  const mapRef = useRef();
  const polygonRefs = useRef([]);
  const activePolygonIndex = useRef();
  const autocompleteRef = useRef();
  const drawingManagerRef = useRef();

  const [polygons, setPolygons] = useState([
    // [
    //   { lat: 28.630818281028954, lng: 79.80954378826904 },
    //   { lat: 28.62362346815063, lng: 79.80272024853515 },
    //   { lat: 28.623585797675588, lng: 79.81490820629882 },
    //   { lat: 28.630818281028954, lng: 79.80954378826904 }
    // ],
    // [
    //   { lat: 28.63130796240949, lng: 79.8170110581665 },
    //   { lat: 28.623623468150655, lng: 79.81705397351074 },
    //   { lat: 28.623623468150655, lng: 79.82619494183349 },
    //   { lat: 28.6313832978037, lng: 79.82619494183349 },
    //   { lat: 28.63130796240949, lng: 79.8170110581665 }
    // ]
  ]);

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
      drawingModes: [
        window.google?.maps?.drawing?.OverlayType?.POLYGON
        // window.google?.maps?.drawing?.OverlayType?.CIRCLE,
        // window.google?.maps?.drawing?.OverlayType?.RECTANGLE
      ]
    }
  };

  const onLoadMap = (map) => {
    mapRef.current = map;
  };

  const onLoadPolygon = (polygon, index) => {
    polygonRefs.current[index] = polygon;
  };

  const onClickPolygon = (index) => {
    activePolygonIndex.current = index;
  };

  const onLoadAutocomplete = (autocomplete) => {
    autocompleteRef.current = autocomplete;
  };

  const onPlaceChanged = () => {
    const { geometry } = autocompleteRef.current.getPlace();
    const bounds = new window.google.maps.LatLngBounds();
    if (geometry.viewport) {
      bounds.union(geometry.viewport);
    } else {
      bounds.extend(geometry.location);
    }
    mapRef.current.fitBounds(bounds);
  };

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

  const onDeleteDrawing = () => {
    setPolygons([]);
    activePolygonIndex.current = null; // Reset the activePolygonIndex
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

  function getPaths(polygon) {
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
  }
  if (!isLoaded) {
    return <div>loading....</div>;
  } else {
    return (
      <Grid item xs={xs} lg={lg}>
        <GoogleMap
          mapContainerStyle={{ position: 'relative', height: height, width: '100%' }}
          center={{ lat: phase_lat && forPhase ? phase_lat : lat, lng: phase_long && forPhase ? phase_long : long }}
          zoom={12}
          onClick={(e) => {
            setlat(e.latLng.lat());
            setlong(e.latLng.lng());
          }}
          onLoad={onLoadMap}
        >
          <Marker position={{ lat: lat, lng: long }} />
          {forPhase && (
            <>
              <DrawingManager
                onLoad={onLoadDrawingManager}
                onOverlayComplete={onOverlayComplete}
                onPolygonComplete={(e) => {
                  setPolygons([...polygons, getPaths(e)]);
                  if (polygonsDrawn == 1) {
                    setPolygonsDrawn(0);
                    setPolygons([]);
                  } else {
                    setPolygonsDrawn(1);
                  }
                }}
                options={drawingManagerOptions}
              />
              {polygons.map((iterator, index) => (
                <Polygon
                  key={index}
                  onLoad={(event) => onLoadPolygon(event, index)}
                  onMouseDown={() => onClickPolygon(index)}
                  onMouseUp={() => onEditPolygon(index)}
                  onDragEnd={() => onEditPolygon(index)}
                  options={polygonOptions}
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
          <>
            <Grid item xs={12} lg={12} justifyContent={'center'} sx={{ padding: '16px 0 0 0', textAlign: 'center' }}>
              <Button
                variant="contained"
                onClick={() => {
                  values.polygonCoords.push(polygons);
                  // setFieldValue(`phases.polygonCoords`, polygonsCrds);
                  close(false);
                }}
              >
                Submit Location
              </Button>
            </Grid>
          </>
        )}
      </Grid>
    );
  }
}

// export function NormalMap({ locationAddress, xs, lg, mapUrl }) {
//   const [lat, setlat] = useState(24.4984312);
//   const [long, setlong] = useState(54.4036975);
//   const apiKey = 'AIzaSyAfJQs_y-6KIAwrAIKYWkniQChj5QBvY1Y';

//   const handleMapLoad = (map) => {
//     // Set custom cursor for the map container
//     map.setOptions({ draggableCursor: 'pointer' });

//     // Optionally, you can also change the cursor when dragging the map
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
//         setlat(response.data.results[0].geometry.location.lat);
//         setlong(response.data.results[0].geometry.location.lng);
//       })
//       .catch((error) => {
//         console.log('error', error);
//       });
//   };

//   useEffect(() => {
//     getloc(locationAddress);
//   }, [locationAddress]);

//   useEffect(() => {
//     console.log('dat');
//   }, [lat, long]);
//   const { isLoaded } = useLoadScript({
//     googleMapsApiKey: apiKey,
//     libraries: ['drawing']
//   });

//   if (!isLoaded) {
//     return <div>loading....</div>;
//   } else {
//     return (
//       <Grid item xs={xs} lg={lg}>
//         <GoogleMap
//           mapContainerStyle={{ position: 'relative', height: '27vh', width: '100%' }}
//           // center={{ lat: values.lat, lng: values.long }}
//           zoom={11}
//           onClick={(e) => {
//             setlat(e.latLng.lat());
//             setlong(e.latLng.lng());
//           }}
//           onLoad={handleMapLoad}
//         >
//           {/* <Marker position={{ lat: lat, lng: long }} /> */}
//         </GoogleMap>
//       </Grid>
//     );
//   }
// }

// let phase = {
//   name: '',
//   noOfprp:5,
//   locationAdd:'',
//   phasepoly:[
//     {lat:123,lng:456},
//     {lat:123,lng:456},
//     {lat:123,lng:456},
//     {lat:123,lng:456},
//     {lat:123,lng:456}
//   ]
// }
