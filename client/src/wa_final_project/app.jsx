import * as React from 'react';
import { render } from 'react-dom';
import { HashRouter  as Router, Route, Link } from "react-router-dom";
import { Home } from "./components/home/home.component.jsx";
import { Header } from "./components/header/header.component.jsx";
import { Footer } from "./components/footer/footer.component.jsx";
import { Topic } from "./components/topic/topic.component.jsx";



render(<Router>
          <div>
            <Header/>

            <Route exact path="/" component={ Home } />
            <Route path="/topic"  component={ Topic } />
            <Footer/>
          </div>
       </Router>, document.querySelector('.wrapper'));