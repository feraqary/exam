import React, {useState, useRef} from 'react'
import { TextField } from '@mui/material';
//Import React Scrit Libraray to load Google object
import { StandaloneSearchBox, LoadScript } from "@react-google-maps/api";
import { ConstructionOutlined } from '@mui/icons-material';





export default function MapAutocomplete({onChangeAddress, country, state}) {
    // const [Country, setCountry] = useState('')
    // const [state, setState] = useState('')

    const inputRef = useRef();
    const handlePlaceChanged = () => { 
        const [ place ] = inputRef.current.getPlaces();
        if(place) { 
            console.log(place.address_components)
            if(place.address_components != undefined && place.address_components.length > 0){
                place.address_components.forEach((addr)=>{
                    if(addr.types.indexOf('country') != -1){
                        console.log('country: ' + addr.long_name)
                        // setCountry(addr.long_name)
                        country(addr.long_name)
                    }if(addr.types.indexOf('administrative_area_level_1') != -1 && place.address_components.length > 1){
                        console.log(`state: ${addr.long_name}`)
                        state(addr.long_name)
                    }else{return}
                })
                // console.log(place.formatted_address)
                // console.log(place.formatted_address)
                console.log(place.geometry.location.lat())
                console.log(place.geometry.location.lng())
            }

        }else{return}
    }
  return (
    <>
    {/* // <LoadScript googleMapsApiKey={"AIzaSyAfJQs_y-6KIAwrAIKYWkniQChj5QBvY1Y "} > */}
        <StandaloneSearchBox
            onLoad={ref => inputRef.current = ref}
            onPlacesChanged={handlePlaceChanged}
        >

            <TextField
                className="form-control"
                placeholder="Enter Location"
                onChange={onChangeAddress ? (e)=>{onChangeAddress(e.target.value)} : (e)=>{return}}
                fullWidth
            />
        </StandaloneSearchBox>
    {/* // </LoadScript> */}
    </>
  )
}
