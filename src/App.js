import "./components/movie/movie.css";
import React, { useEffect, useState } from "react";
import MovieCard from "./components/movie/MovieCard";
import Navbar from "./components/movie/Navbar";

function App() {
  const MOVIES_API_URL =
    "https://www.omdbapi.com/?i=tt3896198&apikey=9ce2d54a&s=";

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${MOVIES_API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
    console.log(data.Search);
  };

  useEffect(() => {
    setSearchTerm("");
    // eslint-disable-next-line
  }, []);


  return (
    <div>
      <Navbar />
      <div className="app">
        <h1>moviesfinder</h1>
        <div className="search">
          <input
            placeholder="Search movies..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            className="btn btn-secondary"
            onClick={() => searchMovies(searchTerm)}>
            Search
          </button>
        </div>
        {movies?.length > 0 ? (
          <div className="container">
            {movies.map((movie, index) => (
              <MovieCard movie={movie} key={index} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
