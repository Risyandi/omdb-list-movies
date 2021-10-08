import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {img} from '../../assets/img';
import MoviesServices from '../../services/moviesServices';

const MoviesDetail = (props) => {
    const idMovies = props.id;
    const [moviesDetail, setMoviesDetail] = useState([]);

    useEffect(() => {
      dataMoviesDetail(idMovies);
      // eslint-disable-next-line
    }, []);

    const dataMoviesDetail = (id) => {
      // get data from api omdb
      MoviesServices.getMoviesDetail(id).then(response => {
        if (response.Response !== 'False') {
          console.log(response, "response");
          let moviesArray = [];
          moviesArray.push(response);
          setMoviesDetail(moviesArray);
        }
      }).catch(error => {
        console.log(error);
      });
    }

    return (
      <div className="container mx-auto max-w-screen-md flex h-screen justify-center items-center">
        {/* card movies detail */}
        {
          moviesDetail.map((movie, index) => (
            <div className="bg-gray-100 rounded-md border mt-2 mb-2" key={index}>
              <div className="flex">
              {
                movie.Poster !== 'N/A' ?
                  <div className="flex-none w-1/4 relative">
                    <img src={movie.Poster} alt="poster-images" className="absolute inset-0 w-full h-full object-cover rounded-md" />
                  </div>
                  :
                  <div className="flex-none w-1/4 relative">
                    <img src={img.posterBlank} alt="poster-images" className="absolute inset-0 w-full h-full object-cover rounded-md" />
                  </div>
                }
                <div className="flex-auto p-6">
                  <div className="flex flex-wrap">
                    <h1 className="flex-auto text-3xl font-semibold">
                      {movie.Title ? movie.Title : 'Need For Speed'}
                    </h1>
                    <div className="w-full flex-none text-base font-medium text-green-700 mt-2 mb-2">
                      {movie.Year ? movie.Year : '2020'} - {movie.Type ? movie.Type : 'Movie'}
                    </div>
                  </div>
                  <p className="text-lg text-gray-500">
                  {
                  movie.Plot !== 'N/A' ? movie.Plot : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                  }
                  </p>
                  <div className="w-full flex-none text-base font-medium text-gray-500 mt-2 mb-2">
                    Rating : {movie.Rating ? movie.imdbRating : '10'} | Votes : {movie.imdbVotes ? movie.imdbVotes : '100'}
                  </div>
                  <div className="w-full flex-none text-base font-medium text-yellow-600 mt-2 mb-2">
                    Actors : {movie.Actors ? movie.Actors : 'unknown'} | Director : {movie.Director ? movie.Director : 'unknown'}
                  </div>
                  <Link to={`/movies`} className="text-blue-500"> 
                    <div className="w-full flex-none text-lg font-medium text-green-500 mt-5">
                      Back to movies list
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            ))
          }
      </div>
     
    )
}

export default MoviesDetail;