import React, { useState, useEffect, useReducer } from "react";
import MovieContext from "./MovieContext";
import MovieReducer from "./MovieReducer";

const API_URL = process.env.REACT_APP_MOVIE_URL;
const API_KEY = process.env.REACT_APP_MOVIE_KEY;

// initial state
const initialState = {
  faves: localStorage.getItem("faves")
    ? JSON.parse(localStorage.getItem("faves"))
    : [],
};

const MovieApp = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);

  const [state, dispatch] = useReducer(MovieReducer, initialState);

  const getMovieRequest = async searchValue => {
    const url = `${API_URL}3/search/movie?${API_KEY}&language=en-US&page=1&include_adult=false&query=${searchValue}`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        if (!data.errors) {
          setMovies(data.results);
        } else {
          setMovies([]);
        }
      });
  };

  const getPopularMovies = () => {
    const url = `${API_URL}3/movie/popular?${API_KEY}&language=en-US&page=1`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        if (!data.errors) {
          setMovies(data.results);
        } else {
          setMovies([]);
        }
      });
  };

  useEffect(() => {
    localStorage.setItem("faves", JSON.stringify(state.faves));
  }, [state]);

  const addMovieToFaves = movie => {
    dispatch({ type: "ADD_MOVIE", payload: movie });
  };

  const removeMovieToFaves = id => {
    dispatch({ type: "REMOVE_MOVIE", payload: id });
  };

  return (
    <MovieContext.Provider
      value={{
        movies,
        faves: state.faves,
        favourites,
        getMovieRequest,
        getPopularMovies,
        //saveToLocalStorage,
        addMovieToFaves,
        removeMovieToFaves,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieApp;
