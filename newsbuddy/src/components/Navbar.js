// import React, { useState } from "react";
import logo from "../sourcesimages/logo.jpeg";
import { Link } from "react-router-dom";
function Navbar() {
  // const [currentTab, setCurrentTab] = useState("");
  function handleChange(e) {
    console.log(e.target.id);
  }
  return (
    <div className="bg-red-700 flex">
      <div className="w-24 ml-5 h-20">
        <Link to="/">
          <img src={logo} alt="" className="h-18"></img>
        </Link>
      </div>
      <div>
        <ul className="ml-4 flex list-none justify-between space-x-4 align-middle">
          <Link to="/politics">
            <li
              className="text-white cursor-pointer p-7 hover:bg-red-300"
              onClick={handleChange}
              id="politics"
            >
              Politics
            </li>
          </Link>
          <Link to="/bollywood">
            <li
              className="text-white cursor-pointer p-7 hover:bg-red-300"
              onClick={handleChange}
              id="bollywood"
            >
              Bollywood
            </li>
          </Link>
          <Link to="/sports">
            <li
              className="text-white cursor-pointer p-7 hover:bg-red-300"
              onClick={handleChange}
              id="sports"
            >
              Sports
            </li>
          </Link>
          <Link to="/weather">
            <li
              className="text-white cursor-pointer p-7 hover:bg-red-300"
              onClick={handleChange}
              id="weather"
            >
              Weather
            </li>
          </Link>
          <Link to="/finance">
            <li
              className="text-white cursor-pointer p-7 hover:bg-red-300"
              onClick={handleChange}
              id="finance"
            >
              Finance
            </li>
          </Link>
          <Link to="liked">
            <li
              className="text-white cursor-pointer p-7 hover:bg-red-300"
              onClick={handleChange}
              id="/Liked"
            >
              Liked
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
