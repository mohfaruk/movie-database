import React, { useContext } from "react";
import MovieContext from "../../contexts/MovieContext";
import MovieList from "../../movie/MovieList";

const Faves = props => {
  const { faves } = useContext(MovieContext);

  //const FavouriteComponent = props.favouriteComponent;

  return (
    <div className="image-container d-flex justify-content-start m-3">
      {faves.length > 0 ? (
        <div>
          {faves.map((movie, id) => (
            <MovieList movie={movie} key={id} type="faves" />
          ))}
        </div>
      ) : (
        <h2>There are no movies in your list.</h2>
      )}
    </div>
  );
};

export default Faves;
