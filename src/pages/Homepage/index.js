import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assets/img/logo.svg';

const Homepage = (props) => {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Link to="/movies">Movies</Link>
            <Link to="/movies/detail">Movies Detail</Link>
          </header>
        </div>
    )
}

export default Homepage;