import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import NotificationInbox from "./NotificationInbox";
import './App.css';
// import './NotificationBell.css'; // Import the new CSS for the notification bell
import searchIcon from "./search.svg";
// import bellIcon from "./bell.svg"; // Add bell icon 

const API_URL = 'http://www.omdbapi.com?apikey=b5c4033';

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [showNotifications, setShowNotifications] = useState(false); // State to control modal visibility
    
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        
        setMovies(data.Search);
    }
    
    useEffect(() => {
        searchMovies('Superman');
    }, []);
    
    const toggleNotifications = () => {
        setShowNotifications(!showNotifications);
    }

    return (
        <div className="app">
            <nav className="navbar">
                <div className="flex">

                <h1>CinePIX</h1>
                <div className="notification-bell" onClick={toggleNotifications}>
                    <img width="50" height="50" src="https://img.icons8.com/carbon-copy/100/ffffff/bell--v1.png" alt="bell--v1"/>
                    </div>
                </div>
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
                
            </nav>

            {showNotifications && <NotificationInbox />}

            {movies?.length > 0
                ? (
                    <div className="container">
                     {movies.map((movie) => (
                        <MovieCard key={movie.imdbID} movie={movie} />
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