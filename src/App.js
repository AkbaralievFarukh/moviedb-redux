import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import Header from "./Components/Header/Header";
import MoviePage from "./Pages/MoviePage/MoviePage";
import Carousel from "./Components/Carousel/Carousel";

const App = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/movie/:id" element={<MoviePage/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;