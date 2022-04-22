import React, { useState, useEffect, useContext } from "react";
import MovieContext from "../../contexts/MovieContext";
import SearchBox from "../../movie/SearchBox";
import MovieList from "../../movie/MovieList";
import PopularMovies from "../../movie/PopularMovies";

function Home() {
  const { movies, getMovieRequest, getPopularMovies } =
    useContext(MovieContext);
  const [searchValue, setSearchValue] = useState("");
  const [userInput, setUserInput] = useState(false);

  useEffect(() => {
    userInput ? getMovieRequest(searchValue) : getPopularMovies();
  }, [searchValue]);

  return (
    <div>
      <main className="container mx-auto px-3 pb-12">
        <SearchBox
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          userInput={userInput}
          setUserInput={setUserInput}
        />
        {/* Popular movies to display */}
        {!userInput ? (
          <PopularMovies movies={movies} />
        ) : (
          <MovieList movies={movies} />
        )}
      </main>
    </div>
  );
}

export default Home;
