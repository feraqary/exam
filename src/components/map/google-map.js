import React, {useState} from 'react'
import { useLoadScript, GoogleMap, Marker, LoadScript } from '@react-google-maps/api';
import { Grid } from '@mui/material';
import axios from 'axios';






export default function Map ({locationAddress, xs,lg}){
    // console.log(`locationAddress: ${locationAddress}`)
    const [lat, setlat] = useState(null);
    const [long, setlong] = useState(null);
    const apiKey = 'AIzaSyAfJQs_y-6KIAwrAIKYWkniQChj5QBvY1Y';

    const getloc = (add) => {
    // const url = e;
    const url = 'https://maps.googleapis.com/maps/api/geocode/json';
    // const address = 'Wahda mall';
    axios
        .get(url, {
        params: {
            address: add,
            key: apiKey
        }
        })
        .then((response) => {
        console.log(response.data.results[0]);
        setlat(response.data.results[0].geometry.location.lat);
        setlong(response.data.results[0].geometry.location.lng);
        setFormatedAdd(response.data.results[0].formatted_address);
        setAdd(formatedAdd.split(' - '));
        console.log('add: ' + Add);
        setlocCountry(Add[Add.length - 1]);
        setState(Add[Add.length - 2]);
        setCity(Add[Add.length - 2]);

        console.log(formatedAdd);
        console.log('country: ' + locCountry);
        console.log('State: ' + state);
        console.log('City: ' + city);
        })
        .catch((error) => {
        console.error(error);
        });
    };

    getloc(locationAddress)

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: apiKey
    });
    
    if(!isLoaded){
        return(
            <div>loading....</div>
        )
    }else{
        return(
            <Grid item xs={xs} lg={lg}>
                <GoogleMap
                mapContainerStyle={{ position: 'relative', height: '27vh', width: '100%' }}
                center={lat != null || long != null ? { lat: lat, lng: long } : { lat: 24.4984312, lng: 54.4036975 }}
                zoom={13}
                >
                    <Marker position={lat != null || long != null ? { lat: lat, lng: long } : { lat: 24.4984312, lng: 54.4036975 }} />
                </GoogleMap>
            </Grid>
        )
    }
}