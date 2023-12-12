import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {clearMovie, getMovieById} from "../../Redux/Actions/MovieAction";
import './MoviePage.css'
import {Container, Grid, Typography} from "@mui/material";

const MoviePage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const {movie} = useSelector((state) => state);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            await dispatch(getMovieById(id));
            navigate(`/movie/${id}`);
        };
        fetchMovieDetails();
        dispatch(clearMovie())
    }, [dispatch, navigate, id]);
    return (
        <Container >
            <Grid container spacing={2} sx={{marginTop: '30px', marginBottom: '30px'}}>
                <Grid item xs={12} md={6}>
                    <img className={"movie-poster"} src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
                </Grid>
                <Grid item xs={12} md={6} >
                    <Typography sx={{ marginBottom: '20px' }} variant={"h4"} >{movie.title}</Typography>
                    <Typography sx={{ marginBottom: '20px' }} variant={"subtitle1"} >{movie.overview}</Typography>
                    <Typography sx={{ marginBottom: '20px' }} variant={"subtitle2"} >Дата выхода: {movie.release_date}</Typography>
                    <Typography sx={{ marginBottom: '20px' }} variant={"subtitle2"} >Рейтинг: {movie.vote_average}</Typography>
                </Grid>
            </Grid>
        </Container>
    );
};

export default MoviePage;