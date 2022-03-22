import React, { useState, useEffect, useContext } from "react";
import MovieContext from "../../contexts/MovieContext";

import MovieList from "../../movie/MovieList";
import SearchBox from "../../movie/SearchBox";

const Home = () => {
  const { movies, getMovieRequest } = useContext(MovieContext);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  return (
    <div>
      <main className="container mx-auto px-3 pb-12">
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
        <MovieList movies={movies} />
      </main>
    </div>
  );
};

export default Home;
