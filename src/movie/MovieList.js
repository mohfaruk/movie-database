import { useContext } from "react";
import MovieContext from "../contexts/MovieContext";
import MovieItem from "./MovieItem";

function MovieList() {
  const { movies, addMovieToFaves } = useContext(MovieContext);
  //const FavouriteComponent = props.favouriteComponent;

  return (
    <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 gap-10 container-fluid movie-app">
      {movies.map(movie => (
        <MovieItem
          key={movie.id}
          movie={movie}
          addMovieToFaves={addMovieToFaves}
        />
      ))}

      {/* <FavouriteComponent /> */}
    </div>
  );
}

export default MovieList;
