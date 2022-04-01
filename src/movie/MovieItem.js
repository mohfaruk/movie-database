import PropTypes from "prop-types";
import { useContext, useState } from "react";
import MovieContext from "../contexts/MovieContext";
import MovieModal from "./MovieModal";

function MovieItem({ movie }) {
  const { id, poster_path, original_title, release_date, overview } = movie;
  const { addMovieToFaves, removeMovieToFaves, faves } =
    useContext(MovieContext);

  const [modalOpen, setModalOpen] = useState(false);

  let storedMovie = faves.find(item => item.id === movie.id);
  const btnDisabled = storedMovie ? true : false;

  function addFaveHandler() {
    addMovieToFaves(movie);
  }

  function removeFaveHandler() {
    removeMovieToFaves(id);
  }

  return (
    <div>
      {modalOpen && (
        <MovieModal
          title={original_title}
          date={release_date}
          poster={poster_path}
          plot={overview}
        />
      )}

      <div className="image-container d-flex justify-content-start my-10">
        <img
          src={`https://image.tmdb.org/t/p/w200${poster_path}`}
          className="image-size"
          alt="movie"
        ></img>
        <div className="movie-text">
          <h3>{original_title}</h3>
          <p>{release_date ? release_date : " "}</p>
          <button
            onClick={() => {
              setModalOpen(!modalOpen);
            }}
            className="btn"
          >
            More Info
          </button>

          {!btnDisabled ? (
            <button onClick={addFaveHandler} className="btn">
              Add to Faves
            </button>
          ) : (
            <button onClick={removeFaveHandler} className="btn">
              Remove from Faves
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

MovieItem.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieItem;
