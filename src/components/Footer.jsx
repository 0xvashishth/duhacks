import React from "react";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-12 col-xs-12">
              <div className="footer-logo">
                <img id="footer-logo" src="assets/img/logo.png" alt=""></img>
              </div>
              <div className="social-icons-footer">
                <ul>
                  <li className="facebook">
                    <a target="_blank" href="#">
                      <i className="lni-facebook-filled"></i>
                    </a>
                  </li>
                  <li className="twitter">
                    <a target="_blank" href="#">
                      <i className="lni lni-linkedin-original"></i>
                    </a>
                  </li>
                  <li className="pinterest">
                    <a target="_blank" href="#">
                      <i className="lni lni-instagram-original"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="site-info">
                <p>
                  Designed and Developed by{"   "}
                  <a href="https://duhacks.tech/" rel="nofollow">
                    Web team @Duhacks
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
