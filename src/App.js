import About from "./components/About";
import FAQS from "./components/FAQS";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Loader from "./components/Loader";
import ParticipationCertification from "./components/ParticipationCertification";
import Prizes from "./components/Prizes";
import Query from "./components/Query/Query";
import Schedule from "./components/Schedule";
import SpeakersAndJudges from "./components/SpeakersAndJudges";
import Sponsers from "./components/Sponsers";
import SponsersPrizes from "./components/SponsersPrizes";
import Team from "./components/Team";
import Themes from "./components/Themes";
import Tip from "./components/Tip";
import ToTop from "./components/ToTop";

function App() {
  return (
    <div className="App">
      <Loader />
      <Header />
      <div className="main">
        <Hero />
        <About />
        <Themes />
        <Schedule />
        <Prizes />
        <SponsersPrizes />
        <ParticipationCertification />
        <Sponsers />
        <Team />
        {/* <SpeakersAndJudges /> */}
        <FAQS />
        {/* <Tip /> */}
        {/* <Query /> */}
      </div>
      <Footer />
      {/* <ToTop /> */}
    </div>
  );
}

export default App;
