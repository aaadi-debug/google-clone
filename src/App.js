import React from "react";
import './App.css';
import Home from './pages/Home';
import SearchPage from "./SearchPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route path="/search">
            <SearchPage />
          </Route>

          <Route path="/">
            <Home />
          </Route>
          
        </Switch>
      </Router>
      {/* <h1>Hey Clever Programmer Fam, let's bulid the Google clone 🚀! </h1> */}

    </div>
  );
}

export default App;
