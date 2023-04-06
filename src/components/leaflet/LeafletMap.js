import React, { useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer, Tooltip, useMap } from 'react-leaflet'

import "leaflet/dist/leaflet.css"; // 설정안하면 조각조각 나옴
import { icon } from "leaflet";


const Icon = icon({
    iconUrl: "/images/marker-icon.png"
  });


const LeafletMap = ({place}) => {

    // 지도 이동
    const RecenterAutomatically = ({lat,lng}) => {
        const map = useMap();
         useEffect(() => {
           map.setView([lat, lng]);
         }, [lat, lng]);
         return null;
       };

    return (
        <div style={{position: 'relative', width:'1000px', height:'500px'}}>
            <MapContainer center={[place.lat, place.lng]} zoom={15} scrollWheelZoom={true} style={{ width: "1000px", height: "500px" }} >
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[place.lat, place.lng]} icon={Icon} url={"/images/marker-icon.png"}>
                    <Popup>
                        여기는 {place.title}입니다.
                    </Popup>
                    <Tooltip>{place.title}</Tooltip>
                </Marker>
                <RecenterAutomatically lat={place.lat} lng={place.lng} />
            </MapContainer>
        </div>
    )
}

export default LeafletMap;