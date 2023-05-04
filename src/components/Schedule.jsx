import React from "react";

const Schedule = () => {
  return (
    <section
      className="work-process-section ptb-100 gray-light-bg"
      id="schedule"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-9">
            <div className="section-heading text-center">
              <strong className="color-secondary">When to Join?</strong>
              <h2> Hackathon Schedule </h2>
              <span className="animate-border mr-auto ml-auto mb-4"></span>
            </div>
          </div>
        </div>
        <div className="flexxx">
          <div className="row">
            <div className="col-md-12 col-lg-5 process-width">
              <div className="process-box process-left">
                <div className="row">
                  <div className="col-md-5">
                    <div className="process-step-number">
                      <strong>25th Dec</strong>
                      <h6>10:OO AM</h6>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <h5>Registration Starts</h5>
                    <p>
                      Register yourself at devfolio by submitting your details.{" "}
                    </p>
                  </div>
                </div>
                <div className="process-line-r"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-lg-5 process-width">
              <div className="process-box process-left">
                <div className="row">
                  <div className="col-md-5">
                    <div className="process-step-number">
                      <strong>17th Feb</strong>
                      <h6>10:OO PM</h6>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <h5>Registration Ends</h5>
                    <p>We'll review your appication and will let you know. </p>
                  </div>
                </div>
                <div className="process-line-r"></div>
              </div>
            </div>
          </div>
        </div>


        <div className="flexxx">
        <div className="row">
            <div className="col-md-12 col-lg-5 process-width">
              <div className="process-box process-left">
                <div className="row">
                  <div className="col-md-5">
                    <div className="process-step-number">
                      <strong>18th Feb </strong>
                      <h6> 10:00 AM</h6>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <h5>Hackathon Starts</h5>
                    <p>
                      You can start implementing your project after
                      inauguration ceremony. <br />{" "}
                    </p>
                  </div>
                </div>
                <div className="process-line-l"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-lg-5 process-width">
              <div className="process-box process-left">
                <div className="row">
                  <div className="col-md-5">
                    <div className="process-step-number">
                      <strong>18th Feb</strong>
                      <h6>03:3O PM</h6>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <h5>Postman API 101</h5>
                    <p>Amazing session on Postman API by Ali Mustufa.&emsp;&emsp;</p>
                  </div>
                </div>
                <div className="process-line-r"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="flexxx">
          <div className="row">
            <div className="col-md-12 col-lg-5 process-width">
              <div className="process-box process-left">
                <div className="row">
                  <div className="col-md-5">
                    <div className="process-step-number">
                      <strong>19th Feb </strong>
                      <h6> 11:00 AM</h6>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <h5>Session on Github</h5>
                    <p>
                      Session on git, Github and open source contribution by DUHacks team.<br />{" "}
                    </p>
                  </div>
                </div>
                <div className="process-line-l"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-lg-5 process-width">
              <div className="process-box process-left">
                <div className="row">
                  <div className="col-md-5">
                    <div className="process-step-number">
                      <strong>19th Feb</strong>
                      <h6>08:00 PM</h6>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <h5>Hackathon Ends</h5>
                    <p>
                      Submit your project on{" "}
                      <a
                        style={{ color: "blue" }}
                        target={"_blank"}
                        className="linkk"
                        href="https://duhacks2.devfolio.co"
                      >
                        duhacks
                      </a>{" "}
                      devfolio dashboard.&emsp;&emsp;&emsp; &emsp;
                      {""}{" "}
                    </p>
                  </div>
                </div>
                <div className="process-line-r"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
