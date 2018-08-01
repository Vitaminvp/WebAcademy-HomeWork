import * as React from 'react';
import { render } from 'react-dom';
import { HashRouter  as Router, Route, Link } from "react-router-dom";
import { Home } from "./components/home/home.component.jsx";
import { Header } from "./components/header/header.component.jsx";
import { Footer } from "./components/footer/footer.component.jsx";
import { CallOfDuty } from "./components/callofduty/callofduty.component.jsx";
import { Slider } from "./components/slider/slider.component.jsx";


render(<Router>
          <div>
            <Header/>
            <Slider/>
            <Route exact path="/" component={ Home } />
            <Route path="/topic"  component={ CallOfDuty } />
            <Footer/>
          </div>
       </Router>, document.querySelector('.wrapper'));