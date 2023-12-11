import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from '../../Redux/Actions/MovieAction';
import MovieList from '../../Components/MovieList/MovieList';
import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import './HomePage.css';

const HomePage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const { movies } = useSelector((state) => state);

    // Получаем значение параметра "page" из строки запроса
    const queryParams = queryString.parse(location.search);
    const currentPageFromQuery = parseInt(queryParams.page, 10) || 1;

    const [currentPage, setCurrentPage] = useState(currentPageFromQuery);

    useEffect(() => {
        dispatch(getMovies(currentPage));
    }, [dispatch, currentPage]);


    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
        // Используйте `navigate` для изменения пути
        navigate(`?page=${newPage}`);
    };

    console.log("Movies:", movies);

    return (
        <div className={'container'}>
            <MovieList movies={movies} />

            {/* Добавьте элементы для пагинации */}
            <div className="pagination">
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                <span>{currentPage}</span>
                <button onClick={() => handlePageChange(currentPage + 1)}>Next</button>
            </div>
        </div>
    );
};

export default HomePage;
