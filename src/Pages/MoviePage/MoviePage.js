import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {clearMovie, getMovieById} from "../../Redux/Actions/MovieAction";
import './MoviePage.css'
import {Container} from "@mui/material";

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
            <div className={"movie-card"}>
                <div className={"row"}>
                    <div className={"col-6"}>
                        <div className={"movie-box"}>
                            <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
                        </div>
                    </div>
                    <div className={"col-6"}>
                        <div className={"movie-box"}>
                            <h1 className={"movie-title"}>{movie.title}</h1>
                            <p className={"movie-overview"}>{movie.overview}</p>
                            <p className={"movie-date"}>Дата выхода: {movie.release_date}</p>
                            <p className={"movie-rating"}>Рейтинг: {movie.vote_average}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default MoviePage;