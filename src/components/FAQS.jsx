import React from "react";

const FAQS = () => {
  return (
    <div>
      <section id="faq" className="intro section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title-header text-center">
                <h2
                  className="section-title wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  FAQs
                </h2>
                <p className="wow fadeInDown" data-wow-delay="0.2s">
                  Answers to the most frequently asked questions!
                </p>
              </div>
            </div>
          </div>
          <div className="row intro-wrapper">
            <div className="col-lg-4 col-md-6 col-xs-12">
              <div className="single-intro-text mb-70">
                <i className="lni-microphone"></i>
                <h3>Who can participate?</h3>
                <p>
                  The hackathon is open for Students from all over India. It is
                  the right place for anyone who's interested in learning and
                  innovating with their ideas.
                </p>
                <span className="count-number">01</span>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-xs-12">
              <div className="single-intro-text">
                <i className="lni-users"></i>
                <h3 className="ts-title">How much will it cost?</h3>
                <p>
                  Although registration for TSEC Hacks is completely free, a
                  small participation fee (200 INR per team) has to be paid
                  incase your team is shortlisted.
                </p>
                <span className="count-number">02</span>
              </div>
              <div className="border-shap left"></div>
            </div>
            <div className="col-lg-4 col-md-6 col-xs-12">
              <div className="single-intro-text mb-70">
                <i className="lni-bullhorn"></i>
                <h3>How can I apply?</h3>
                <p>
                  The registration would be simply done by just clicking the
                  register button <a className="register-link">here</a> and
                  filling up a google form in which you would have to mention
                  you and your team details. Registrations end on 1th March 2022
                </p>
                <span className="count-number">03</span>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-xs-12">
              <div className="single-intro-text mb-70">
                <i className="lni-heart"></i>
                <h3>What if I don't know how to code?</h3>
                <p>
                  No worries, Interest in learning and working with technology
                  is much more important than your current experience level.
                </p>
                <span className="count-number">04</span>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-xs-12">
              <div className="single-intro-text mb-70">
                <i className="lni-cup"></i>
                <h3>What are the prizes to be won?</h3>
                <p>
                  We are going to announce some really exciting prizes and
                  incentives soon. Stay tuned for further updates!
                </p>
                <span className="count-number">05</span>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-xs-12">
              <div className="single-intro-text mb-70">
                <i className="lni-gallery"></i>
                <h3>Can we apply as a team?</h3>
                <p>
                  Yes! We believe that you're stronger as a team than apart. You
                  can form teams of 2-4 people. Most teams aim to have a mix of
                  people with both design and development skills.
                </p>
                <span className="count-number">06</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQS;
