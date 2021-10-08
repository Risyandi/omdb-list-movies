import React from 'react';
import NavigationBar from '../../common/component/navigationBar'; 
import MoviesList from '../Movies/MoviesList'; 

const Homepage = (props) => {
    return (
      <div className="container mx-auto">
          <NavigationBar/>
          <MoviesList/>
      </div>
    )
}

export default Homepage;