import React, { useState, useEffect, useContext } from "react";
import MovieContext from "../../contexts/MovieContext";

import MovieList from "../../movie/MovieList";
import MovieListHeading from "../../movie/MovieListHeading";
import SearchBox from "../../movie/SearchBox";
import AddFavourites from "../../movie/AddFavourites";
import RemoveFavourites from "../../movie/RemoveFavourites";

const Home = () => {
  const { movies, getMovieRequest, addFavouriteMovie } =
    useContext(MovieContext);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  return (
    <div>
      <main className="container mx-auto px-3 pb-12">
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
        <MovieList
          movies={movies}
          handleFavouritesClick={addFavouriteMovie}
          favouriteComponent={AddFavourites}
        />
      </main>
    </div>
  );
};

export default Home;
