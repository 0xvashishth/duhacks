import React from "react";

const Tip = () => {
  return (
    <section className="call-to-action py-5 gray-light-bg">
      <div className="container">
        <div className="row justify-content-around align-items-center">
          <div className="col-md-8">
            <div className="subscribe-content">
              <h3 className="mb-1"> Everybody can contribute</h3>
              <p>
                Even If you are unable to participate in the Hackathon but have
                a great idea for India's current challenges. You can submit your
                Idea in Idea Pool. Which can be picked by anyteam who is
                participating in the Hackathon but looking for ideas. This way
                see you Idea getting implemented without taking taking part in
                Hackathon.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="action-btn text-lg-right text-sm-left">
              <a
                href="https://duhacks.tech/"
                target="_blank"
                className="btn secondary-solid-btn"
              >
                Submit your idea in Idea Pool
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tip;
