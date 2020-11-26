import React from 'react';
import styled from "styled-components";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";

import {Intro,Questions,Result,NotFound} from "./routes/index.js";

export default function App() {
  return (
    <Wrapper>
    <Router>
     <Switch>
       <Route exact path="/" component={Intro}/>
       <Route path="/question" component={Questions}/>
       <Route path="/result" component={Result}/>
       <Route path="*" component={NotFound}/>
     </Switch>
    </Router>
    </Wrapper>
  );
}

const Wrapper=styled.div`

height:100%;
max-width: 37.5rem;
display:flex;
flex-direction:column;
font-family: 'Black Han Sans', sans-serif;

@media screen and (min-width: 769px) {
  margin-left:25rem;
  
`;
