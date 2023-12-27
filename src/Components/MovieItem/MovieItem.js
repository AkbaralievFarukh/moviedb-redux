import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import {Card, CardContent, CardMedia, Typography, Tooltip} from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';

const MovieItem = ({ movie }) => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <Link to={`/movie/${movie.id}`} style={{ textDecoration: 'none' }}>
            <Card sx={{height: "100%", background: 'transparent'}}>
                  data-aos="flip-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000">
                <CardMedia
                    className={"card-media"}
                    component="img"
                    alt={movie.title}
                    image={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                />
                <CardContent sx={{color: 'white'}}>
                    <Tooltip title={movie.title}>
                        <Typography noWrap={true} variant="h6" component="div">
                            {movie.title}
                        </Typography>
                    </Tooltip>
                    <Typography variant="subtitle2" color="white">
                        {movie.release_date}
                    </Typography>
                </CardContent>
            </Card>
        </Link>
    );
};

export default MovieItem;
