import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Loader from "./Components/Loading/loading";

const root = ReactDOM.createRoot(document.getElementById("root"));
const load = ReactDOM.createRoot(document.getElementById("loadingDiv"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
load.render(
  <React.StrictMode>
    <Loader />
  </React.StrictMode>
);
