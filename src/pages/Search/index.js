import React from 'react';
import NavigationBar from '../../common/component/navigationBar'; 

const MoviesSearchPages = (props) => {
    const paramsId = props.match.params.id
    return (
        <div className="container mx-auto">
            <NavigationBar/>
        </div>
    )
}

export default MoviesSearchPages;