// import React from 'react';
// import {SOCIALS, TOP_SECTION} from '../../Module/General';
// import MytypedComponent from '../typing-effect/typing.js';
// import './top-division-c.css';

// function Btn(props) {
//   return (
//     <button className={props.class}>
//       <i className={props.ico}></i>
//       {props.type}
//       <div className="overlay">
//         <div className="overlay-text">{props.overlay}</div>
//       </div>
//     </button>
//   );
// }

// function About() {
//   return (
//     <div className="AboutMe">
//       <h2>{TOP_SECTION.TITLE}</h2>
//       <MytypedComponent />
//     </div>
//   );
// }

// function Myinfo() {
//   return (
//     <div className="Myinfo">
//       <About />
//       <p> {TOP_SECTION.SHORT_DESCRIPTION}</p>
//       <div className="join_dis">
// {/*        <a rel="noreferrer" target="_blank" href={SOCIALS.discord}>

//         </a>          <Btn
//             ico="fab fa-2x fa-discord"
//             class="join_disco"
//             type="Join our discord"
//             overlay="Click the link"
//           />
//                 <a href={TOP_SECTION.HACKERS_REGISTRATION_FORM_LINK}>
//           {' '}
//           <Btn
//             class="register"
//             type="Register "
//             overlay="Hackers registration"
//           />
//         </a>*/}
//       </div>
//       <div className="buttom-group">
//         {/*<a href={TOP_SECTION.JUDGES_FORM_LINK}>
//           {' '}
//           <Btn class="sponsor_btn" type="Judges" overlay="Fill the form" />
//         </a>*/}

//                 <a rel="noreferrer" target="_blank" href={SOCIALS.discord}>

//         </a>          <Btn
//             ico="fab fa-discord"
//             class="join_disco"
//             type="Join our discord"
//             overlay="Click the link"
//           />
//                 <a href={TOP_SECTION.HACKERS_REGISTRATION_FORM_LINK}>
//           {' '}
//           <Btn
//             class="register"
//             type="Register "
//             overlay="Hackers registration"
//           />
//         </a>

//       </div>
//     </div>
//   );
// }

// export {Btn, Myinfo};



import React from "react";
import "./top-division-c.css";
import MytypedComponent from "../typing-effect/typing.js";

import {TOP_SECTION} from "../../Module/General";

function Btn(props) {
  return (
    <div
      className="apply-button"
      data-hackathon-slug="hack-the-crisis"
      data-button-theme="light"
      style={{height: "44px", width: "312px"}}
    ></div>
    // <button className={props.class}>
    //   <i className={props.ico}></i>
    //   {props.type}
    //   {/* <div className="overlay">
    //     <div className="overlay-text">{props.overlay}</div>
    //   </div> */}
    // </button>
  );
}

function About() {
  return (
    <div className="AboutMe">
      <h2>{TOP_SECTION.TITLE}</h2>
      <MytypedComponent />
    </div>
  );
}

function Myinfo() {
  return (
    <div className="Myinfo">
      <About />
      <p> {TOP_SECTION.SHORT_DESCRIPTION}</p>

      {/* <a rel="noreferrer" target="_blank" href={"#"}> */}
      <a
        href="https://hack-the-crisis.devfolio.co/"
        rel="noreferrer"
        target="_blank"
      >
        <button class="dev-button">
          <svg
            class="dev-logo"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 115.46 123.46"
            style={{height: "24px", width: "24px", "margin-right": "8px"}}
          >
            <path d="M115.46 68a55.43 55.43 0 0 1-50.85 55.11S28.12 124 16 123a12.6 12.6 0 0 1-10.09-7.5 15.85 15.85 0 0 0 5.36 1.5c4 .34 10.72.51 20.13.51 13.82 0 28.84-.38 29-.38h.26a60.14 60.14 0 0 0 54.72-52.47c.05 1.05.08 2.18.08 3.34z"></path>
            <path d="M110.93 55.87A55.43 55.43 0 0 1 60.08 111s-36.48.92-48.58-.12C5 110.29.15 104.22 0 97.52l.2-83.84C.38 7 5.26.94 11.76.41c12.11-1 48.59.12 48.59.12a55.41 55.41 0 0 1 50.58 55.34z"></path>
          </svg>
          Apply With Devfolio
        </button>
      </a>

      {/* This is judges application button */}
      {/* <a href={TOP_SECTION.JUDGES_FORM_LINK}>
        {" "}
        <Btn class="sponsor_btn" type="Judges" overlay="Fill the form" />
      </a>

      <a href={TOP_SECTION.HACKERS_REGISTRATION_FORM_LINK}>
        {" "}
        <Btn class="register" type="Register " overlay="Hackers registration" />
      </a> */}
    </div>
  );
}

export {Btn, Myinfo};
