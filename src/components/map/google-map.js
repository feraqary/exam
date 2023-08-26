import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { Grid, TextField, Skeleton, IconButton, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
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
  setPolyValue,
  disabled,
  country,
  city,
  state,
  Community,
  subCommunity
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
  const [autoSearch, setAutoSearch] = useState('');
  const [highlightPolygon, setHighlightPolygon] = useState(null);

  useEffect(() => {
    setAutoSearch(
      [country, city, state, Community, subCommunity].filter((item) => item != undefined || item != null || item != ' ').join(' ')
    );

    console.log(autoSearch);
  }, [country, city, state, Community, subCommunity]);

  useEffect(() => {
    getloc(autoSearch);
  }, [autoSearch]);

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
          address: add ? add : 'abudhabi',
          key: apiKey
        }
      })
      .then((response) => {
        const location = response.data?.results[0]?.geometry?.location;
        const boundsData = response.data?.results[0]?.geometry?.bounds;
        setLat(location?.lat);
        setLong(location?.lng);
        if (boundsData) {
          const southWest = new google.maps.LatLng(boundsData.southwest.lat, boundsData.southwest.lng);
          const northEast = new google.maps.LatLng(boundsData.northeast.lat, boundsData.northeast.lng);

          const bounds = new google.maps.LatLngBounds(southWest, northEast);

          setLat(response.data?.results[0]?.geometry?.location?.lat);
          setLong(response.data?.results[0]?.geometry?.location?.lng);

          // // Remove previous highlight polygon, if any
          // if (highlightPolygon) {
          //   highlightPolygon.setMap(null);
          // }

          // // Create and set the new highlight polygon
          // const polygon = new google.maps.Polygon({
          //   paths: [
          //     { lat: boundsData.southwest.lat, lng: boundsData.southwest.lng },
          //     { lat: boundsData.northeast.lat, lng: boundsData.southwest.lng },
          //     { lat: boundsData.northeast.lat, lng: boundsData.northeast.lng },
          //     { lat: boundsData.southwest.lat, lng: boundsData.northeast.lng }
          //   ],
          //   strokeColor: '#1c75fc',
          //   strokeOpacity: 0.8,
          //   strokeWeight: 2,
          //   fillColor: '#1c75fc',
          //   fillOpacity: 0.2,
          //   map: mapRef.current // Attach the polygon to the map
          // });

          // setHighlightPolygon(polygon);

          // Fit the map to the bounds
          mapRef.current.fitBounds(bounds, { maxZoom: 10 });
          console.log('response: ', response);
        } else {
          console.log('No bounds data available in the response.');
        }
      })
      .catch((error) => {
        console.log('error', error);
      });
  };

  const onLoadMap = (map) => {
    mapRef.current = map;
    map.setOptions({ draggableCursor: 'pointer' });
    mapRef.current.panTo({ lat: 24.4984312, lng: 54.4036975 });
    window.google.maps.event.addListener(map, 'dragstart', () => {
      map.setOptions({ draggableCursor: 'grabbing' });
    });
    highlightPolygon?.setMap(null);
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
    return <Skeleton variant="rectangular" width={'100%'} height={60} />;
  } else {
    const handlePlaceChanged = (location) => {
      const { place } = inputRef.current.getPlaces();
      // setSearchedLocation(location);
      setHighlightedLocation({ lat: selectedLat, lng: selectedLng });
      if (place) {
        setFieldValue('place', place.address_components);
        mapRef.current.panTo({ lat: lat, lng: long });
        console.log(place.address_components);
      } else {
        return;
      }
    };

    function flattenCoordinates(arr) {
      return arr.reduce((acc, val) => acc.concat(Array.isArray(val) && typeof acc[0] !== 'number' ? flattenCoordinates(val) : acc), []);
    }

    // const handleBounds = (map) => {};

    return (
      <Grid
        item
        xs={xs}
        lg={lg}
        sx={disabled && { opacity: '0.6', pointerEvents: 'none', userSelect: 'none', transition: 'opacity 0.8s cubic' }}
      >
        <GoogleMap
          mapContainerStyle={{ position: 'relative', height: height, width: '100%' }}
          center={{ lat: phase_lat && forPhase ? phase_lat : lat, lng: phase_long && forPhase ? phase_long : long }}
          setBounds={{ lat: lat, lng: long }}
          zoom={12}
          onClick={(e) => {
            setLat(e.latLng.lat());
            setLong(e.latLng.lng());
          }}
          onLoad={onLoadMap}
          // onBoundsChanged={() => {
          //   if (highlightPolygon) {
          //     highlightPolygon.setMap(null);
          //   }
          // }}
        >
          <Marker position={{ lat: lat, lng: long }} />
          {highlightPolygon && highlightPolygon.setMap(mapRef.current)}
          <StandaloneSearchBox onLoad={(ref) => (inputRef.current = ref)} onPlacesChanged={handlePlaceChanged}>
            <TextField
              placeholder="Enter Location"
              variant="outlined"
              color="secondary"
              size="small"
              sx={{ position: 'absolute', top: '11px', left: '190px', color: 'white', width: '30%' }}
              onChange={(e) => {
                // getloc(e.target.value || fields);

                setAutoSearch(e.target.value);
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => {
                        getloc(autoSearch);
                        console.log(autoSearch);
                      }}
                    >
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                )
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
