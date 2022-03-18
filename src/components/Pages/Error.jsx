import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="hero">
      <div className="text-center hero-contetn">
        <h1 className="text-8xl fot-bold mb-8">ERROR! Page Not Found.</h1>
        <Link to="/" className="btn btn-primary btn-lg">
          <FaHome className="mr-5" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default Error;
