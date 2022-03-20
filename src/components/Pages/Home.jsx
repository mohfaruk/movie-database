import React, { useState, useEffect } from "react";

import MovieList from "../../movie/MovieList";
import MovieListHeading from "../../movie/MovieListHeading";
import SearchBox from "../../movie/SearchBox";
import AddFavourites from "../../movie/AddFavourites";
import RemoveFavourites from "../../movie/RemoveFavourites";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const getMovieRequest = async searchValue => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=2e30e0cd`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  useEffect(() => {
    const movieFavourites = JSON.parse(
      localStorage.getItem("react-movie-app-favourites")
    );

    if (movieFavourites) {
      setFavourites(movieFavourites);
    }
  }, []);

  const saveToLocalStorage = items => {
    localStorage.setItem("react-movie-app-favourites", JSON.stringify(items));
  };

  const addFavouriteMovie = movie => {
    const newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  const removeFavouriteMovie = movie => {
    const newFavouriteList = favourites.filter(
      favourite => favourite.imdbID !== movie.imdbID
    );

    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  return (
    <div className="flex flex-col justify-between h-screen">
      <main className="container mx-auto px-3 pb-12">
        <div className="container-fluid movie-app">
          <div className="d-flex align-items-center mt-4 mb-4">
            <SearchBox
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
          </div>
          <div className="grid grid-cols-4 gap-4 container-fluid movie-app">
            <MovieList
              movies={movies}
              handleFavouritesClick={addFavouriteMovie}
              favouriteComponent={AddFavourites}
            />
          </div>
          <div className="d-flex align-items-center mt-4 mb-4">
            <MovieListHeading heading="Favourites" />
          </div>
          <div>
            <MovieList
              movies={favourites}
              handleFavouritesClick={removeFavouriteMovie}
              favouriteComponent={RemoveFavourites}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
