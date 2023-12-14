import React, {useEffect} from 'react';
import {Container} from "@mui/material";
import GenresList from "../../Components/GenresList/GenresList";
import {useDispatch, useSelector} from "react-redux";
import {getMovieByGenre} from "../../Redux/Actions/MovieAction";
import {useParams} from "react-router-dom";
import MovieList from "../../Components/MovieList/MovieList";

const GenrePage = () => {
    const dispatch = useDispatch()
    const {movies} = useSelector(state => state)
    const {id} = useParams()
    useEffect(() => {
        dispatch(getMovieByGenre(id))
    }, [dispatch, id])
    return (
        <Container>
            <GenresList />
            <MovieList movies={movies} />
        </Container>
    );
};

export default GenrePage;