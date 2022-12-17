import React from "react";

const Contact = () => {
  return (
    <div>
      <section id="contact-text">
        <div className="container">
          <div className="row contact-wrapper">
            <div className="col-lg-4 col-md-5 col-xs-12">
              <ul>
                <a href="https://goo.gl/maps/QpoY6shbi39d2fW87">
                  <li>
                    <i className="lni-home"></i>
                  </li>
                  <li>
                    <span>Nadiad, Gujarat</span>
                  </li>
                </a>
              </ul>
            </div>
            <div className="col-lg-4 col-md-3 col-xs-12">
              <ul>
                <a href="tel:+91-99876-63816">
                  <li>
                    <i className="lni-phone"></i>
                  </li>
                  <li>
                    <span>Prince: +91 99134 9572</span>
                  </li>
                </a>
              </ul>
            </div>
            <div className="col-lg-4 col-md-3 col-xs-12">
              <ul>
                <a href="mailto:tseccodecell@gmail.com">
                  <li>
                    <i className="lni-envelope"></i>
                  </li>
                  <li>
                    <span>pmdhamecha673@gmail.com</span>
                  </li>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
