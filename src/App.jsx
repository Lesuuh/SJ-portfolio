import { Navbar } from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Portfolio } from "./components/Portfolio";
import { Core } from "./components/Core";
import { Testimonial } from "./components/Testimonial";
import { Design } from "./components/Design";
import { Footer } from "./components/Footer";
import { Contact } from "./components/Contact";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Core />
        <Testimonial />
        <Design />
        <Contact />
        <Footer />
        <Routes>
          <Route path="/" />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
