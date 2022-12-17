import React from "react";

const About = () => {
  return (
    <div>
      <section id="about" className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-xs-12">
              <div className="img-thumb">
                <img
                  style={{ borderRadius: "50%" }}
                  className="img-fluid"
                  src="assets/img/logo.png"
                  alt=""
                ></img>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-xs-12">
              <div className="about-content">
                <div>
                  <div className="about-text">
                    <h2>About The Hackathon</h2>
                    <p>
                      TSEC Hacks is the annual hackathon organized by TSEC
                      CodeCell, Thadomal Shahani Engineering College Bandra. It
                      is an in-person 24-hr event for innovatively fostering
                      real-world problem-solving skills.
                    </p>
                  </div>
                  <ul className="stylish-list mb-3 hackathon_list">
                    <li>
                      <i
                        style={{ color: "turquoise" }}
                        className="lni-check-mark-circle"
                      ></i>
                      Date: 9th March to 10th March 2022
                    </li>
                    <li>
                      <i
                        style={{ color: "turquoise" }}
                        className="lni-check-mark-circle"
                      ></i>
                      Team Size: 2 to 4 members
                    </li>
                    <li>
                      <i
                        style={{ color: "turquoise" }}
                        className="lni-check-mark-circle"
                      ></i>
                      Free registrations
                    </li>
                    <li>
                      <i
                        style={{ color: "turquoise" }}
                        className="lni-check-mark-circle"
                      ></i>
                      Participation fee of Rs. 200 to be paid after getting
                      shortlisted
                    </li>
                    <li>
                      <i
                        style={{ color: "turquoise" }}
                        className="lni-check-mark-circle"
                      ></i>
                      Cash prizes will be announced soon!
                    </li>
                  </ul>
                  <a
                    className="btn btn-common"
                    href="https://forms.gle/vqPM7PCZRgtVUEee8"
                  >
                    Register Now!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
