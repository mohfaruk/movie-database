import React, { useState } from "react";
import MovieList from "../../movie/MovieList";
import RemoveFavourites from "../../movie/RemoveFavourites";

function Favourites() {
  const [favourites, setFavourites] = useState([]);
  const saveToLocalStorage = items => {
    localStorage.setItem("react-movie-app-favourites", JSON.stringify(items));
  };

  const removeFavouriteMovie = movie => {
    const newFavouriteList = favourites.filter(
      favourite => favourite.imdbID !== movie.imdbID
    );

    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  return (
    <div>
      <MovieList
        movies={favourites}
        handleFavouritesClick={removeFavouriteMovie}
        favouriteComponent={RemoveFavourites}
      />
    </div>
  );
}

export default Favourites;
