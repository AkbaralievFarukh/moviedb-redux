import {GET_MOVIE_BY_ID, GET_MOVIES} from "../type";
import axios from "axios";

// const BASE_URL = `https://api.themoviedb.org/3/`
// const URL = `https://api.themoviedb.org/3/discover/movie?page=1&api_key=2336723e3b751d0f27f68be87a1da76c&language=ru-RU`
// const API_KEY = `2336723e3b751d0f27f68be87a1da76c`

export const getMovies = (page) => {
    return (dispatch) => {
        axios(`https://api.themoviedb.org/3/discover/movie?page=1&api_key=2336723e3b751d0f27f68be87a1da76c&language=ru-RU&page=${page}`)
            .then(({data}) => {
                dispatch({type: GET_MOVIES, payload: data})
            })
    }
}

export const getMovieById = (id) => {
    return dispatch => {
        axios(`https://api.themoviedb.org/3/movie/${id}?api_key=2336723e3b751d0f27f68be87a1da76c&language=ru-RU`)
           .then(({data}) => {
                dispatch({type: GET_MOVIE_BY_ID, payload: data})
            })
    }
}