import React, {useState, useEffect, useContext} from 'react'
import MovieCard from '../components/MovieCard'

const FEATURED_API =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const Main = () => {
    const [movies, setMovies] = useState([]);
    console.log('movies', movies)
    const [searchTerm, setSearchTerm] = useState('');
    console.log('searchTerm',searchTerm)

    useEffect(() => {
      getMovies(FEATURED_API);
      
    }, [])

    const getMovies = (API) => {

      fetch(API)
      .then(res =>res.json())
      .then(res => setMovies(res.results))

    }

    const handleSearch = (e)=>{
      e.preventDefault();

      if(searchTerm){
        getMovies(SEARCH_API + searchTerm);
        setSearchTerm("")

      }

    }


    return (
        <>
        <form className="search" onSubmit={handleSearch}>
            <input 
                type="search"
                className="search-input"
                placeholder="Search a movie..."
                onChange={e => setSearchTerm(e.target.value)}
            />
        </form>
        <div className="movie-container">
           {movies.map((movie) => <MovieCard key={movie.id} {...movie}/>)}
        </div>
        </>
    )
}

export default Main