import React, {useEffect} from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './Carousel.css';

// import required modules
import {Autoplay, EffectFade, Navigation, Pagination} from 'swiper/modules';
import {useDispatch, useSelector} from "react-redux";
import {getMovies} from "../../Redux/Actions/MovieAction";
import {BACKDROP_URL, IMAGE_URL} from "../../Config/Config";
import {Link} from "react-router-dom";

const Carousel = () => {
    const dispatch = useDispatch();
    const {movies} = useSelector(state => state);
    useEffect(() => {
        dispatch(getMovies())
    }, [dispatch]);
    console.log(movies)
    return (
        <>
            <>
                <Swiper
                    effect={'fade'}
                    slidesPerView={3}
                    spaceBetween={30}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    allowTouchMove={false}
                    modules={[EffectFade, Navigation, Pagination, Autoplay]}
                    className="mySwiper"
                >
                    {
                        movies
                            .filter(movie => movie.backdrop_path !== null && movie.overview !== "")
                            .map(movie => (
                                <SwiperSlide key={movie.id}>
                                    <div className='carousel-img' style={
                                        {
                                            backgroundImage: `url(${BACKDROP_URL}${movie.backdrop_path})`,
                                        }
                                    }>
                                        <Link to={`/movie/${movie.id}`}>
                                            <div className='carousel-poster'>
                                                <img src={`${IMAGE_URL}${movie.poster_path}`} alt="" className='carousel-poster__img' />
                                                <div>
                                                    <h3>{movie.title}</h3>
                                                    <p>Рейтинг: {movie.vote_average}</p>
                                                    <p>{movie.overview}</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </SwiperSlide>
                            ))
                    }
                </Swiper>
            </>
        </>
    );
};

export default Carousel;