import {useState, useEffect} from 'react';

import MovieCard from './MovieCard';

import './App.css';
import SearchIcon from './search.svg';

// c032e2d7


const API_URL = 'http://www.omdbapi.com?apikey=c032e2d7';

const movie1 = {
    
        "Title": "Superman",
        "Year": "1978",
        "imdbID": "tt0078346",
        "Type": "movie",
        "Poster": "N/A"
    
}


 
const App = () => {

    const [movies, setMovies] = useState([]);

     
    const [searchTerm, setSearchTerm] = useState('');
         
   
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
    
        const data = await response.json();

        setMovies(data.Search);
    
    }
    



    useEffect(() => {
        searchMovies('Superman');
     
    }, []);



    return (
        <div className='app'>
            <h1>PeaceMovies</h1>
            
            <div className='search'>
                <input
                    placeholder='Search for movies'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img
                    src={SearchIcon}
                    alt='search'
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>

            {
                movies?.length > 0
                    ? (
                        <div className='container'>
                            {movies.map((movie) => (
                                <MovieCard movie={movie} />
                         ))}
                    </div>
        
                        
                    ) : (
                        <div className='empty'>
                        <h2>Movies No Dey </h2>
                        </div>
                    )
                    
            }
           
            
        </div>
    );
}

export default App;