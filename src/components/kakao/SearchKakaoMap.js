import React, { useState } from "react";
import KakaoMap from "./KakaoMap";

import '../css/kakaoMap.css';
import LinkToMap from "../LinkToMap";

const SearchKakaoMap = () => {
    const [inputVal, setInputVal] = useState('');
    const [place, setPlace] = useState('');

    const searchPlaces = (e) => {
        e.preventDefault();

        if (inputVal === '') {
            alert('키워드를 입력해주세요!');
            return;
        }

        setPlace(inputVal);
        setInputVal('');
    }

    return (
        <div >
            <LinkToMap />
            <h1>카카오 지도 검색</h1>

            <div className="map_wrap">
                <KakaoMap searchPlace={place} />

                <div id="menu_wrap" className="bg_white">
                    <div className="option">
                        <div>
                            <form onSubmit={searchPlaces}>
                                키워드 : 
                                <input type='text' value={inputVal} id='keyword' size='15' 
                                    onChange={(e) => setInputVal(e.target.value)}
                                    placeholder='키워드를 입력하세요.'    
                                />
                                <button type='submit'>검색</button>
                            </form>
                        </div>
                    </div>
                    <hr />
                    <ul id="placesList"></ul>
                    <div id="pagination"></div>
                </div>

            </div>
        </div>
    )
}

export default SearchKakaoMap;