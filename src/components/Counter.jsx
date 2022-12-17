import React from "react";

const Counter = () => {
  return (
    <div>
      <section className="counter-section section-padding">
        <div className="container">
          <h2
            style={{ color: "white" }}
            id="last-stats"
            className="section-title wow fadeInUp"
            data-wow-delay="0.2s"
          >
            Last Year Stats
          </h2>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-xs-12 work-counter-widget">
              <div className="counter">
                <div className="icon">
                  <i className="lni lni-users"></i>
                </div>
                <div className="counter-content">
                  <div className="counterUp">552</div>
                  <p>Participants</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-xs-12 work-counter-widget">
              <div className="counter">
                <div className="icon">
                  <i className="lni lni-handshake"></i>
                </div>
                <div className="counter-content">
                  <div className="counterUp">138</div>
                  <p>Teams</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-xs-12 work-counter-widget">
              <div className="counter">
                <div className="icon">
                  <i className="lni-briefcase"></i>
                </div>
                <div className="counter-content">
                  <div className="counterUp">48</div>
                  <p>Colleges</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-xs-12 work-counter-widget">
              <div className="counter">
                <div className="icon">
                  <i className="lni lni-customer"></i>
                </div>
                <div className="counter-content">
                  <div className="counterUp">9</div>
                  <p>Sponsors</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Counter;
