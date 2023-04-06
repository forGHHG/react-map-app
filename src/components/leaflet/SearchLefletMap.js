import React, { useEffect, useState } from "react";

import "leaflet/dist/leaflet.css"; // 설정안하면 조각조각 나옴

import LinkToMap from "../LinkToMap";
import LeafletMap from "./LeafletMap";

const LOCATION = [36.360998580215515, 127.3817344945746];

const mapList = [
    {lat: LOCATION[0], lng:LOCATION[1], title: '처음'},
    {lat: 36.32752421109437, lng:127.42587356164873, title: '성심당'},
    {lat: 36.32420013562803, lng:127.40640003481619, title: '코스트코'},
    {lat: 36.356766196549856, lng:127.3808515099755, title: '정부청사역'},
]


const SearchLeafletMap = () => {
    const [place, setPlace] = useState(mapList[0]);
    const [index, setIndex] = useState(0);

    const handleOnClick = (e) => {
        e.preventDefault();

        const index = e.target.value;
        setIndex(index);
    }

    useEffect(() => {
        const newItem = mapList[index];
        setPlace(newItem);

    }, [index]);


    return (
        <div >
            <LinkToMap />
            <h1>Leaflet 지도 검색</h1>

            <LeafletMap place={place} handleOnClick={handleOnClick} />

            <div>
                <button value={1} onClick={handleOnClick}>성심당</button>
                <button value={2} onClick={handleOnClick}>코스트코</button>
                <button value={3} onClick={handleOnClick}>정부청사역</button>
            </div>

        </div>
    )
}

export default SearchLeafletMap;