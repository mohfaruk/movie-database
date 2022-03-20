import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Navbar from "./components/Layouts/Navbar";
import Footer from "./components/Layouts/Footer";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Error from "./components/Pages/Error";
import Favourites from "./components/Pages/Favourites";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="flex flex-col justify-between h-screen">
        <main className="container mx-auto px-3 pb-12">
          {/* <Alert /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favourites" element={<Favourites />} />
            <Route path="/about" element={<About />} />
            <Route path="/*" element={<Error />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
