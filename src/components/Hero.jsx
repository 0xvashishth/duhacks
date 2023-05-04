import React from "react";
import "./hero.css";

const Hero = () => {
  React.useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="header-top-bar" className="ptb-70 gradient-bg">
      <div className="container mb-2">
        <div className="row align-items-center">
          <div className="col-md-12 col-lg-6">
            <div className="hero-slider-content text-white pt-5">
              <strong>18th - 19th February 2023 </strong>
              <h1 className="text-white mb-0">DUHacks 2.0</h1>
              <span>
                Event sponsered by &ensp;
                <strong style={{ fontSize: "18px" }}>
                  <a href="https://www.einfochips.com/" target="_blank">
                    eInfochips
                  </a>
                </strong>
              </span>

              <p className="lead mt-4">
                Get your creative hats on and join us on this incredible ride to
                build something out of the box.
              </p>

              <div className="action-btns mt-3">
                {/* <a
                  href="https://duhacks.devfolio.co/"
                  className="btn secondary-solid-btn"
                >
                  {" "}
                  Apply With Devfolio{" "}
                </a>{" "} */}
                <div
                  class="apply-button"
                  data-hackathon-slug="duhacks2"
                  data-button-theme="light"
                  // style="height: 44px; width: 312px"
                ></div>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-4">
            <div style={{ textAlign: "left" }} className="pt-5">
              <iframe
                height="240px"
                // width="336px"
                className="vd1"
                src="https://www.youtube.com/embed/BUCFX36MMBM"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen 
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
