import React from 'react';
import MovieItem from "../MovieItem/MovieItem";

const MovieList = ({movies}) => {
    return (
        <div className={"row"}>
            {
                movies.map(movie => {
                    return (
                        <MovieItem movie={movie} key={movie.id} />
                    )
                })
            }
        </div>
    );
};

export default MovieList;