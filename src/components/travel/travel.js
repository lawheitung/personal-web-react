import React, { Component,useRef, useEffect, useState } from 'react'

import MapGL, { Marker,NavigationControl, Popup, FullscreenControl,ScaleControl, GeolocateControl} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import IntroLine from "../intro"
import './travel.scss'

import Pins from './Pins';
import CityInfo from './CityInfo';
import CITIES from '../../cities.json'

const ICON = `M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
        c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
        C20.1,15.8,20.2,15.8,20.2,15.7z`;

const SIZE = 30;

const MAPBOX_TOKEN ='pk.eyJ1IjoibGF3aGVpdHVuZyIsImEiOiJjazh0dHMxNzEwNDEzM21vM2Z2M2FsbjljIn0.y1ygmbLRRSswPtVrQsMBUQ'

const geolocateStyle = {
  top: 0,
  left: 0,
  padding: '10px'
};

const fullscreenControlStyle = {
  top: 36,
  left: 0,
  padding: '10px'
};

const navStyle = {
  top: 72,
  left: 0,
  padding: '10px'
};

const scaleControlStyle = {
  bottom: 36,
  left: 0,
  padding: '10px'
};

export default function Travel (){

    const [viewport, setViewport] = useState({
      latitude: 30,
      longitude: 20,
      zoom: 1.2,
      bearing: 0,
      pitch: 0
    });
    const [popupInfo, setPopupInfo] = useState(null)
  
	return (
		<>
      <div  class='component-container'>
			<IntroLine title="Travel" description="My quest to conquer the world"/>
      <div data-sal="slide-up" className='center-content'>
      <div className="content">

      <div className="map-container">



        <MapGL 
                  {...viewport}
                  width="65vw"
                  height="60vh"
                  center="center"
                  mapStyle="mapbox://styles/mapbox/streets-v11"
                  onViewportChange={setViewport}
                  mapboxApiAccessToken={MAPBOX_TOKEN}
              >     
              <Pins data={CITIES} onClick={setPopupInfo} />

                {popupInfo && (
                  <Popup
                    tipSize={5}
                    anchor="top"
                    longitude={popupInfo.longitude}
                    latitude={popupInfo.latitude}
                    closeOnClick={false}
                    onClose={setPopupInfo}
                  >
                    <CityInfo info={popupInfo} />
                  </Popup>
                  
                )} 
              
                  <GeolocateControl style={geolocateStyle} />
                  <FullscreenControl style={fullscreenControlStyle} />
                  <NavigationControl style={navStyle} />
                  <ScaleControl style={scaleControlStyle} /> 

                  {/* <div className="eclipse"></div> */}
                  </MapGL>
      </div>
      </div>
      </div>
      </div>


                    

		</>
	)
}

