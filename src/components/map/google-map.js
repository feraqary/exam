import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { Grid, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { DrawingManager, GoogleMap, Marker, Polygon, Polyline, StandaloneSearchBox, useLoadScript } from '@react-google-maps/api';
import axios from 'axios';
import { useFormikContext } from 'formik';
import { useEffect, useRef, useState } from 'react';

const Map = ({
  forPhase,
  phase_long,
  phase_lat,
  xs,
  lg,
  height,
  num,
  normallng,
  normallat,
  setSubmitted,
  phaseID,
  close,
  setPolyValue
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
  const [boundaries, setBounds] = useState([]);

  const GetPath = (address) => {};

  function countNestedArrays(arr) {
    let count = 0;

    function checkNested(arr) {
      for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
          count++;
          checkNested(arr[i]);
        }
      }
    }

    checkNested(arr);
    return count;
  }
  //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  useEffect(() => {
    const url = 'https://nominatim.openstreetmap.org/search.php?q=$Musaffah&polygon_geojson=1&format=json';

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to fetch data from the API. Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setBounds(data[0].geojson.coordinates);
        const count = countNestedArrays(data[0].geojson.coordinates);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

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
    for (var i = 0; i < polygonBounds?.length; i++) {
      var point = {
        lat: polygonBounds.getAt(i).lat(),
        lng: polygonBounds.getAt(i).lng()
      };
      bounds.push(point);
    }
    return bounds;
  };

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

  const inputRef = useRef();
  const drawingManagerRef = useRef();

  const mapOptions = {
    polygonOptions: polygonOptions
  };

  if (!isLoaded) {
    return <div>loading....</div>;
  } else {
    const handlePlaceChanged = (location) => {
      const { place } = inputRef.current.getPlaces();
      setSearchedLocation(location);
      setHighlightedLocation({ lat: selectedLat, lng: selectedLng });
      if (place) {
        setFieldValue('place', place.address_components);
        map.panTo({ lat: lat, lng: long });
        console.log(place.address_components);
      } else {
        return;
      }
    };

    // let bounds = [
    //   [53.9777051, 25.2242273],
    //   [53.9819409, 25.1921773],
    //   [53.9853031, 25.1792032],
    //   [53.9978742, 25.1469907],
    //   [54.0169671, 25.1142776],
    //   [54.0378675, 25.0893841],
    //   [54.053518, 25.0742938],
    //   [54.0707469, 25.0606988],
    //   [54.0893132, 25.0487224],
    //   [54.1311317, 25.0298636],
    //   [54.1763645, 25.01945],
    //   [54.1927627, 25.0164888],
    //   [54.2302464, 25.011895],
    //   [54.2680385, 25.0132103],
    //   [54.305027, 25.0203956],
    //   [54.3401238, 25.0332387],
    //   [54.3722956, 25.0513615],
    //   [54.3995117, 25.073156],
    //   [54.4223302, 25.0985723],
    //   [54.4403543, 25.127073],
    //   [54.4529625, 25.1576749],
    //   [54.4599439, 25.1897343],
    //   [54.4611086, 25.2223997],
    //   [54.4550978, 25.2696522],
    //   [54.4547686, 25.2722393],
    //   [54.4449485, 25.3052745],
    //   [54.43855, 25.3198369],
    //   [54.4280301, 25.3391845],
    //   [54.4056003, 25.370095],
    //   [54.3772831, 25.3967251],
    //   [54.3569717, 25.4123479],
    //   [54.3098203, 25.4361034],
    //   [54.2891301, 25.4430865],
    //   [54.2714532, 25.4474559],
    //   [54.2389568, 25.4523926],
    //   [54.2063719, 25.4528949],
    //   [54.1823543, 25.4506464],
    //   [54.1299623, 25.4372688],
    //   [54.1012525, 25.4247436],
    //   [54.0817832, 25.4141569],
    //   [54.0513951, 25.3923945],
    //   [54.0256702, 25.3661398],
    //   [54.0053994, 25.3362026],
    //   [53.9970264, 25.3199175],
    //   [53.9883726, 25.298563],
    //   [53.9830534, 25.279862],
    //   [53.9793637, 25.2578464],
    //   [53.9780974, 25.2432401],
    //   [53.978338, 25.2380795],
    //   [53.9777051, 25.2242273]
    // ];

    function flattenCoordinates(arr) {
      return arr.reduce((acc, val) => acc.concat(Array.isArray(val) && typeof acc[0] !== 'number' ? flattenCoordinates(val) : acc), []);
    }

    const polyline = flattenCoordinates(boundaries);

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

          <StandaloneSearchBox onLoad={(ref) => (inputRef.current = ref)} onPlacesChanged={handlePlaceChanged}>
            <TextField
              placeholder="Enter Location"
              variant="outlined"
              color="secondary"
              size="small"
              sx={{ position: 'absolute', top: '11px', left: '190px', color: 'white', width: '30%' }}
              onChange={(e) => {
                getloc(e.target.value);
              }}
            />
          </StandaloneSearchBox>

          <Polyline
            path={boundaries}
            visible
            options={{
              strokeColor: '#FF0000',
              strokeOpacity: 0.8,
              strokeWeight: 2
            }}
          />

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
                setPolyValue([...flattenedArray]);
                setSubmitted(polygons?.length !== 0 && num === phaseID);
                close(false);
              }}
            >
              Submit Location
            </Button>
          </Grid>
        )}
      </Grid>
    );
  }
};

export default Map;
