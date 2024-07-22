import React from "react";
import logo from "../sourcesimages/logo.jpeg";
function Footer() {
  return (
    <div className="bg-red-700 flex justify-evenly">
      <div className="py-5 ">
        <img src={logo} alt="" className="h-40"></img>
      </div>
      <div className="text-white flex flex-col justify-center">
        Copyrights @ 2024
      </div>
    </div>
  );
}

export default Footer;
