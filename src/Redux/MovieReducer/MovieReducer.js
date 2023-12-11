import {GET_MOVIES} from "../type";

const initialState = {
    movies: []
}

export const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MOVIES:
            return {...state, movies: action.payload.results}
        default:
            return state
    }
}
