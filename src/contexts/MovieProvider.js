import React, { createContext, useState, useEffect, useReducer } from "react";
import MovieContext from "./MovieContext";
import MovieReducer from "./MovieReducer";

// initial state
const initialState = {
  faves: localStorage.getItem("faves")
    ? JSON.parse(localStorage.getItem("faves"))
    : [],
};

//const API_KEY = "41bbc9ddef422c7423ada83d8a7eae52"; // TMDB API Key

const MovieApp = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);
  //const [searchValue, setSearchValue] = useState("");

  const [state, dispatch] = useReducer(MovieReducer, initialState);

  const getMovieRequest = async searchValue => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=41bbc9ddef422c7423ada83d8a7eae52&language=en-US&page=1&include_adult=false&query=${searchValue}`;

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
