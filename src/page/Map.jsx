import * as React from "react";
import { useState, useContext } from "react";
import { render } from "react-dom";
import ReactMapGl, { Marker, Popup } from "react-map-gl";
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
    <ReactMapGl
      {...viewState}
      onMove={evt => setViewState(evt.viewState)}
      mapboxAccessToken="pk.eyJ1IjoidGltbXlkZWUiLCJhIjoiY2xobWl0aWZ4MHhkMDNlb2RxeG84aWo3dSJ9.pVtGJuYn2_WIP8Xscnk5Jw"
      style={{ width: "100vw", height: "80vh" }}
      mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
    >
      {/* <div onClick={() => setShowPopup(true)}>
        <p>click me</p>
        <Marker longitude={longitude || -122.4} latitude={latitude || 37.8} color="red" />
      </div> */}
      <Marker
        longitude={longitude || -122.4} latitude={latitude || 37.8}
      >
        <GoLocation className="text-[20px] text-red-600"/>
        {/* <p onClick={() => setShowPopup(true)} className="cursor-pointer">click me</p> */}
      </Marker>
      {showPopup && (
        <Popup 
          longitude={longitude || -122.4}
          latitude={latitude || 37.8}
          anchor="left"
          onClose={() => setShowPopup(false)}
        >
          <div className = "w-[200px] h-[70px]">
            <h2>Weather in {cityName}</h2>
            <p>Temperature {temps ? temps : 'N/A'}</p>
            <p>Humidity: {hum ? hum : 'N/A'}%</p>
          </div>
          
        </Popup>)
      }
    </ReactMapGl>
  );
}

/* global document */
export default Maps