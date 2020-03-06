import React from 'react';
import './App.css';
import Page from "./components/page"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Redirect } from 'react-router'
import Jumbotron from './components/jumbotron';



function App() {
  return (


    <Router>
      <div>
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <Jumbotron />
            )
          }} />
          <Route exact path="/browse" render={() => {
            return (<Page></Page>)

          }} />
        </Switch>
      </div>
    </Router>

  );
}

export default App;
