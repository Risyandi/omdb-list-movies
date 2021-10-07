import React, {useState, useEffect} from 'react';
import MoviesServices from '../../services/moviesServices';
import {img} from '../../assets/img';

const MoviesList = (props) => {
  
  const [moviesList, setMoviesList] = useState([]);  
  const [page, setPage] = useState(1);  
  const [loading, setLoading] = useState(false);  
  const [noData, setNoData] = useState(false);  

  console.log(moviesList, "log: moviesList");
  console.log(page, "log: page");
  console.log(loading, "log: loading");
  console.log(noData, "log: noData");

  window.onscroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
      if (!noData) {
        dataMoviesList(page);
      }
    }
  }

  useEffect(() => {
    dataMoviesList(page);
    // eslint-disable-next-line
  }, []);

  const dataMoviesList = (page) => {
    setLoading(true);
    setTimeout(() => {
      // get data from api omdb
      MoviesServices.getMovies(page).then(response => {
        if (response.Response !== 'False') {
          const newPage = page + 1;
          const newList = moviesList.concat(response.Search);
          setMoviesList(newList);
          setPage(newPage);
        } else {
          setNoData(true);
        }
      }).catch(error => {
        console.log(error);
      }).finally(() => {
        setLoading(false);
      });
    }, 1500);
  }

  return (
        <div className="App">
          <header className="App-header">
            <p>
              Movies List
            </p>
          </header>

          <div className="section">
            {
              moviesList.map((movie, index) => (
                <div key={index}>
                  <p>{movie.Title}</p>
                  <p>{movie.Year}</p>
                  <p>{movie.Type}</p>
                  {
                    movie.Poster !== 'N/A' ?
                    <img src={movie.Poster} alt={movie.title} />
                    :
                    <img src={img.posteBlank} alt={movie.title} />
                  }
                </div>
              ))
            }
            { loading ? <div>loading data...</div> : ''}
            { noData ? <div>no data...</div> : ''}
          </div>

        </div>
    )
}

export default MoviesList;