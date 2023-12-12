import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from '../../Redux/Actions/MovieAction';
import MovieList from '../../Components/MovieList/MovieList';
import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { Container, Pagination } from "@mui/material";

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

    const totalPageCount = 10; // Update this with the total number of pages

    const handlePageChange = (event, newPage) => {
        event.preventDefault();
        setCurrentPage(newPage);
        // Используйте `navigate` для изменения пути
        navigate(`?page=${newPage}`);
    };

    return (
        <Container>
            <MovieList movies={movies} />
            <Pagination
                count={totalPageCount}
                page={currentPage}
                onChange={handlePageChange}
                variant="outlined"
                shape="rounded"
                style={{ marginTop: '20px', marginBottom: '20px', display: 'flex', justifyContent: 'center'}}
            />
        </Container>
    );
};

export default HomePage;
