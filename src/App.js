import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import Header from "./Components/Header/Header";
import MoviePage from "./Pages/MoviePage/MoviePage";
import GenrePage from "./Pages/GengrePage/GenrePage";

const App = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/movie/:id" element={<MoviePage/>}/>
                <Route path="/genres" element={<GenrePage/>}/>
                <Route path="/genres/:id" element={<GenrePage/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;