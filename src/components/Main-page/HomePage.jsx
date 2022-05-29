import React from "react";
import {Myinfo} from "../Top-division-components/Top-division-components.jsx";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import "./about.css";
import {Logo, LogoSectionAbout} from "../logo-section/logoSection.jsx";
import {FirstPrize, PrizeHeading} from "../prize tracks/prizes.jsx";
import {Prizeinfo} from "../../Module/General";
import {Accordion} from "../FAQ/faq.jsx";
// import {theme} from "../themes_test/theme.jsx";
// import {Sponsor, SponsorsHead, SponsorUS} from "../Sponsors/sponsors.jsx";
import {Sponsor, SponsorsHead} from "../Sponsors/sponsors.jsx";
import Birds from "../Birds/birds.jsx";
import Footer from "../Footer/footer.jsx";
import {Member} from "../team/team.jsx";
import pattern from "./pattern4.png";
import Media from "../media/media.jsx";
import ThemeType from "../Themes/theme.jsx";

import {
  TOP_SECTION,
  TeamInfo,
  // JudgesInfo,
  sponsorLogos,
  frequentlyAskedQuestions
} from "../../Module/General";

// javascript Map for sponsors

function SponsorGroup(props) {
  return (
    <Row justifyContent="center" alignItems="center">
      {props.map((s, key) => (
        <Col
          key={key}
          justifyContent="center"
          alignItems="center"
          sm={12}
          lg={4}
          md={6}
        >
          {" "}
          <Sponsor link={s.link} srcx={s.src} />{" "}
        </Col>
      ))}
    </Row>
  );
}

// javascript Map for sponsors end

// Prize group

function PrizeGroup(props) {
  return (
    <Row>
      {props.map((s, key) => (
        <Col key={key} className="" sm={12} lg={4} md={6}>
          <FirstPrize icon={s.icon} type={s.type} content={s.content} />
        </Col>
      ))}
    </Row>
  );
}

// Prize group ending
function TeamMembers(props) {
  return (
    <Row className="members">
      {props.map((s, k) => (
        <Col key={k} className="" sm={12} lg={4} md={4}>
          <Member info={s} />
        </Col>
      ))}
    </Row>
  );
}

function FrequentlyAsked(props) {
  return (
    <Row className="sf">
      {props.map((s, k) => (
        <Col key={k} className="" sm={12} lg={6} md={6}>
          <Accordion panels={s} />
        </Col>
      ))}
    </Row>
  );
}

export default function HomePage(props) {
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
    <div className="Whole_div" style={{backgroundImage: `url(${pattern})`}}>
      <div className="color_sectiom" id="home">
        <Container fluid>
          <Row className="Row info">
            <Col className="info-div" sm={12} lg={7} md={8}>
              <Myinfo />
            </Col>
            <Col className="d-image" sm={12} lg={5} md={4}>
              <img alt="img" src={TOP_SECTION.IMG_SRC} />
              <br />
            </Col>
          </Row>

{/*          <Row className="mediaInfo">
            <Col className="" sm={12} lg={12} md={12}>
              <Media />
            </Col>
          </Row>*/}
        </Container>
      </div>
      <Container fluid>
        {/* Logo section  */}
        <Row className=" logoSection">
          <Col className="info-div" sm={12} lg={8} md={8}>
            <LogoSectionAbout />
          </Col>
          <Col className="info-div" sm={12} lg={4} md={4}>
            <Logo />
          </Col>
        </Row>


      {/*Theme Section*/}
        <Row className="prizesection non-coding">
          <PrizeHeading type="Hackathon Themes" />
          <ThemeType/>
        </Row> 


        <Row className="prizesection">
          <PrizeHeading type="Prizes" />
          </Row> 
       <div class="row1-container">
        
        <div class="box red">
          <h2>Overall First</h2><img class="imgright" src="https://img.icons8.com/emoji/96/000000/1st-place-medal-emoji.png" alt="" />
          <p>First Overall prize will be given to a project that outstands all other submissions.</p>
        </div>

        <div class="box box-down cyan">
          <h2>Overall Second</h2><img className="imgright" src="https://img.icons8.com/emoji/96/000000/2nd-place-medal-emoji.png" alt="" />
          <p>Second Overall prize will be given to the second best project of the hackathon.</p>
        </div>

        <div class="box box-down blue">
          <h2>Overall Third</h2><img class="imgright" src="https://img.icons8.com/emoji/96/000000/3rd-place-medal-emoji.png" alt="" />
          <p>Third Overall prize will be given to the third best project of the hackathon.</p>
        </div>
      </div>
{/*      <div class="row2-container">
        <div class="box orange">
          <h2>Karma</h2>
          <p>Regularly evaluates our talent to ensure quality</p>
          <img class="imgright" src="https://assets.codepen.io/2301174/icon-karma.svg" alt="" />
        </div>
      </div>*/}
      <div class="row1-container margfromsponsor">
        <div class="box box-down color2">
          <h2>Best Women Team</h2><img class="imgright" src="https://img.icons8.com/cute-clipart/64/000000/granny-lesbian.png" alt="" />
          <p>Your project will qualify for this category if your all team members are women.</p>
        </div>

        <div class="box color1">
          <h2>Best DDU Team</h2><img class="imgright" src="https://img.icons8.com/emoji/96/000000/sports-medal-emoji.png" alt="" />
          <p>Your project will qualify for this category if your all team members are from DDU.</p>
        </div>

        <div class="box box-down orange">
          <h2>More prizes</h2><img class="imgright" src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-prizes-circus-flaticons-lineal-color-flat-icons.png" alt="" />
          <p>More prizes will be revealed soon !</p>
        </div>
      </div>


      {/*Theme end*/}

        <Birds top="200vh" left="0vh" type="" />

        {/* ********Prizes here ***** */}
{/*        <Row className="prizesection" id="prizes">
          <PrizeHeading type="Prizes" /><br/>
          <div className="prize--cards">
          {Prizeinfo.map(PrizeGroup)}
          </div>
        </Row>*/}
        {/* ********Prizes ending here ***** */}


        {/* ********Sponsors here ***** */}

        <Row className="sponsorSection" id="sponsors">
          <SponsorsHead />
          {/* <SponsorUS /> */}
          {sponsorLogos.map(SponsorGroup)}
        </Row>
        {/* ********Sponsors ending here ***** */}


        {/* ********Team here ***** */}
        {/* <h1 id="team">Mentor</h1>


        {JudgesInfo.map(TeamMembers)} */}

        <h1 id="team">Our Team</h1>
        {/* {FOOTER.JOIN_TEAM.required && (
          <JoinTeam
            placeholder="Join our team"
            formLink={FOOTER.JOIN_TEAM}
            content="Interested in joining our team"
          />
        )} */}
        {TeamInfo.map(TeamMembers)}
        {/* ********Team ending here ***** */}

        {/* ********Team ending here ***** */}
        <br/><br/>
          <h1 id="team">FAQs</h1>
          {/* ********Frequently asked Questions here ***** */}
        <div className="Myfaqs" id="faq">
          {frequentlyAskedQuestions.map(FrequentlyAsked)}
          {/* ********Frequently asked Questions ending here ***** */}
        </div>
      </Container>
      <Footer />
    </div>
  );
}
