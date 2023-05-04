import React from "react";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-top gradient-bg">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-9">
              <div className="row footer-top-wrap">
                <div className="col-md-4 col-sm-6">
                  <div className="footer-nav-wrap text-white">
                    <p>DUHacks 2.0, Organized By</p>
                    <a href="https://dscddu.com/">
                      <img src="img/dsc.png" width="80%" />
                    </a>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="footer-nav-wrap text-white">
                    <h4 className="text-white"> Useful Links </h4>
                    <ul className="nav flex-column">
                      <li className="nav-item">
                        <a className="nav-link" href="#challenges">
                          {" "}
                          Themes{" "}
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#schedule">
                          {" "}
                          Schedule
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#faq">
                          {" "}
                          FAQ's
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#speakersAndJudges">
                          {" "}
                          Speakers{" "}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-5 col-sm-6">
                  <div className="footer-nav-wrap text-white">
                    <script
                      async
                      src="https://platform.twitter.com/widgets.js"
                      charSet="utf-8"
                    ></script>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div className="row footer-top-wrap mt-md-4 mt-sm-0 mt-lg-0">
                <div className="col-12">
                  <div className="footer-nav-wrap text-white">
                    <h4 className="text-white">GET IN TOUCH</h4>
                    <ul className="get-in-touch-list">
                      <li className="d-flex align-items-center py-2">
                        <span className="fab fa-discord mr-2"></span>
                        <a href="https://discord.gg/cvHPEK7U3v">
                          {" "}
                          Discord Channel{" "}
                        </a>
                        <br />
                      </li>
                      <li className="d-flex align-items-center py-2">
                        <span className="fas fa-envelope mr-2"></span>{" "}
                        <a href="mailto:gdsc@ddu.ac.in">
                          {" "}
                          gdsc@ddu.ac.in{" "}
                        </a>
                      </li>
                    </ul>
                    <div className="social-nav mt-4">
                      <ul className="list-unstyled social-list mb-0">
                        <li className="list-inline-item tooltip-hover">
                          <a
                            href="https://discord.gg/cvHPEK7U3v"
                            target="_blank"
                            className="rounded"
                          >
                            <span className="fab fa-discord"></span>
                          </a>
                          <div className="tooltip-item">Discord</div>
                        </li>
                        <li className="list-inline-item tooltip-hover">
                          <a
                            href="https://twitter.com/DuHacks?t=CPjNJmQX1JxhIHb_YI0Tuw&s=09"
                            target="_blank"
                            className="rounded"
                          >
                            <span className="fab fa-twitter"></span>
                          </a>
                          <div className="tooltip-item">Twitter</div>
                        </li>
                        <li className="list-inline-item tooltip-hover">
                          <a
                            href="https://www.linkedin.com/company/duhacks/"
                            target="_blank"
                            className="rounded"
                          >
                            <span className="fab fa-linkedin-in"></span>
                          </a>
                          <div className="tooltip-item">Linkedin</div>
                        </li>
                        <li className="list-inline-item tooltip-hover">
                          <a
                            href="https://www.youtube.com/channel/UCT-t1QVYACjROrnpJKhxX1Q"
                            target="_blank"
                            className="rounded"
                          >
                            <span className="fab fa-youtube"></span>
                          </a>
                          <div className="tooltip-item">Youtube</div>
                        </li>
                        <li className="list-inline-item tooltip-hover">
                          <a
                            href="https://instagram.com/duhacks2022?igshid=YmMyMTA2M2Y="
                            target="_blank"
                            className="rounded"
                          >
                            <span className="fab fa-instagram"></span>
                          </a>
                          <div className="tooltip-item">Instagram</div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom gray-light-bg py-2">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md-5 col-lg-5">
              <p className="copyright-text pb-0 mb-0">
                Copyrights © 2023. All rights reserved by &nbsp;
                <a href="https://duhacks.tech/">DUHacks 2.0</a>
              </p>
            </div>
            <div className="col-md-7 col-lg-6 d-none d-md-block d-lg-block">
              <ul className="list-inline policy-nav text-right social-list">
                <li className="list-inline-item">
                  <a href="https://devfolio.co/code-of-conduct" target="_blank">
                    Code of Conduct
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
