import React, { useContext } from "react";
import MovieContext from "../../contexts/MovieContext";
import MovieList from "../../movie/MovieList";

function WatchList() {
  const { watchlist } = useContext(MovieContext);

  return (
    <div className="d-flex justify-content-start m-3">
      {watchlist.length > 0 ? (
        <div>
          <MovieList movies={watchlist} type="watchlist" />
        </div>
      ) : (
        <h2>There are no movies in your watchlist.</h2>
      )}
    </div>
  );
}

export default WatchList;
