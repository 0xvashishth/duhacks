import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from "./components/navbar/Navbar";
import LOADER from './components/Loading/loading';

const rootElement = document.getElementById("body");
const footer = document.getElementById("footer");

ReactDOM.render(
  <div>
    <Navbar />
  </div>,
  rootElement
);

ReactDOM.render(
  <React.Fragment>
    <LOADER />
  </React.Fragment>,
  footer
);
