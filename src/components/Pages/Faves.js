import React, { useContext } from "react";
import MovieContext from "../../contexts/MovieContext";
import MovieList from "../../movie/MovieList";

const Faves = props => {
  const { faves } = useContext(MovieContext);

  return (
    <div className="d-flex justify-content-start m-3">
      {faves.length > 0 ? (
        <div>
          <MovieList movies={faves} type="faves" />
        </div>
      ) : (
        <h2>There are no movies in your watchlist.</h2>
      )}
    </div>
  );
};

export default Faves;
