import React, { useState, useEffect, useRef } from 'react';
import { useLoadScript, GoogleMap, Marker, DrawingManager, Polygon,Rectangle,RectangleFunctional, useJsApiLoader } from '@react-google-maps/api';
import { Grid } from '@mui/material';
import axios from 'axios';
import { useFormikContext } from 'formik';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import Button from '@mui/material/Button';

export default function Map({ locationAddress, xs, lg, mapUrl }) {
  const [lat, setlat] = useState(24.4984312);
  const [long, setlong] = useState(54.4036975);
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
    // const filtered = polygons.filter((polygon, index) => index !== activePolygonIndex.current);
    // setPolygons(filtered);
    const filteredPolygons = polygons.filter((_, index) => index !== activePolygonIndex.current);
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

  if (!isLoaded) {
    return <div>loading....</div>;
  } else {
    return (
      <Grid item xs={xs} lg={lg}>
        <GoogleMap
          mapContainerStyle={{ position: 'relative', height: '27vh', width: '100%' }}
          center={{ lat: values.lat, lng: values.long }}
          zoom={11}
          onClick={(e) => {
            setFieldValue('lat', e.latLng.lat());
            setFieldValue('long', e.latLng.lng());
          }}
          onLoad={onLoadMap}
        >
          <DrawingManager onLoad={onLoadDrawingManager} onOverlayComplete={onOverlayComplete} options={drawingManagerOptions} />
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
              right: '4%',
              top: '10px',
              backgroundColor: '#FFFFFF',
              color: 'black',
              height: '40px',
              '&:hover': {
                backgroundColor: 'rgb(235,235,235)'
              }
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
