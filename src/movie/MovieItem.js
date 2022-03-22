import PropTypes from "prop-types";
import { useContext } from "react";
import MovieContext from "../contexts/MovieContext";

function MovieItem({ movie }) {
  const { poster_path, original_title, release_date } = movie;
  const { addMovieToFaves } = useContext(MovieContext);

  return (
    <div className=" image-container d-flex justify-content-start my-10">
      <img
        src={`https://image.tmdb.org/t/p/w200${poster_path}`}
        className="image-size"
        alt="movie"
      ></img>
      <div
        onClick={() => addMovieToFaves(movie)}
        className="overlay text-center align-items-center justify-content-center"
      >
        Add to Faves
      </div>
      <div className="movie-text">
        <h3>{original_title}</h3>
        <p>{release_date ? release_date : " "}</p>
      </div>
    </div>
  );
}

MovieItem.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieItem;
