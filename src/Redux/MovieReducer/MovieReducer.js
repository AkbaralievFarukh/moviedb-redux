import {GET_MOVIE_BY_ID, GET_MOVIE_TRAILER, GET_MOVIES} from "../type";

const initialState = {
    movies: [],
    movie: {},
    movieTrailer: [],
};

export const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MOVIES:
            return {...state, movies: action.payload.results};
        case GET_MOVIE_BY_ID:
            return {...state, movie: action.payload};
        case GET_MOVIE_TRAILER:
            return {...state, movieTrailer: action.payload};
        default:
            return state;
    }
};