import React from "react";

const About = () => {
  return (
    <section className="about-us-section ptb-100 gray-light-bg" id="why">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-6">
            <div className="about-us-img">
              <img
                src="img/about-bg.png"
                alt="about us"
                className="img-fluid about-single-img imgimgimg"
              />
              <img
                src="img/about-us-img-bg.svg"
                alt="about bg"
                className="about-us-bg"
              />
            </div>
          </div>
          <div className="col-md-6 col-lg-6">
            <div className="about-us-content-wrap">
              <strong className="color-secondary">DUHacks 2.0 Overview</strong>
              <h3>What is DUHacks?</h3>
              <span className="animate-border mb-4"></span>
              <p>
                {" "}
                After getting the success of{" "}
                <a href="https://duhacks.tech/">DUHacks 1.0</a> we are again
                back with another one DUHacks 2.0 🔥{" "}
              </p>
              <p>
                DUHacks is a 36-hour National-Level hybrid hackathon organized
                by Google Developer Student Club, DDU in which all participants
                can sharpen their skills and connect with people to grow
                together. The hackathon is designed to spark innovation, attract
                and educate new talent and create new channels for collaboration
                between performance and capacity professionals. We aim to spread
                the idea that programming is a useful skill that everyone can
                learn. Only DDU students are allowed to attend this hackathon in
                offline mode. Rest all students from across the world can
                participate in this hackathon online mode.
              </p>
              <div className="row mt-4">
                <div className="col-4">
                  <div className="counter-single">
                    <h2 className="mb-0 color-secondary">6</h2>
                    <strong>Themes </strong>
                  </div>
                </div>
                <div className="col-4">
                  <div className="counter-single">
                    <h2 className="mb-0 color-secondary">36+</h2>
                    <strong>
                      {" "}
                      Hours of Hacking <br /> Including Expert Sessions & Talks
                    </strong>
                  </div>
                </div>
                <div className="col-4">
                  <div className="counter-single">
                    <h2 className="mb-0 color-secondary">1700+</h2>
                    <strong>Total Particpants</strong>
                  </div>
                </div>
              </div>
              <div className="action-btns mt-4">
                <a
                  href="https://discord.gg/cvHPEK7U3v"
                  className="btn secondary-outline-btn"
                  target="_blank"
                >
                  Join Discord Channel
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
