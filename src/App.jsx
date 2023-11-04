import { Navbar } from "./components/Navbar";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Portfolio } from "./components/Portfolio";
import { Core } from "./components/Core";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Portfolio />

        <Core />
        <Switch>
          <Route path="/" exact />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
