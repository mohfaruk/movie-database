import React, { createContext, useState, useEffect, useReducer } from "react";
import MovieContext from "./MovieContext";
import MovieReducer from "./MovieReducer";

// initial state
const initialState = {
  faves: localStorage.getItem("faves")
    ? JSON.parse(localStorage.getItem("faves"))
    : [],
};

//const API_KEY = "2e30e0cd"; // OMDb API Key

const MovieApp = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);
  //const [searchValue, setSearchValue] = useState("");

  const [state, dispatch] = useReducer(MovieReducer, initialState);

  const getMovieRequest = async searchValue => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=2e30e0cd`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  // const saveToLocalStorage = items => {
  //   localStorage.setItem("react-movie-app-favourites", JSON.stringify(items));
  // };

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
        //searchValue,
        getMovieRequest,
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
