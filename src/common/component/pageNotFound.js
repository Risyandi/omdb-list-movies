import React from 'react';
import {Link} from 'react-router-dom';

const PageNotFound = (props) => {
    return (
    <div className="App">
        <header className="App-header">
            <p>
                <h1> 404</h1>
                <h1> Oops! Page Not Found</h1>
                <Link to="/"> Back To Homepage</Link>
            </p>
        </header>
    </div>
    )
}

export default PageNotFound;