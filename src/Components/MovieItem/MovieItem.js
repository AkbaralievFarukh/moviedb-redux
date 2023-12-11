import React from 'react';
import './MovieItem.css'



const MovieItem = ({movie}) => {
    return (
        <div className={"col-3"}>
            <div className={"card"}>
                <img className={"card-img"} src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title}/>
                <div className={"card-body"}>
                    <h5 className={"card-title"}>{movie.title}</h5>
                    <p className={"card-date"}>{movie.release_date}</p>
                </div>
            </div>
        </div>
    );
};

export default MovieItem;