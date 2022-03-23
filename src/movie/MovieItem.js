import PropTypes from "prop-types";
import { useContext, useState } from "react";
import MovieContext from "../contexts/MovieContext";

function MovieItem({ movie }) {
  const { id, poster_path, original_title, release_date } = movie;
  const { addMovieToFaves, removeMovieToFaves } = useContext(MovieContext);
  const [show, setShow] = useState(true);

  function addFaveHandler() {
    addMovieToFaves(movie);
    setShow(!show);
  }

  function removeFaveHandler() {
    removeMovieToFaves(id);
    setShow(!show);
  }

  return (
    <div className="image-container d-flex justify-content-start my-10">
      <img
        src={`https://image.tmdb.org/t/p/w200${poster_path}`}
        className="image-size"
        alt="movie"
      ></img>
      <div className="movie-text">
        <h3>{original_title}</h3>
        <p>{release_date ? release_date : " "}</p>
        {show ? (
          <button onClick={addFaveHandler} className="btn">
            Add to Faves
          </button>
        ) : (
          <button onClick={removeFaveHandler} className="btn">
            Remove from Faves
          </button>
        )}

        {/* <button
          onClick={() => {
            addMovieToFaves(movie);
          }}
          className="btn"
        >
          Add to Faves
        </button>
        <button
          onClick={() => {
            removeMovieToFaves(id);
          }}
          className="btn"
          disabled={{ btnDisable }}
        >
          Remove from Faves
        </button> */}
      </div>
    </div>
  );
}

MovieItem.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieItem;
