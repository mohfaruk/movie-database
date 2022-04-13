import PropTypes from "prop-types";
import { useContext, useState } from "react";
import MovieContext from "../contexts/MovieContext";
import MovieModal from "./MovieModal";

function MovieItem({ movie }) {
  const {
    id,
    poster_path,
    original_title,
    release_date,
    overview,
    vote_average,
  } = movie;

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

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div>
      {modalOpen && (
        <MovieModal
          title={original_title}
          date={release_date}
          poster={poster_path}
          plot={overview}
          score={vote_average}
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
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
          <button onClick={toggleModal} className="btn m-2">
            More Info
          </button>

          {!btnDisabled ? (
            <button onClick={addFaveHandler} className="btn">
              Watchlist +
            </button>
          ) : (
            <button onClick={removeFaveHandler} className="btn">
              Watchlist -
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
