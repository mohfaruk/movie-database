// import PropTypes from "prop-types";
import { useContext, useState } from "react";
import MovieContext from "../contexts/MovieContext";

function MovieModal({ title, date, poster, plot }) {
  // const { id, poster_path, original_title, release_date } = movie;

  // if (modal) {
  //   document.body.classList.add("active-modal");
  // } else {
  //   document.body.classList.remove("active-modal");
  // }

  return (
    <div className="modal-popup">
      <div className="dark-overlay"></div>
      <div className="modal-content">
        <h1>{title}</h1>
        <img
          src={`https://image.tmdb.org/t/p/w200${poster}`}
          className="modal-image"
          alt="movie"
        ></img>
        <p>{date}</p>
        <p>{plot}</p>
        {/* <button className="close-modal" onClick={toggleModal}>
          CLOSE
        </button> */}
      </div>
    </div>
  );
}

// MovieModal.propTypes = {
//   movie: PropTypes.object.isRequired,
// };

export default MovieModal;
