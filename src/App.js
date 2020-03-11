import React from 'react';
import './App.css';
import Page from "./components/page"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Redirect } from 'react-router'
import Jumbotron from './components/jumbotron';
import Nav from "./components/nav"
import About from "./components/about"
function App() {
  return (
    <div className="all-page">
      <Router>

        <Switch>
          <Route exact path="/" render={() => {
            return (
              <>
                <Nav></Nav>
                <Jumbotron />
              </>
            )
          }} />

          <Route exact path="/browse" render={() => {
            return (

              <>
                <Nav></Nav>
                <Page></Page>
              </>
            )

          }} />

          <Route exact path="/about" render={() => {
            return (<About></About>)

          }} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
