// import "./App.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Layouts/Navbar";
// import Footer from "./components/Layouts/Footer";
// //import Alert from "./components/Layouts/Alert";
// import Home from "./components/Pages/Home";
// import About from "./components/Pages/About";
// import Error from "./components/Pages/Error";

// import { routes } from "./config/Router";

// //import MovieSearch from "./movie/MovieSearch";

// function App() {
//   return (
//     <Router>
//       <div className="flex flex-col justify-between h-screen">
//         <Navbar />
//         <main className="container mx-auto px-3 pb-12">
//           {/* <Alert /> */}
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             {/* <Route path="/user/:login" element={<Profile />} /> */}
//             <Route path="/*" element={<Error />} />
//           </Routes>
//         </main>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Navbar from "./components/Layouts/Navbar";
import Footer from "./components/Layouts/Footer";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Error from "./components/Pages/Error";

import MovieList from "./movie/MovieList";
import MovieListHeading from "./movie/MovieListHeading";
import SearchBox from "./movie/SearchBox";
import AddFavourites from "./movie/AddFavourites";
import RemoveFavourites from "./movie/RemoveFavourites";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const getMovieRequest = async searchValue => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=2e30e0cd`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  useEffect(() => {
    const movieFavourites = JSON.parse(
      localStorage.getItem("react-movie-app-favourites")
    );

    if (movieFavourites) {
      setFavourites(movieFavourites);
    }
  }, []);

  const saveToLocalStorage = items => {
    localStorage.setItem("react-movie-app-favourites", JSON.stringify(items));
  };

  const addFavouriteMovie = movie => {
    const newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  const removeFavouriteMovie = movie => {
    const newFavouriteList = favourites.filter(
      favourite => favourite.imdbID !== movie.imdbID
    );

    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  return (
    <Router>
      <Navbar />
      <div className="flex flex-col justify-between h-screen">
        <main className="container mx-auto px-3 pb-12">
          {/* <Alert /> */}
          {/* <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/*" element={<Error />} />
          </Routes> */}
          <div className="container-fluid movie-app">
            <div className="d-flex align-items-center mt-4 mb-4">
              {/* <MovieListHeading heading="None" /> */}
              <SearchBox
                searchValue={searchValue}
                setSearchValue={setSearchValue}
              />
            </div>
            <div className="grid grid-cols-4 gap-4 container-fluid movie-app">
              <MovieList
                movies={movies}
                handleFavouritesClick={addFavouriteMovie}
                favouriteComponent={AddFavourites}
              />
            </div>
            <div className="d-flex align-items-center mt-4 mb-4">
              <MovieListHeading heading="Favourites" />
            </div>
            <div>
              <MovieList
                movies={favourites}
                handleFavouritesClick={removeFavouriteMovie}
                favouriteComponent={RemoveFavourites}
              />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  );
};
{
  /* <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading="Movies" />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className="row">
        <MovieList
          movies={movies}
          handleFavouritesClick={addFavouriteMovie}
          favouriteComponent={AddFavourites}
        />
      </div>
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading="Favourites" />
      </div>
      <div className="row">
        <MovieList
          movies={favourites}
          handleFavouritesClick={removeFavouriteMovie}
          favouriteComponent={RemoveFavourites}
        />
      </div>
    </div> */
}

export default App;
