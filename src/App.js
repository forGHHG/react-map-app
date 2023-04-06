import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LinkToMap from "./components/LinkToMap";
import SearchKakaoMap from "./components/kakao/SearchKakaoMap";
import TypeNaverMap from "./components/naver/TypeNaverMap";
import SearchNaverMap from "./components/naver/SearchNaverMap";
import SearchLeafletMap from "./components/leaflet/SearchLefletMap";

const App = () => (

    <Router>
        <Routes>
            <Route path={`/`} exact element={<LinkToMap />}></Route>
            <Route path={`/searchKakaoMap`} exact element={<SearchKakaoMap />}></Route>
            <Route path={`/typeNaverMap`} element={<TypeNaverMap />}></Route>
            <Route path={`/searchNaverMap`} element={<SearchNaverMap />}></Route>
            <Route path={`/searchLeafletMap`} element={<SearchLeafletMap />}></Route>
        </Routes>
    </Router>
);

export default App;