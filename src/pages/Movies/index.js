import React from 'react';

import MoviesList from './MoviesList';
import MoviesDetail from './MoviesDetail';

const MoviesPages = (props) => {
    const urlRoutes = props.match.url;
    return (
        <div>
            {
                urlRoutes === 'movies/detail' ? 
                <MoviesDetail /> 
                :
                <MoviesList />
            }
        </div>
    )
}

export default MoviesPages;