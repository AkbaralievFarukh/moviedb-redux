import React from 'react';
import { Link } from 'react-router-dom';
import {Card, CardContent, CardMedia, Typography, Grid} from '@mui/material';
import './MovieItem.css';

const MovieItem = ({ movie }) => {
    return (
        <Link to={`/movie/${movie.id}`} style={{ textDecoration: 'none' }}>
            <Card sx={{height: "100%"}}>
                <CardMedia
                    component="img"
                    alt={movie.title}
                    image={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                />
                <CardContent>
                    <Typography variant="h6" component="div">
                        {movie.title}
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary">
                        {movie.release_date}
                    </Typography>
                </CardContent>
            </Card>
        </Link>
    );
};

export default MovieItem;
