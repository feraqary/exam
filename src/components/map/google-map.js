import React, { useState, useEffect } from 'react';
import { useLoadScript, GoogleMap, Marker } from '@react-google-maps/api';
import { Grid } from '@mui/material';
import axios from 'axios';

const MAP_URL =
  'https://www.google.com/maps/place/Abu+Dhabi/@24.3870541,54.3938156,11z/data=!3m1!4b1!4m6!3m5!1s0x3e5e440f723ef2b9:0xc7cc2e9341971108!8m2!3d24.453884!4d54.3773438!16zL20vMGd4ag?entry=ttu';

export default function Map({ locationAddress, xs, lg, mapUrl }) {
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
        console.log('error', error);
      });
  };

  useEffect(() => {
    getloc(locationAddress);
  }, [locationAddress]);

  useEffect(() => {
    const parsedUrl = mapUrl ? mapUrl.split('@')[1].split(',') : MAP_URL.split('@')[1].split(',');
    const latitude = parsedUrl[0];
    const longitude = parsedUrl[1];

    setlat(latitude);
    setlong(longitude);
  }, [mapUrl]);

  useEffect(() => {
    console.log('dat');
  }, [lat, long]);
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
          zoom={11}
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
