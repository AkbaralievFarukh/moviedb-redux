import React from 'react';
import MovieItem from "../MovieItem/MovieItem";
import {Grid} from "@mui/material";
import './MovieList.css'

const MovieList = ({movies}) => {
    return (
        <Grid container spacing={2} sx={{marginTop: '30px'}}>
            {movies.map(movie => (
                <Grid item key={movie.id} xs={12} sm={6} md={4} lg={3}>
                    <MovieItem movie={movie} />
                </Grid>
            ))}
        </Grid>
    );
};

export default MovieList;
