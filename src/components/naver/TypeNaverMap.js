import React, { useState } from "react";
import { Container as MapDiv, NaverMap, Marker, useNavermaps } from "react-naver-maps";
import LinkToMap from "../LinkToMap";

const LOCATION = {
    lat : 36.360998580215515, 
    lng : 127.3817344945746
};


const TypeNaverMap = () => {

  const navermaps = useNavermaps();
  const [mapTypeId, setMapTypeId] = useState(navermaps.MapTypeId.NORMAL);
  const buttons = [
    {
      typeId: navermaps.MapTypeId.NORMAL,
      text: '일반지도',
    },
    {
      typeId: navermaps.MapTypeId.TERRAIN,
      text: '지형도',
    },
    {
      typeId: navermaps.MapTypeId.SATELLITE,
      text: '위성지도',
    },
    {
      typeId: navermaps.MapTypeId.HYBRID,
      text: '겹쳐보기',
    },
  ];
  
    return (
      <div>
        <LinkToMap />
        <h1>네이버 지도 맵 종류</h1>

        <MapDiv style={{position: 'relative', width:'1000px', height:'500px'}}>
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              zIndex: 1000,
              padding: 5,
            }}
          >
            {buttons.map((btn) => {
              return (
                <button
                  key={btn.typeId}
                  style={{
                    border: 'solid 1px #333',
                    outline: '0 none',
                    borderRadius: '5px',
                    boxShadow: '2px 2px 1px 1px rgba(0, 0, 0, 0.5)',
                    margin: '0 5px 5px 0',
                    backgroundColor:
                      btn.typeId === mapTypeId ? '#2780E3' : 'white',
                    color: btn.typeId === mapTypeId ? 'white' : 'black',
                  }}
                  onClick={() => {
                    setMapTypeId(btn.typeId)
                  }}
                >
                  {btn.text}
                </button>
              )
            })}
          </div>
          <NaverMap
            style={{ width: '100%', height: '100%' }}
            defaultCenter={{ lat: LOCATION.lat, lng: LOCATION.lng }}
            defaultZoom={15}
            mapTypeId={mapTypeId}
          >
          <Marker position={{ lat: LOCATION.lat, lng: LOCATION.lng }} />
          </NaverMap>
        </MapDiv>
      </div>
    )
}

export default TypeNaverMap;