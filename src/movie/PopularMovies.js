import React from "react";
import MovieItem from "./MovieItem";

function PopularMovies({ movies }) {
  return (
    <div>
      <h1 className="text-3xl font-bold">What's Hot Right Now 🔥 </h1>
      <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-10 container-fluid movie-app">
        {movies.map(movie => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default PopularMovies;
