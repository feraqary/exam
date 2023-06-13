import React, { useState, useEffect } from 'react';
import { useLoadScript, GoogleMap, Marker, LoadScript } from '@react-google-maps/api';
import { Grid } from '@mui/material';
import axios from 'axios';

export default function Map({ locationAddress, xs, lg }) {
  const [lat, setlat] = useState(24.4984312);
  const [long, setlong] = useState(54.4036975);
  const apiKey = 'AIzaSyAfJQs_y-6KIAwrAIKYWkniQChj5QBvY1Y';

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
    console.log(add);
    const url = 'https://maps.googleapis.com/maps/api/geocode/json';
    axios
      .get(url, {
        params: {
          address: add,
          key: apiKey
        }
      })
      .then((response) => {
        setlat(response.data.results[0].geometry.location.lat);
        setlong(response.data.results[0].geometry.location.lng);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    getloc(locationAddress);
  }, [locationAddress]);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: apiKey
  });

  if (!isLoaded) {
    return <div>loading....</div>;
  } else {
    return (
      <Grid item xs={xs} lg={lg}>
        <GoogleMap
          mapContainerStyle={{ position: 'relative', height: '27vh', width: '100%' }}
          center={{ lat: lat, lng: long }}
          zoom={13}
          onClick={(e) => {
            setlat(e.latLng.lat());
            setlong(e.latLng.lng());
          }}
          onLoad={handleMapLoad}
        >
          <Marker position={{ lat: lat, lng: long }} />
        </GoogleMap>
      </Grid>
    );
  }
}
