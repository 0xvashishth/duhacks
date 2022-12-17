import React from "react";

const Header = () => {
  return (
    <div>
      <header id="header-wrap">
        <nav className="navbar navbar-expand-lg bg-inverse fixed-top scrolling-navbar">
          <div id="nav-container" className="container">
            <a href="#" className="navbar-brand">
              <img id="nav-logo" src="assets/img/logo.png" alt=""></img>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="lni-menu"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav mr-auto w-100 justify-content-end">
                <li className="nav-item active">
                  <a className="nav-link" href="#header-wrap">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#prizes">
                    Prizes
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#schedules">
                    schedule
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#domains">
                    Hack Domains
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#sponsors">
                    Sponsors
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#faq">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div id="hero-area" className="hero-area-bg">
          <div className="overlay"></div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-9 col-sm-12">
                <div className="contents text-center">
                  <img
                    id="hero-image"
                    style={{
                      marginLeft: "auto",
                      marginRight: "auto",
                      marginTop: "60px",
                    }}
                    src="assets/img/LOGO.png"
                    width="200px"
                    height="200px"
                    alt=""
                  ></img>
                  <div className="banner-btn">
                    <a
                      href="https://forms.gle/vqPM7PCZRgtVUEee8"
                      id="hero-register"
                      className="btn btn-common"
                    >
                      Register Now!
                    </a>
                  </div>
                  <p className="banner-info">
                    Hackathon begins on 9th March.
                    <br></br>Last date for registration (1st March) ends in...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
