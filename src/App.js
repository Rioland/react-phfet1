import React from "react";
import "./style.css";

import {Link} from "react-router-dom";

function HomePage(){

  return (
    <div>
       this is my home page <Link to="/about">About</Link>
      </div>
  );
}


function AboutPage(){

  return (
    <div>
       this is my About page  this is my home page <Link to="/">home</Link>
      </div>
  );
}


function contactus(){

  return (
    <div>
       this is my contact page
      </div>
  );
}

export {HomePage, contactus,AboutPage};