import React from 'react';
import MoviesList from './MoviesList';
import MoviesDetail from './MoviesDetail';

const MoviesPages = (props) => {
    const urlRoutes = props.match.url;
    const paramsId = props.match.params.id
    console.log(props, "props index movies");
    return (
        <div>
            {
                urlRoutes === '/movies' ? 
                <MoviesList />
                :
                <MoviesDetail id={paramsId}/> 
            }
        </div>
    )
}

export default MoviesPages;