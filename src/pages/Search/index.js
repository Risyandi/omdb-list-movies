import React from 'react';
import NavigationBar from '../../common/component/navigationBar'; 
import SearchMovies from './searchMovies'; 

const MoviesSearchPages = (props) => {
    return (
        <div className="container mx-auto">
            <NavigationBar/>
            <SearchMovies/>
        </div>
    )
}

export default MoviesSearchPages;