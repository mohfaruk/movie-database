import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Layouts/Navbar";
import Footer from "./components/Layouts/Footer";
import Alert from "./components/Layouts/Alert";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Profile from "./components/Pages/Profile";
import Error from "./components/Pages/Error";

import { GithubProvider } from "./contexts/github/GithubContext";
import { AlertProvider } from "./contexts/alert/AlertContext";

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <div className="flex flex-col justify-between h-screen">
            <Navbar />
            <main className="container mx-auto px-3 pb-12">
              <Alert />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/user/:login" element={<Profile />} />
                <Route path="/*" element={<Error />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
