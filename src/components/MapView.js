import React,{ useContext } from "react";
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

import { appContext } from './../context/AppProvider';

function MapView() {
    const { coordinates } = useContext(appContext);
    const position = [coordinates.latitude, coordinates.longitude]
    return (
        <div>
           
        </div>
    );
}

export default MapView;
