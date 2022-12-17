import React from "react";
import loadergif from "./preloader.gif";
import "./loading.css";
const footer = document.getElementById("footer");

export default function LOADER(props) {
  return (
    <div className="load">
      <img src={loadergif} alt="loader" />
    </div>
  );
}
