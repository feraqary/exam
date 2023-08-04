import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { Grid, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { DrawingManager, GoogleMap, Marker, Polygon, StandaloneSearchBox, useLoadScript } from '@react-google-maps/api';
import axios from 'axios';
import { useFormikContext } from 'formik';
import { useEffect, useRef, useState } from 'react';
import MapAutocomplete from './maps-autocomplete';

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
  const { setFieldValue, values } = useFormikContext();
  const enable = false
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
        setFieldValue('lat', response.data.results[0].geometry.location.lat);
        setFieldValue('long', response.data.results[0].geometry.location.lng);
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
    googleMapsApiKey: apiKey
  });

  const mapRef = useRef();
  const polygonRefs = useRef([]);
  const activePolygonIndex = useRef();
  const autocompleteRef = useRef();
  const drawingManagerRef = useRef();

  const [polygons, setPolygons] = useState([
    [
      { lat: 28.630818281028954, lng: 79.80954378826904 },
      { lat: 28.62362346815063, lng: 79.80272024853515 },
      { lat: 28.623585797675588, lng: 79.81490820629882 },
      { lat: 28.630818281028954, lng: 79.80954378826904 }
    ],
    [
      { lat: 28.63130796240949, lng: 79.8170110581665 },
      { lat: 28.623623468150655, lng: 79.81705397351074 },
      { lat: 28.623623468150655, lng: 79.82619494183349 },
      { lat: 28.6313832978037, lng: 79.82619494183349 },
      { lat: 28.63130796240949, lng: 79.8170110581665 }
    ]
  ]);

  const polygonOptions = {
    fillOpacity: 0.3,
    fillColor: '#ff0000',
    strokeColor: '#ff0000',
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
        window.google?.maps?.drawing?.OverlayType?.POLYGON,
        window.google?.maps?.drawing?.OverlayType?.CIRCLE,
        window.google?.maps?.drawing?.OverlayType?.RECTANGLE
      ]
    }
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
            className="form-control"
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


          
          <Button
            variant="contained"
            startIcon={<RemoveCircleIcon />}
            onClick={() => {
              const flattenedArray = [].concat(...polygons);
              console.log(flattenedArray);
              // setFieldValue(`phases[${num}].polygonCoords`, [...flattenedArray]);
              setPolyValue([...flattenedArray]);
              close(false);
              setSubmitted(polygons?.length !== 0 && num === phaseID);
            }}
          >
            Clear Drawings
          </Button>
          <Marker position={{ lat: values.lat, lng: values.long }} />
        </GoogleMap>
      </Grid>
    );
  }
}
