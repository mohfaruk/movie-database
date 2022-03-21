import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Layouts/Navbar";
import Footer from "./components/Layouts/Footer";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Error from "./components/Pages/Error";
import Faves from "./components/Pages/Faves";

import MovieProvider from "./contexts/MovieProvider";

const App = () => {
  return (
    <MovieProvider>
      <Router>
        <Navbar />
        <div className="flex flex-col justify-between h-screen">
          <main className="container mx-auto px-3 pb-12">
            {/* <Alert /> */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/faves" element={<Faves />} />
              <Route path="/about" element={<About />} />
              <Route path="/*" element={<Error />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </MovieProvider>
  );
};

export default App;
