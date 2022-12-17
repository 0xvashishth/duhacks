import About from "./Components/About";
import BackToTop from "./Components/BackToTop";
import Blog from "./Components/Blog";
import Contact from "./Components/Contact";
import Counter from "./Components/Counter";
import FAQS from "./Components/FAQS";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Prize from "./Components/Prize";
import Query from "./Components/Query/Query";
import Schedule from "./Components/Schedule";
import Sponsers from "./Components/Sponsers";
import Video from "./Components/Video";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Video />
      <Prize />
      <Counter />
      <Schedule />
      <Blog />
      <Sponsers />
      <FAQS />
      <Contact />
      <Query />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
