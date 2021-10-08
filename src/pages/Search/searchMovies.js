import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import MoviesServices from '../../services/moviesServices';
import {img} from '../../assets/img';
import LoadingGhost from '../../common/component/loadingGhost';

const SearchMovies = (props) => {
  
  const [moviesList, setMoviesList] = useState([]);  
  const [page, setPage] = useState(1);  
  const [loading, setLoading] = useState(false);  
  const [noData, setNoData] = useState(false);
  // eslint-disable-next-line
  const [dataSearch, setDataSearch] = useState('');

  window.onscroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
      if (!noData) {
        dataMoviesList(page, dataSearch);
      }
    }
  }

  const dataMoviesList = (page, dataSearch) => {
    setLoading(true);
    setTimeout(() => {
      // get data from api omdb
      MoviesServices.getMovies(page, dataSearch).then(response => {
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

  const searchingData = async (event) => {
      setDataSearch(event.target.value);
  }

const bindData = (dataSearch) => {
    MoviesServices.getMovies(page, dataSearch).then(response => {
        if (response.Response !== 'False') {
            const newList = moviesList.concat(response.Search);
            setMoviesList(newList);
        } else {
            setMoviesList([]);
        }
    }).catch(error => {
        console.log(error, "error");
    });
}

 const onHandleKeyPress = async (e) => {
     let eventEnter = e.key;
     if (eventEnter === 'Enter') {
        bindData(dataSearch);
     }
 }

  return (
    <div className="container mx-auto max-w-screen-md pt-32">

        <input 
        className="border rounded-md mx-auto w-full p-4 focus:outline-none focus:ring-green-700"
        value={dataSearch}
        onChange={searchingData}
        onKeyPress={onHandleKeyPress}
        type="search" 
        placeholder="Search" 
        />

      {/* card movies list */}
      {
        moviesList.length !== 0 ?
            moviesList.map((movie, index) => (
            <div className="bg-gray-100 rounded-md border mt-2 mb-2" key={index}>
                <div className="flex">
                {
                    movie.Poster !== 'N/A' ?
                    <div className="flex-none w-1/6 relative">
                    <img src={movie.Poster} alt="poster-images" className="absolute inset-0 w-full h-full object-cover rounded-md z-0" />
                    </div>
                    :
                    <div className="flex-none w-1/6 relative">
                    <img src={img.posterBlank} alt="poster-images" className="absolute inset-0 w-full h-full object-cover rounded-md z-0" />
                    </div>
                }
                <div className="flex-auto p-6">
                    <div className="flex flex-wrap">
                    <h1 className="flex-auto text-3xl font-semibold">
                        {movie.Title ? movie.Title : 'Need For Speed'}
                    </h1>
                    <div className="w-full flex-none text-base font-medium text-gray-500 mt-2">
                        {movie.Year ? movie.Year : '2020'} - {movie.Type ? movie.Type : 'Movie'}
                    </div>
                    </div>
                    <p className="text-lg text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur corporis optio enim in placeat unde non dignissimos possimus, id, expedita et, excepturi nesciunt mollitia! Dolor eaque minus excepturi corporis iure?
                    </p>
                    <Link to={`/movies/detail/${movie.imdbID}`} className="text-blue-500"> 
                    <div className="w-full flex-none text-lg font-medium text-green-500 mt-5">
                        Detail Movies
                    </div>
                    </Link>
                </div>
                </div>
            </div>
            ))
        :
        <div className="p-2 bg-gray-100 rounded-md border mt-2 mb-2 text-center">
            <div className="flex flex-col items-center">
                <img src={img.searching} alt="poster-images" className="w-20 h-20 mb-3" />
                <h1 className="text-lg font-semibold"> Searching Your Favorite Movies </h1>
            </div>
        </div> 
      }

      {/* loading before binding data */}
      { 
        loading ? 
        <LoadingGhost loadingCenter={false}/> 
        : ''
      }

      {/* binding data no data */}
      { 
       noData ?  
        <div className="p-2 bg-gray-100 rounded-md border mt-2 mb-2 text-center">
          <div className="flex flex-col items-center">
                <img src={img.searching} alt="poster-images" className="w-20 h-20 mb-3" />
                <h1 className="text-lg font-semibold"> No Data For Your Favorite Movies </h1>
            </div>
        </div> 
        : ''
      }
    </div>
    )
}

export default SearchMovies;