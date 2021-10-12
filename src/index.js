import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import {HomePage,contactus,AboutPage} from "./App";




ReactDOM.render(
  <Router>
     
    <Switch>
    <Route exact path="/" component={HomePage}/>
    <Route exact path="/about" component={AboutPage} />
    <Route exact path="/contact" component={contactus} />
      </Switch>

  </Router>

  
  
  
  , document.getElementById("root"));
