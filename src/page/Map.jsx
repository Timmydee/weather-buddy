import * as React from "react";
import { useState, useContext } from "react";
import { render } from "react-dom";
import ReactMapGl, { Marker, Popup } from "react-map-gl";
import Map from "react-map-gl";
import WeatherContext from "../WeatherContext";
import {GoLocation} from "react-icons/go"

import "mapbox-gl/dist/mapbox-gl.css";

function Maps () {

  const { temps, hum, latitude, longitude, cityName } = useContext(WeatherContext);
  const [showPopup, setShowPopup] = React.useState(true);
  const [viewState, setViewState] = React.useState({
    longitude: longitude || -122.4,
    latitude: latitude || 37.8,
    zoom: 1
  });

  return (
    <Map
      {...viewState}
      onMove={evt => setViewState(evt.viewState)}
      mapboxAccessToken="pk.eyJ1IjoidGltbXlkZWUiLCJhIjoiY2xobWl0aWZ4MHhkMDNlb2RxeG84aWo3dSJ9.pVtGJuYn2_WIP8Xscnk5Jw"
      // style={{ width: "100%", height: "80vh" }}
      className="w-[100%] h-[60vh] lg:h-[80vh]"
      mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
    >
      <Marker
        longitude={longitude || -122.4} latitude={latitude || 37.8}
      >
        <GoLocation className="text-[30px] text-red-600"/>
      </Marker>
      {showPopup && (
        <Popup 
          longitude={longitude || -122.4}
          latitude={latitude || 37.8}
          anchor="left"
          onClose={() => setShowPopup(false)}
        >
          <div className="w-[150px] h-[120px] bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-3 rounded-md shadow-sm text-white">
            <h2 className="text-md font-semibold mb-2">Weather in {cityName}</h2>
            <p className="text-sm">Temperature: {temps ? temps : 'N/A'}</p>
            <p className="text-sm">Humidity: {hum ? hum : 'N/A'}%</p>
          </div>  
        </Popup>)
      }
    </Map>
  );
}

/* global document */
export default Maps