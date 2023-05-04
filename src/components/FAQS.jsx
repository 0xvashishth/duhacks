import React from "react";
import Faq from "react-faq-component";


const data = {
  title:"",
  rows: [
    {
      title:"What is a DUHacks?",
      content:"DUHacks is a 36-hour National-Level hybrid hackathon organized by Google Developer Student Club, DDU in which all participants can sharpen their skills and connect with people to grow together."
    },

    {
      title:"Who can attend?",
      content:"DUHacks is open to all undergraduate, high school students, and middle school students from all schools. Unfortunately, only DDU students can attend this event offline. For the rest of the other students, the event would be online."
    },

    {
      title:"I am first time hacker, what should I do?",
      content:"No worries, we love to welcome first-time hackers and start their hacking journey from a hackathon. We have some awesome workshops and events which will help you get started with hackathons and hacking in general. Join our discord server for more details."
    },

    {
      title:"How team formation works?",
      content:"You can form a team with 4 members in it at maximum. Individual participation is allowed."
    },

    {
      title:"Can I volunteer?",
      content:"Yes, we are actively looking for volunteers, contact us on gdsc@ddu.ac.in, we will be glad to have you."
    },

    {
      title:"What will a hybrid hackathon look like?",
      content:"All communication will be via Discord, opening and closing ceremonies will be through Youtube, and workshops will be on Google Meet! We will make sure to send attendees a detailed document 📄 with a schedule of all workshops, their topics, and how to access them."
    },

    {
      title:"I have more questions?",
      content:"Reach us directly at (gdsc@ddu.ac.in) we would happy to help you."
    }
  ]
}


const FAQS = () => {
  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
}, []);
  return (
    <section className="promo-section ptb-100" id="faq">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-9 col-lg-8">
            <div className="section-heading mb-3 text-center">
              <h2>Frequently Asked Questions</h2>
              <span className="animate-border mr-auto ml-auto mb-4"></span>
            </div>
              <Faq data={data} />
          </div>
        </div>



      


        {/* <div className="row">
          <div className="col-lg-6">
            <div id="accordion-1" className="accordion accordion-faq">
              <div className="card">
                <div
                  className="card-header py-4"
                  id="heading-1-1"
                  data-toggle="collapse"
                  role="button"
                  data-target="#collapse-1-1"
                  aria-expanded="false"
                  aria-controls="collapse-1-1"
                >
                  <h6 className="mb-0">
                    <span className=" mr-3">
                      <i className="fa fa-bars" aria-hidden="true"></i>
                    </span>{" "}
                    How do I Register for the Hackathon ?
                  </h6>
                </div>
                <div
                  id="collapse-1-1"
                  className="collapse"
                  aria-labelledby="heading-1-1"
                  data-parent="#accordion-1"
                >
                  <div className="card-body">
                    <p>
                      You can Pitch your proposal{" "}
                      <a href="register/"> here. </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div
                  className="card-header py-4"
                  id="heading-1-2"
                  data-toggle="collapse"
                  role="button"
                  data-target="#collapse-1-2"
                  aria-expanded="false"
                  aria-controls="collapse-1-2"
                >
                  <h6 className="mb-0">
                    <span className=" mr-3">
                      <i className="fa fa-bars" aria-hidden="true"></i>
                    </span>{" "}
                    Can I submit only Idea without building a solution?
                  </h6>
                </div>
                <div
                  id="collapse-1-2"
                  className="collapse"
                  aria-labelledby="heading-1-2"
                  data-parent="#accordion-1"
                >
                  <div className="card-body">
                    <p>
                      {" "}
                      Yes, but you will not be eligible for winning a price,
                      Only the team which implements a viable solution is
                      eligible for winning a prize.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div
                  className="card-header py-4"
                  id="heading-1-3"
                  data-toggle="collapse"
                  role="button"
                  data-target="#collapse-1-3"
                  aria-expanded="false"
                  aria-controls="collapse-1-3"
                >
                  <h6 className="mb-0">
                    <span className=" mr-3">
                      <i className="fa fa-bars" aria-hidden="true"></i>
                    </span>{" "}
                    What can be the Team size ?
                  </h6>
                </div>
                <div
                  id="collapse-1-3"
                  className="collapse"
                  aria-labelledby="heading-1-3"
                  data-parent="#accordion-1"
                >
                  <div className="card-body">
                    <p>
                      {" "}
                      Teams can be up to 5 people. Individual hacker is also
                      allowed to hack alone.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div id="accordion-2" className="accordion accordion-faq">
              <div className="card">
                <div
                  className="card-header py-4"
                  id="heading-2-1"
                  data-toggle="collapse"
                  role="button"
                  data-target="#collapse-2-1"
                  aria-expanded="false"
                  aria-controls="collapse-2-1"
                >
                  <h6 className="mb-0">
                    <span className=" mr-3">
                      <i className="fa fa-bars" aria-hidden="true"></i>
                    </span>{" "}
                    Can I be part of multiple Teams ?
                  </h6>
                </div>
                <div
                  id="collapse-2-1"
                  className="collapse"
                  aria-labelledby="heading-2-1"
                  data-parent="#accordion-2"
                >
                  <div className="card-body">
                    <p> No, At any point you can be part of only one team.</p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div
                  className="card-header py-4"
                  id="heading-2-2"
                  data-toggle="collapse"
                  role="button"
                  data-target="#collapse-2-2"
                  aria-expanded="false"
                  aria-controls="collapse-2-2"
                >
                  <h6 className="mb-0">
                    <span className=" mr-3">
                      <i className="fa fa-bars" aria-hidden="true"></i>
                    </span>{" "}
                    How much does it cost?
                  </h6>
                </div>
                <div
                  id="collapse-2-2"
                  className="collapse"
                  aria-labelledby="heading-2-2"
                  data-parent="#accordion-2"
                >
                  <div className="card-body">
                    <p>
                      There are no cost associated with attending the Hackathon.
                      The event is free to attend, Everything will be provided
                      by our team and sponsors.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div
                  className="card-header py-4"
                  id="heading-2-3"
                  data-toggle="collapse"
                  role="button"
                  data-target="#collapse-2-3"
                  aria-expanded="false"
                  aria-controls="collapse-2-3"
                >
                  <h6 className="mb-0">
                    <span className=" mr-3">
                      <i className="fa fa-bars" aria-hidden="true"></i>
                    </span>{" "}
                    What is a hackathon?
                  </h6>
                </div>
                <div
                  id="collapse-2-3"
                  className="collapse"
                  aria-labelledby="heading-2-3"
                  data-parent="#accordion-2"
                >
                  <div className="card-body">
                    <p>
                      {" "}
                      A Hackathon is an short sprint of Invention where you can
                      work with people to build a project in a short span of
                      time. Hackathon should not be confused with Hacking and
                      this it is not about hacking into a system, It’s instead
                      about hacking by way of building something together and
                      learning a lot during the process.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <br/><br/><br/>
        <div className="row justify-content-center">
          <div className="col-md-9 col-lg-8">
            <div className="section-heading mb-3 text-center">
              <div
                  class="apply-button"
                  data-hackathon-slug="duhacks2"
                  data-button-theme="light"
                  // style={"margin:auto"}
                ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQS;
