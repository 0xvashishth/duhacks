import React from "react";

const Schedule = () => {
  return (
    <div>
      <section id="schedules" className="schedule section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title-header text-center">
                <h2
                  style={{ marginBottom: "20px" }}
                  className="section-title wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  Event Schedule
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 mb-5 text-center">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active nav-width"
                    id="monday-tab"
                    data-toggle="tab"
                    href="#monday"
                    role="tab"
                    aria-controls="monday"
                    aria-expanded="true"
                  >
                    <div className="item-text">
                      <h4>Phase 1</h4>
                      <h5>Registrations</h5>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link nav-width"
                    id="tuesday-tab"
                    data-toggle="tab"
                    href="#tuesday"
                    role="tab"
                    aria-controls="tuesday"
                  >
                    <div className="item-text">
                      <h4>Phase 2</h4>
                      <h5>Shortlisting</h5>
                    </div>
                  </a>
                </li>
                <li className="nav-item nav-width">
                  <a
                    className="nav-link"
                    id="wednesday-tab"
                    data-toggle="tab"
                    href="#wednesday"
                    role="tab"
                    aria-controls="wednesday"
                  >
                    <div className="item-text">
                      <h4>Phase 3</h4>
                      <h5>Hackathon</h5>
                    </div>
                  </a>
                </li>
                <li className="nav-item nav-width">
                  <a
                    className="nav-link"
                    id="thursday-tab"
                    data-toggle="tab"
                    href="#thursday"
                    role="tab"
                    aria-controls="thursday"
                  >
                    <div className="item-text">
                      <h4>Phase 4</h4>
                      <h5>Judging</h5>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-12">
              <div
                className="schedule-area row wow fadeInDown"
                data-wow-delay="0.3s"
              >
                <div className="schedule-tab-content col-12 clearfix">
                  <div className="tab-content" id="myTabContent">
                    <div
                      className="tab-pane fade show active"
                      id="monday"
                      role="tabpanel"
                      aria-labelledby="monday-tab"
                    >
                      <div id="accordion">
                        <div className="card">
                          <div id="headingOne">
                            <div className="schedule-slot-time">
                              <span> Feb 15 - Mar 1</span>
                              Register
                            </div>
                            <div
                              className="collapsed card-header"
                              data-toggle="collapse"
                              data-target="#collapseOne1"
                              aria-expanded="false"
                              aria-controls="collapseOne1"
                            >
                              <h4>Registration Process</h4>
                              <h5 className="name">TSEC Hacks</h5>
                            </div>
                          </div>
                          <div
                            id="collapseOne"
                            className="collapse show"
                            aria-labelledby="headingOne"
                            data-parent="#accordion"
                          >
                            <div className="card-body">
                              <p>
                                The registration would be simply done by just
                                clicking the register button{" "}
                                <a className="register-link">here</a> and
                                filling up a google form in which you would have
                                to mention you and your team details.
                                Registrations end on 1st March 2022
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="tuesday"
                      role="tabpanel"
                      aria-labelledby="tuesday-tab"
                    >
                      <div id="accordion2">
                        <div className="card">
                          <div id="headingOne1">
                            <div className="schedule-slot-time">
                              <span>Mar 1 - Mar 7</span>
                              Shortlisting
                            </div>
                            <div
                              className="collapsed card-header"
                              data-toggle="collapse"
                              data-target="#collapseTwo2"
                              aria-expanded="false"
                              aria-controls="collapseTwo2"
                            >
                              <h4>Shortlisting of Teams</h4>
                              <h5 className="name">TSEC Hacks</h5>
                            </div>
                          </div>
                          <div
                            id="collapseOne1"
                            className="collapse show"
                            aria-labelledby="headingOne1"
                            data-parent="#accordion2"
                          >
                            <div className="card-body">
                              <p>
                                A shortlisting process would be done from which
                                certain teams would be selected out of the lot
                                to take part in TSEC Hacks. Shortlisting process
                                begins from 1th March and ends on 7th March 2022
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="wednesday"
                      role="tabpanel"
                      aria-labelledby="wednesday-tab"
                    >
                      <div id="accordion3">
                        <div className="card">
                          <div id="headingOne3">
                            <div className="schedule-slot-time">
                              <span>Mar 9 - Mar 10</span>
                              Hackathon
                            </div>
                            <div
                              className="collapsed card-header"
                              data-toggle="collapse"
                              data-target="#collapseOne3"
                              aria-expanded="false"
                              aria-controls="collapseOne3"
                            >
                              <h4>Hackathon Begins for all</h4>
                              <h5 className="name">TSEC Hacks</h5>
                            </div>
                          </div>
                          <div
                            id="collapseOne3"
                            className="collapse show"
                            aria-labelledby="headingOne3"
                            data-parent="#accordion3"
                          >
                            <div className="card-body">
                              <p>
                                The Hackathon would begin on 9th March, 2022 at
                                11AM and end on 10th March, 2022 at 11AM. It is
                                a 24hr hackathon where you'd be given various
                                problem statements from various domains for your
                                team to choose from along with mentors guiding
                                you in certain time gaps. For reference{" "}
                                <a
                                  className="last-yr-ps-link"
                                  href="https://docs.google.com/document/d/1bjv6WGq01JrBQ274PGsN_VV1-yEFfIhBbpfSJa2I38s/edit?usp=sharing"
                                >
                                  here
                                </a>{" "}
                                is a list of problem statements asked last year
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="thursday"
                      role="tabpanel"
                      aria-labelledby="thursday-tab"
                    >
                      <div id="accordion4">
                        <div className="card">
                          <div id="headingOne">
                            <div className="schedule-slot-time">
                              <span>Mar 10, 11AM</span>
                              Judging
                            </div>
                            <div
                              className="collapsed card-header"
                              data-toggle="collapse"
                              data-target="#collapseOne4"
                              aria-expanded="false"
                              aria-controls="collapseOne4"
                            >
                              <h4>
                                Judging and presentation of projects begins
                              </h4>
                              <h5 className="name">TSEC HACKS</h5>
                            </div>
                          </div>
                          <div
                            id="collapseOne4"
                            className="collapse show"
                            aria-labelledby="headingOne"
                            data-parent="#accordion4"
                          >
                            <div className="card-body">
                              <p>
                                After the hackathon ends, your team will be able
                                to present their projects to our judges where
                                they would judge and give feedbacks to your team
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Schedule;
