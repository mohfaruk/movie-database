import React, { useState } from "react";
import MovieItem from "./MovieItem";

function MovieList({ movies }) {
  return (
    <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 gap-10 container-fluid movie-app">
      {movies.map(movie => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;
