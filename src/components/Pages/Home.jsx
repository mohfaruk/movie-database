import React, { useState, useEffect, useContext } from "react";
import MovieContext from "../../contexts/MovieContext";
import SearchBox from "../../movie/SearchBox";
import MovieList from "../../movie/MovieList";
import PopularMovies from "../../movie/PopularMovies";

const Home = () => {
  const { movies, getMovieRequest, getPopularMovies } =
    useContext(MovieContext);
  const [searchValue, setSearchValue] = useState("");
  const [userInput, setUserInput] = useState(false);

  //Not sure if the below is good code practice
  useEffect(() => {
    userInput ? getMovieRequest(searchValue) : getPopularMovies();
  }, [searchValue]);

  // useEffect(() => {
  //   getPopularMovies();
  // }, []);

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

        {/* <MovieList movies={movies} /> */}
      </main>
    </div>
  );
};

export default Home;
