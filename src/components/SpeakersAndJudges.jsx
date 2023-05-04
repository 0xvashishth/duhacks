import React from "react";

const SpeakersAndJudges = () => {
  return (
    <section id="speakersAndJudges" className="team-two-section ptb-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-8">
            <div className="section-heading text-center mb-5">
              <br />
              <br />
              <strong className="color-secondary"></strong>
              <h2>Speakers & Judges</h2>
              <span className="animate-border mr-auto ml-auto mb-4"></span>
              <p className="lead">
                Coming Soon...!
              </p>
            </div>
          </div>
        </div>

        {/* <div className="row">
          <div className="col-md-6 col-lg-3">
            <div className="staff-member my-md-3 my-lg-3 my-sm-0">
              <div className="card text-center">
                <img
                  src="img/speakers/sudeendra.jpeg"
                  alt="team image"
                  width="120"
                  className="img-fluid m-auto"
                  style={{ borderRadius: "50%", marginTop: "15px!important" }}
                />
                <div className="card-body">
                  <h5 className="teacher mb-0">Sudeendra Koushik</h5>
                  <span>
                    <br />
                    Governing Board at IEEE, Previously Director at HCL
                    Technologies and Director at Founders Institute.
                  </span>
                  <p className="teacher-quote">
                    <ul className="list-inline pt-2 social">
                      <li className="list-inline-item">
                        <a
                          href="https://www.linkedin.com/in/sudeendrakoushik/"
                          target="_blank"
                        >
                          <i className="fa-brands fa-linkedin"></i>
                        </a>
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="staff-member my-md-3 my-lg-3 my-sm-0">
              <div className="card text-center">
                <img
                  src="img/speakers/ravi.jpeg"
                  alt="team image"
                  width="120"
                  className="img-fluid m-auto"
                  style={{ borderRadius: "50%", marginTop: "15px!important" }}
                />
                <div className="card-body">
                  <h5 className="teacher mb-0">Ravi Mutineni</h5>
                  <span>
                    <br />
                    Founder & CEO at E2E inc, Previously Director of new
                    initiatives at M.I.T
                    <br />
                    <br />
                  </span>
                  <p className="teacher-quote">
                    <ul className="list-inline pt-2 social">
                      <li className="list-inline-item">
                        <a
                          href="https://www.linkedin.com/in/ravi-mutineni-2143a1/"
                          target="_blank"
                        >
                          <i className="fa-brands fa-linkedin"></i>
                        </a>
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="staff-member my-md-3 my-lg-3 my-sm-0">
              <div className="card text-center">
                <img
                  src="img/speakers/anvita.png"
                  alt="team image"
                  width="120"
                  className="img-fluid m-auto"
                  style={{ borderRadius: "50%", marginTop: "15px!important" }}
                />
                <div className="card-body">
                  <h5 className="teacher mb-0">Anvita Bajpai</h5>
                  <span>
                    <br />
                    Founder at SunvAI.in | Speaker | Bestselling Author of 3
                    Books
                    <br />
                    <br />
                    <br />
                  </span>
                  <p className="teacher-quote">
                    <ul className="list-inline pt-2 social">
                      <li className="list-inline-item">
                        <a
                          href="https://www.linkedin.com/in/anvitabajpai/"
                          target="_blank"
                        >
                          <i className="fa-brands fa-linkedin"></i>
                        </a>
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="staff-member my-md-3 my-lg-3 my-sm-0">
              <div className="card text-center">
                <img
                  src="img/speakers/saravanan.png"
                  alt="team image"
                  width="120"
                  className="img-fluid m-auto"
                  style={{ borderRadius: "50%", marginTop: "15px!important" }}
                />
                <div className="card-body">
                  <h5 className="teacher mb-0">Saravanan Neel </h5>
                  <span>
                    {" "}
                    <br /> Co-founder at Silver Oak Health, Previously Director
                    at Mastech
                  </span>
                  <p className="teacher-quote pt-3">
                    <br />
                    <br />
                    <br />{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-3">
            <div className="staff-member my-md-3 my-lg-3 my-sm-0">
              <div className="card text-center">
                <img
                  src="img/speakers/rakesh.jpg"
                  alt="team image"
                  width="120"
                  className="img-fluid m-auto"
                  style={{ borderRadius: "50%", marginTop: "15px!important" }}
                />
                <div className="card-body">
                  <h5 className="teacher mb-0">Rakesh Raushan</h5>
                  <span>
                    {" "}
                    <br />
                    Engineering Manager at KPMG, Ex- CIsco, Ex- Nokia
                  </span>
                  <br />
                  <p className="teacher-quote pt-3">
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="staff-member my-md-3 my-lg-3 my-sm-0">
              <div className="card text-center">
                <img
                  src="img/speakers/praveen.jpg"
                  alt="team image"
                  width="120"
                  className="img-fluid m-auto"
                  style={{ borderRadius: "50%", marginTop: "15px!important" }}
                />
                <div className="card-body">
                  <h5 className="teacher mb-0">Praveen Kumar Purushothaman</h5>
                  <span>
                    <br />
                    React Specialist, Top 0.05% Overall in Stack Overflow,
                    Global Hackathon Mentor
                  </span>
                  <p className="teacher-quote">
                    <ul className="list-inline pt-2 social">
                      <li className="list-inline-item">
                        <a
                          href="https://www.linkedin.com/in/praveentech/"
                          target="_blank"
                        >
                          <i className="fa-brands fa-linkedin"></i>
                        </a>
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="staff-member my-md-3 my-lg-3 my-sm-0">
              <div className="card text-center">
                <img
                  src="img/speakers/vivek.jpg"
                  alt="team image"
                  width="120"
                  className="img-fluid m-auto"
                  style={{ borderRadius: "50%", marginTop: "15px!important" }}
                />
                <div className="card-body">
                  <h5 className="teacher mb-0">Vivek Jain</h5>
                  <span>
                    <br />
                    Chief Business officer Shiksha.com Previoulsy Chief Product
                    Officer Naukri.com, Ex-Adobe
                  </span>
                  <p className="teacher-quote">
                    <ul className="list-inline pt-2 social">
                      <li className="list-inline-item">
                        <a
                          href="https://www.linkedin.com/in/vivekjain/"
                          target="_blank"
                        >
                          <i className="fa-brands fa-linkedin"></i>
                        </a>
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="staff-member my-md-3 my-lg-3 my-sm-0">
              <div className="card text-center">
                <img
                  src="img/team/Vijay.jpeg"
                  alt="team image"
                  width="120"
                  className="img-fluid m-auto"
                  style={{ borderRadius: "50%", marginTop: "15px!important" }}
                />
                <div className="card-body">
                  <h5 className="teacher mb-0"> Vijay Sharma </h5>
                  <span>
                    {" "}
                    <br /> Product Owner - SAP Machine Learning Foundation at
                    SAP
                    <br />
                    <br />
                    <br />{" "}
                  </span>
                  <br />
                  <p className="teacher-quote">
                    <ul className="list-inline pt-2 social">
                      <li className="list-inline-item">
                        <a
                          href="https://www.linkedin.com/in/vijaysh/"
                          target="_blank"
                        >
                          <i className="fa-brands fa-linkedin"></i>
                        </a>
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 col-lg-3">
            <div className="staff-member my-md-3 my-lg-3 my-sm-0">
              <div className="card text-center">
                <img
                  src="img/speakers/saurabh.png"
                  alt="team image"
                  width="120"
                  className="img-fluid m-auto"
                  style={{ borderRadius: "50%", marginTop: "15px!important" }}
                />
                <div className="card-body">
                  <h5 className="teacher mb-0">Saurabh Minni</h5>
                  <span>
                    {" "}
                    <br /> Senior software engineer at Google, Ex- McAfee, Ex-
                    ADOBE
                  </span>
                  <p className="teacher-quote pt-3"> </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="staff-member my-md-3 my-lg-3 my-sm-0">
              <div className="card text-center">
                <img
                  src="img/speakers/akash.png"
                  alt="team image"
                  width="120"
                  className="img-fluid m-auto"
                  style={{ borderRadius: "50%", marginTop: "15px!important" }}
                />
                <div className="card-body">
                  <h5 className="teacher mb-0">Aakash Kumar Goel</h5>
                  <span>
                    {" "}
                    <br />
                    Senior Cyber Security Researcher at Security Compass, Ex-
                    CDAC.{" "}
                  </span>
                  <br />
                  <p className="teacher-quote pt-3"> </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="staff-member my-md-3 my-lg-3 my-sm-0">
              <div className="card text-center">
                <img
                  src="img/speakers/ritu.jpeg"
                  alt="team image"
                  width="120"
                  className="img-fluid m-auto"
                  style={{ borderRadius: "50%", marginTop: "15px!important" }}
                />
                <div className="card-body">
                  <h5 className="teacher mb-0"> Ritu Rana </h5>
                  <span>
                    {" "}
                    <br /> Azure Consultant at Capgemini, Ex- HCL Technologies
                  </span>
                  <p className="teacher-quote pt-3"> </p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default SpeakersAndJudges;
