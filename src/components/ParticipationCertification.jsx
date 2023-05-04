import React from "react";

const ParticipationCertification = () => {
  return (
    <section className="promo-section ptb-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-9">
            <div className="section-heading text-center">
              <h2> Certificates </h2>
              <span className="animate-border mr-auto ml-auto mb-4"></span>
            </div>
          </div>
        </div>

        <div className="row ">
          <div className="col-2"></div>
          <div className="col-8">
            <div className="support-cta  mt-5 text-center">
              <h5 className="mb-1 text-center">
                <span className="color-secondary">
                  <i className="fa-solid fa-bolt"></i>
                </span>{" "}
                Participation Certificate{" "}
                <span className="color-secondary">
                  <i className="fa-solid fa-bolt"></i>
                </span>
              </h5>
              <div className="col-md-12 col-lg-12">
                <ul className="list-unstyled tech-feature-list">
                  <li className="py-1">
                    {/* <span className="mr-2 color-secondary">
                      <i class="fa-solid fa-location-arrow"></i>
                    </span> */}
                    Even if you are not able to win any awards no problems, we
                    will be offering Participation certificates to the teams
                    submitting solutions.
                  </li>
                </ul>
              </div>
              <br />
              <h5 className="mb-1 text-center">
                <span className="color-secondary">
                  <i className="fa-solid fa-bolt"></i>
                </span>{" "}
                Winners Certificate{" "}
                <span className="color-secondary">
                  <i className="fa-solid fa-bolt"></i>
                </span>
              </h5>
              <div className="col-md-12 col-lg-12">
                <ul className="list-unstyled tech-feature-list">
                  <li className="py-1">
                    {/* <span className="mr-2 color-secondary">
                      <i class="fa-solid fa-location-arrow"></i>
                    </span> */}
                    All winners will be given a special certificates.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParticipationCertification;
