import Header from "./header/Header";
import Nav from "./nav/Nav";
import About from "./about/About";
import Experience from "./experience/Experience";
import Services from "./services/Services";
import Portfolio from "./portfolio/Portfolio";
import Testimonial from "./testimonial/Testimonial";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
