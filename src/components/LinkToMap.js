import React from "react";
import { Link } from "react-router-dom";

const LinkToMap = () => {
    return (
        <div>
            <Link to={`/`}><h1>홈</h1></Link>
            <Link to={`/searchKakaoMap`}><h1>카카오 지도 검색</h1></Link>
            <Link to={`/typeNaverMap`}><h1>네이버 지도 맵 종류</h1></Link>
            <Link to={`/searchNaverMap`}><h1>네이버 지도 검색</h1></Link>
            <Link to={`/searchLeafletMap`}><h1>Leaflet 지도 검색</h1></Link>
        </div>
    )
}

export default LinkToMap;