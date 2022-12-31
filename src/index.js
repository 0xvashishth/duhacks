import React from 'react';
import ReactDOM from 'react-dom';
import NAV from "./components/navbar/App";
import LOADER from './components/Loading/loading';

// const rootElement = document.getElementById('body');
// const footer = document.getElementById('footer');

// ReactDOM.render(
//   <React.Fragment>
//     <CalenderContextProvider>
//       <NAV />
//     </CalenderContextProvider>
//   </React.Fragment>,
//   rootElement
// );

const rootElement = document.getElementById("body");
const footer = document.getElementById("footer");

ReactDOM.render(
  <div>
    <NAV />
  </div>,
  rootElement
);

ReactDOM.render(
  <React.Fragment>
    <LOADER />
  </React.Fragment>,
  footer
);
