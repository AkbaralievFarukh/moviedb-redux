import { GET_MOVIE_BY_ID, GET_MOVIES } from "../type";

const initialState = {
    movies: [],
    movie: {},
};

export const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MOVIES:
            return { ...state, movies: action.payload.results };
        case GET_MOVIE_BY_ID:
            return {...state, movie: action.payload };
        default:
            return state;
    }
};