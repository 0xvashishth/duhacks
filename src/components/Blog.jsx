import React from "react";

const Blog = () => {
  return (
    <div>
      <section id="domains" className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title-header text-center">
                <h2
                  className="section-title wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  Hack Domains
                </h2>
                <p className="wow fadeInDown" data-wow-delay="0.2s">
                  Problem statements will be based on following tech domains.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-xs-12">
              <div className="blog-item">
                <div className="blog-image">
                  <a>
                    <img
                      className="img-fluid"
                      src="assets/img/domains/web.png"
                      alt=""
                    ></img>
                  </a>
                </div>
                <div className="descr">
                  <div className="icon">
                    <i className="lni-image"></i>
                  </div>
                  <h3 className="title">
                    <a>Web Development</a>
                  </h3>
                  <p className="hack-desc">
                    Lorem ipsum dolor sit amet, consectetur adipsing elit, sed
                    do eiusmodincididunt ut labore et dolore
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-xs-12">
              <div className="blog-item">
                <div className="blog-image">
                  <a>
                    <img
                      className="img-fluid"
                      src="assets/img/domains/app.png"
                      alt=""
                    ></img>
                  </a>
                </div>
                <div className="descr">
                  <div className="icon">
                    <i className="lni-arrow-right"></i>
                  </div>
                  <h3 className="title">
                    <a>App Development</a>
                  </h3>
                  <p className="hack-desc">
                    Lorem ipsum dolor sit amet, consectetur adipsing elit, sed
                    do eiusmodincididunt ut labore et dolore
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-xs-12">
              <div className="blog-item">
                <div className="blog-image">
                  <a>
                    <img
                      className="img-fluid"
                      src="assets/img/domains/block.png"
                      alt=""
                    ></img>
                  </a>
                </div>
                <div className="descr">
                  <div className="icon">
                    <i className="lni-camera"></i>
                  </div>
                  <h3 className="title">
                    <a>Blockchain</a>
                  </h3>
                  <p className="hack-desc">
                    Lorem ipsum dolor sit amet, consectetur adipsing elit, sed
                    do eiusmodincididunt ut labore et dolore
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-xs-12">
              <div className="blog-item">
                <div className="blog-image">
                  <a>
                    <img
                      className="img-fluid"
                      src="assets/img/domains/mial.png"
                      alt=""
                    ></img>
                  </a>
                </div>
                <div className="descr">
                  <div className="icon">
                    <i className="lni-camera"></i>
                  </div>
                  <h3 className="title">
                    <a>AI/ML</a>
                  </h3>
                  <p className="hack-desc">
                    Lorem ipsum dolor sit amet, consectetur adipsing elit, sed
                    do eiusmodincididunt ut labore et dolore
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-xs-12">
              <div className="blog-item">
                <div className="blog-image">
                  <a>
                    <img
                      className="img-fluid"
                      src="assets/img/domains/social.png"
                      alt=""
                    ></img>
                  </a>
                </div>
                <div className="descr">
                  <div className="icon">
                    <i className="lni-camera"></i>
                  </div>
                  <h3 className="title">
                    <a>Social Cause</a>
                  </h3>
                  <p className="hack-desc">
                    Lorem ipsum dolor sit amet, consectetur adipsing elit, sed
                    do eiusmodincididunt ut labore et dolore
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <a
              style={{ alignItems: "center", width: "300px" }}
              className="btn btn-common"
              href="https://docs.google.com/document/d/1bjv6WGq01JrBQ274PGsN_VV1-yEFfIhBbpfSJa2I38s/edit?usp=sharing"
            >
              Last Year's Problem Statements!
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
