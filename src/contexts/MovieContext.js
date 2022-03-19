import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const MovieContext = createContext();

const API_KEY = "2e30e0cd"; // OMDb API Key

const MovieApp = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [movies, setMovies] = useState();
  const [search, setSearch] = useState("");
  const [selectedMovie, setSelectedMovie] = useState("");

  const fetchMovies = async searchValue => {
    const response = await axios(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchValue}`
    );
    const data = response.data;
    setMovies(data.Search);
  };

  // const movieRequest = async searchValue => {
  //   //const url = "http://www.omdbapi.com/?s=the batman&apikey=2e30e0cd";
  //   const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=${API_KEY}`;
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   setMovies(data.Search);

  //   console.log(data);
  // };

  const removeFavoriteMovie = movie => {
    movie.isFavorite = false;
    const newFavoriteList = favorites.filter(
      fav => fav.imdbID !== movie.imdbID
    );
    setFavorites(newFavoriteList);
  };

  const addFavoriteMovie = movie => {
    movie.isFavorite = true;
    const newFavoriteList = [...favorites, movie];
    setFavorites(newFavoriteList);
  };

  const favoriteHandler = (movie, e) => {
    e.preventDefault();
    if (favorites.includes(movie)) {
      removeFavoriteMovie(movie);
    } else {
      addFavoriteMovie(movie);
    }
  };

  const showDetail = async id => {
    const response = await axios(
      `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`
    );
    const data = response.data;
    setSelectedMovie(data);
  };

  useEffect(() => {
    console.log(API_KEY);
    fetchMovies(search);
  }, [search]);

  return (
    <MovieContext.Provider
      value={{
        setSearch,
        movies,
        favorites,
        favoriteHandler,
        showDetail,
        selectedMovie,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieApp;
