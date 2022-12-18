import React from 'react';

const Info = () => {
  return (
    <div>
      {/* <div className="ready-to-play">
        <div id="polina" className="video-text">
          <div className="tb-t">
            <div className="tb-c">
              <div className="polina">
                <button>
                  <i className="lni-play"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <section id="information-bar">
        <div className="container">
          <div className="row inforation-wrapper">
            <div className="col-lg-3 col-md-6 col-xs-12">
              <ul>
                <li>
                  <i className="lni-map-marker"></i>
                </li>
                <li>
                  <span>
                    <b>Mode of Conduct</b> Offline
                  </span>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 col-xs-12">
              <ul>
                <li>
                  <i className="lni-calendar"></i>
                </li>
                <li>
                  <span>
                    <b>Date & Time</b> 9th March, 2022 at 11AM
                  </span>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 col-xs-12">
              <ul>
                <li>
                  <i className="lni-user"></i>
                </li>
                <li>
                  <span>
                    <b>Team Size</b>2 to 4 members
                  </span>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 col-xs-12">
              <ul>
                <li>
                  <i className="lni lni-code-alt"></i>
                </li>
                <a href="#domains">
                  <li>
                    <span>
                      <b>Domains</b>Multiple hack domains
                    </span>
                  </li>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Info;
