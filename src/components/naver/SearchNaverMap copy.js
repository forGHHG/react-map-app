import React, { useState } from "react";
import { Container as MapDiv, NaverMap, Marker, useNavermaps } from "react-naver-maps";

import '../css/naverMap.css';
import LinkToMap from "../LinkToMap";

const LOCATION = {
    lat : 36.360998580215515, 
    lng : 127.3817344945746
};

const {naver} = window;

const SearchNaverMap = () => {
    const [inputVal, setInputVal] = useState('');
    const [lat, setLat] = useState(LOCATION.lat);
    const [lng, setLng] = useState(LOCATION.lng);


    const infoWindow = new naver.maps.InfoWindow({anchorSkew : true});
    const navermaps = useNavermaps();

    const searchAddressToCoordinate = (e) => {
        e.preventDefault();

        if (inputVal === '') {
            return alert('입력해주새요!');
        }

        infoWindow.close();

        navermaps.Service.geocode({query : inputVal}, function (status, response) {
            if (status === navermaps.Service.Status.ERROR) {
                return alert('검색 결과 중 오류가 발생했습니다.');
            }
            if (response.v2.meta.totalCount === 0) {
                return alert('검색 결과가 존재하지 않습니다.');
            }

            const htmlAddresses = [],
                item = response.v2.addresses[0],
                point = new naver.maps.LatLng(item.x, item.y);

            if (item.roadAddress) {
                htmlAddresses.push('[도로명 주소] ' + item.roadAddress);
            }
    
            if (item.jibunAddress) {
                htmlAddresses.push('[지번 주소] ' + item.jibunAddress);
            }
    
            if (item.englishAddress) {
                htmlAddresses.push('[영문명 주소] ' + item.englishAddress);
            }

            infoWindow.setContent([
                '<div style="padding:10px;min-width:200px;line-height:150%;">',
                '<h4 style="margin-top:5px;">검색 주소 : '+ inputVal +'</h4><br />',
                htmlAddresses.join('<br />'),
                '</div>'
            ].join('\n'));

            let x = parseFloat(item.x); // 경도
            let y = parseFloat(item.y); // 위도

            setLat(y);
            setLng(x);

            navermaps.setCenter(point);
            infoWindow.open(navermaps, point);
        });
    }
  
    return (
        <div>
            <LinkToMap />
            <h1>네이버 지도 검색</h1>

            <MapDiv style={{position: 'relative', width:'1000px', height:'500px'}}>
                <div className="option"
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: 1000,
                    padding: 5,
                }}
                >
                    <form onSubmit={searchAddressToCoordinate}>
                        <input type="text" 
                            placeholder="도로명 주소를 입력하세요." 
                            value={inputVal}
                            onChange={(e) => setInputVal(e.target.value)}
                        />
                        <button type="submit">검색</button>
                    </form>
                </div>
                <NaverMap
                    style={{ width: '100%', height: '100%' }}
                    defaultCenter={{ lat, lng }}
                    defaultZoom={15}
                >
                    <Marker position={{ lat, lng }} />
                </NaverMap>
            </MapDiv>
        </div>
    )
}

export default SearchNaverMap;