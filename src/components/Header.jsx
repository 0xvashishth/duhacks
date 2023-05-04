import React from "react";

const Header = () => {
  return (
    <header className="header">

      <div id="includedheader">
        <nav
          style={{ width: "100vw" }}
          className="navbar navbar-expand-md fixed-top white-bg" >
          <div className="container custom-container">
            <a
              style={{ width: "30%" }}
              className="navbar-brand"
              href="#header-top-bar"
            >
              <img
                
                src="img/LOGO.png"
                alt="logo"
                className="img-fluid logoo"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span>
                <i
                  style={{ color: "#3770ff" }}
                  className="fa fa-bars"
                  aria-hidden="true"
                ></i>
              </span>
            </button>
            <div
              className="collapse navbar-collapse h-auto"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto menu">
                <li>
                  <a href="#schedule">Schedule </a>
                </li>
                <li>
                  <a href="#challenges"> Themes </a>
                </li>
                <li>
                  <a href="#prizes"> Prizes </a>
                </li>
                <li>
                  <a href="#sponsers">Sponsors</a>
                </li>
                <li>
                  <a href="#faq"> FAQs</a>
                </li>
                {/* <li>
                  <a
                    href="https://duhacks.devfolio.co/"
                    className="btn secondary-solid-btn check-btn"
                  >
                    {" "}
                    Apply with Devfolio
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
