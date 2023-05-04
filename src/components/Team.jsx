import React, { useEffect } from "react";
import {
  TeamContentSocial,
  TeamOrganiser,
  TeamMngmtSponsor,
  TeamWebDesign,
  TeamCoordinator,
} from "../data/teamdetails";

function TeamMembers(props) {
  return props.map((s, k) => <Team1 info={s} />);
}

const Team1 = ({ info }) => {
  const { role, Name, img, linkedin } = info;
  return (
    <div
      style={{ paddingBottom: "0px !important" }}
      className="slide staff-member my-md-3 my-lg-3 my-sm-0"
    >
      <div
        className="card teamClass text-center pt-2"
        style={{ background: "rgb(26,18,53)" }}
      >
        <img
          src={img}
          alt="team image"
          width="120"
          className="img-fluid m-auto"
          style={{ borderRadius: "50%", marginTop: "15px !important" }}
        />
        <div className="card-body">
          <h6 className="teacher mb-0">
            <b style={{ color: "white" }}>{Name}</b>
          </h6>
          <span style={{ color: "white" }}>{role}</span>
          <ul className="list-inline social">
            <li className="list-inline-item">
              <a href={linkedin} target="_blank">
                <i
                  style={{ color: "white" }}
                  className="fa-brands fa-linkedin"
                ></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const Team = () => {
  const delay = 2500;
  const [index1, setIndex1] = React.useState(0);
  const [index2, setIndex2] = React.useState(0);
  const [index3, setIndex3] = React.useState(0);
  const [index4, setIndex4] = React.useState(0);
  const [index5, setIndex5] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setIndex1((prevIndex) =>
        prevIndex === TeamOrganiser[0].length - 1 ? 0 : prevIndex + 1
      );
      setIndex2((prevIndex) =>
        prevIndex === TeamMngmtSponsor[0].length - 1 ? 0 : prevIndex + 1
      );
      setIndex3((prevIndex) =>
        prevIndex === TeamWebDesign[0].length - 1 ? 0 : prevIndex + 1
      );
      setIndex4((prevIndex) =>
        prevIndex === TeamContentSocial[0].length - 1 ? 0 : prevIndex + 1
      );
      setIndex5((prevIndex) =>
        prevIndex === TeamCoordinator[0].length - 1 ? 0 : prevIndex + 1
      );
    }, delay);

    return () => {
      resetTimeout();
    };
  }, [index1, index2, index3, index4]);

  return (
    <div className="container">
      <div style={{ margin: "2rem" }} className="row justify-content-center">
        <div className="col-md-8 col-lg-8">
          <div className="section-heading text-center mb-5">
            <strong className="color-secondary"></strong>
            <h2>Organising Team</h2>
            <span className="animate-border mr-auto ml-auto mb-4"></span>
            <p className="lead"></p>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-8">
          <div className="section-heading text-center mb-5">
            <strong className="color-secondary"></strong>
            <h3>Faculty Coordinator</h3>
            <span className="animate-border mr-auto ml-auto mb-4"></span>
            <p className="lead"></p>
          </div>
        </div>
      </div>
      <div className="slideshow">
        <div
          className="slideshowSlider"
          style={{ transform: `translate3d(${-index5 * 100}%, 0, 0)` }}
        >
          {TeamCoordinator.map(TeamMembers)}
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-8">
          <div className="section-heading text-center mb-5">
            <strong className="color-secondary"></strong>
            <h3>Organisers</h3>
            <span className="animate-border mr-auto ml-auto mb-4"></span>
            <p className="lead"></p>
          </div>
        </div>
      </div>
      <div className="slideshow">
        <div
          className="slideshowSlider"
          style={{ transform: `translate3d(${-index1 * 100}%, 0, 0)` }}
        >
          {TeamOrganiser.map(TeamMembers)}
        </div>
      </div>
      <br></br>
      <br></br>
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-8">
          <div className="section-heading text-center mb-5">
            <strong className="color-secondary"></strong>
            <h3>Management & Sponsorship</h3>
            <span className="animate-border mr-auto ml-auto mb-4"></span>
            <p className="lead"></p>
          </div>
        </div>
      </div>
      <div className="slideshow">
        <div
          className="slideshowSlider"
          style={{ transform: `translate3d(${-index2 * 100}%, 0, 0)` }}
        >
          {TeamMngmtSponsor.map(TeamMembers)}
        </div>
      </div>
      <br></br>
      <br></br>
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-8">
          <div className="section-heading text-center mb-5">
            <strong className="color-secondary"></strong>
            <h3>Web & Design</h3>
            <span className="animate-border mr-auto ml-auto mb-4"></span>
            <p className="lead"></p>
          </div>
        </div>
      </div>
      <div className="slideshow">
        <div
          className="slideshowSlider"
          style={{ transform: `translate3d(${-index3 * 100}%, 0, 0)` }}
        >
          {TeamWebDesign.map(TeamMembers)}
        </div>
      </div>
      <br></br>
      <br></br>
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-8">
          <div className="section-heading text-center mb-5">
            <strong className="color-secondary"></strong>
            <h3>Social Media & Content</h3>
            <span className="animate-border mr-auto ml-auto mb-4"></span>
            <p className="lead"></p>
          </div>
        </div>
      </div>
      <div className="slideshow">
        <div
          className="slideshowSlider"
          style={{ transform: `translate3d(${-index4 * 100}%, 0, 0)` }}
        >
          {TeamContentSocial.map(TeamMembers)}
        </div>
      </div>
    </div>
  );
};

export default Team;
