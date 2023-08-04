import React, { useState, useRef } from 'react';
import { TextField } from '@mui/material';
import { StandaloneSearchBox } from '@react-google-maps/api';
import { useField, useFormikContext } from 'formik';

export default function MapAutocomplete({ disabled, onChangeAddress, country, state, metaError, metaTouched, id, name }) {
  const [field, meta] = useField(name);

  const { setFieldValue } = useFormikContext();

  const inputRef = useRef();
  const handlePlaceChanged = () => {
    const [place] = inputRef.current.getPlaces();
    if (place) {
      setFieldValue('place', place.address_components);
      console.log(place.address_components);
    } else {
      return;
    }
  };
  return (
    <>
      <StandaloneSearchBox onLoad={(ref) => (inputRef.current = ref)} onPlacesChanged={handlePlaceChanged}>
        <TextField
          error={metaError && metaTouched}
          className="form-control"
          disabled={disabled}
          placeholder="Enter Location"
          onChange={
            onChangeAddress
              ? (e) => {
                  onChangeAddress(e.target.value);
                }
              : (e) => {
                  return;
                }
          }
          fullWidth
        />
      </StandaloneSearchBox>
    </>
  );
}

export function NormalMapAutocomplete({ onChangeAddress, country, state, setlong, setlat, disabled }) {
  const inputRef = useRef();
  const handlePlaceChanged = () => {
    console.log('place changed');
    const [place] = inputRef.current.getPlaces();
    if (place) {
      console.log(place.address_components);
      if (place.address_components != undefined && place.address_components?.length > 0) {
        place.address_components.forEach((addr) => {
          if (addr.types.indexOf('country') != -1) {
            console.log('country: ' + addr.long_name);
            country(addr.long_name);
          }
          if (addr.types.indexOf('administrative_area_level_1') != -1 && place.address_components?.length > 1) {
            console.log(`state: ${addr.long_name}`);
            state(addr.long_name);
          } else {
            return;
          }
        });

        console.log(place.geometry.location.lat());
        setlat(place.geometry.location.lat());
        console.log(place.geometry.location.lng());
        setlong(place.geometry.location.lng());
      }
    } else {
      return;
    }
  };
  return (
    <>
      <StandaloneSearchBox onLoad={(ref) => (inputRef.current = ref)} onPlacesChanged={handlePlaceChanged}>
        <TextField
          className="form-control"
          placeholder="Enter Location"
          disabled={disabled}
          onChange={
            onChangeAddress
              ? (e) => {
                  onChangeAddress(e.target.value);
                }
              : (e) => {
                  return;
                }
          }
          fullWidth
        />
      </StandaloneSearchBox>
    </>
  );
}
