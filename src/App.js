import React, { Component } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from 'react-router-dom';

//components
import Anime from "./components/Anime";
import About from "./components/About";
import Contact from "./Contact";
import Landing from "./components/Landing";
import SeasonContainer from "./components/SeasonContainer";
import Fantasy from "./components/Fantasy";
import Comedy from "./components/Comedy";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Anime/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/landing" element={<Landing/>} />
            <Route path="/seasons" element={<SeasonContainer/>} />
            <Route path="/fantasy" element={<Fantasy/>} />
            <Route path="/comedy" element={<Comedy/>} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
