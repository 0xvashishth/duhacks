import About from './components/About';
import BackToTop from './components/BackToTop';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Counter from './components/Counter';
import FAQS from './components/FAQS';
import Footer from './components/Footer';
import Header from './components/Header';
import Info from './components/Info';
import Prize from './components/Prize';
import Query from './components/Query/Query';
import Schedule from './components/Schedule';
import Sponsers from './components/Sponsers';
import Video from './components/Video';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Video />
      <Info />
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
