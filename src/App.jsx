/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import './App.css';
import searchIcon from "./search.svg";

const API_URL = 'http://www.omdbapi.com?apikey=b5c4033';

const movie1 = {
    Title: "Spiderman",
    Type: "movie",
    Year: "2010",
    imdbID: "tt1785572",
    Poster: "N/A"
}

const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    
    
    const searchMovies  = async (title) => {
        const response = await fetch (`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
        
    }

    useEffect(() => {
        searchMovies('Superman');
    }, []);

    return (
        <div className="app">
            <h1>CinePIX</h1>

            <div className="search">
                <input
                  placeholder="Search for movies"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img 
                    src={searchIcon}
                    alt="search"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>

            {movies?.length > 0
                ? (
                    <div className="container">
                     {movies.map((movie) => (
                        <MovieCard movie= {movie} />
                     ))}
                    </div>
                ) : (
                    <div>
                        <h2>No movies found :(</h2>
                    </div>
                )
            }
        </div>
    )
}

export default App;