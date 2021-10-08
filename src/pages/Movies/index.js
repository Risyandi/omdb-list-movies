import React from 'react';
import NavigationBar from '../../common/component/navigationBar'; 
import MoviesDetail from './MoviesDetail';

const MoviesPages = (props) => {
    const paramsId = props.match.params.id
    return (
        <div className="container mx-auto">
            <NavigationBar/>
            <MoviesDetail id={paramsId}/> 
        </div>
    )
}

export default MoviesPages;