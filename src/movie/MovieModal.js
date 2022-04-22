import { FaTimes } from "react-icons/fa";

function MovieModal({
  title,
  date,
  poster,
  plot,
  score,
  modalOpen,
  setModalOpen,
}) {
  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div className="modal-popup container-fluid movie-app">
      <div className="dark-overlay"></div>
      <div className="modal-container">
        <div className="text-center">
          <h1 className="text-4xl uppercase">{title}</h1>
        </div>
        <div className="poster-container my-7">
          <img
            src={`https://image.tmdb.org/t/p/w200${poster}`}
            className="flex modal-image content-center"
            alt="movie"
          ></img>
        </div>
        <div className="text-center text-lg">
          <p className="my-5">{plot}</p>
          <p>
            <span className="font-bold">Release Date:</span> {date ? date : " "}
          </p>
          <p>
            <span className="font-bold">Vote Average:</span> {score}/10
          </p>
        </div>
        <button className="close-modal text-3xl" onClick={toggleModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
}

export default MovieModal;
