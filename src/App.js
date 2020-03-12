import React from 'react';
import './App.css';
import Page from "./components/page"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Jumbotron from './components/jumbotron';
import Nav from "./components/nav"
import SideNav from "./components/sideNav"
import About from "./components/about"
function App() {
  return (
    <div className="all-page">
      <Router>
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <>
                <SideNav></SideNav>
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
