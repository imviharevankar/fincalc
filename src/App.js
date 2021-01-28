import React from "react";

import { BrowserRouter as Router,
         Switch,
         Route
} from "react-router-dom";

import Header from "./Header";
import EMICalc from "./EMICalc";
import SIPCalc from "./SIPCalc";
import Footer from "./Footer";
import './App.css';

function App() {

  
  return (
    <Router>
      <div className="app">
        <Header />

          <Switch>
            <Route path="/sip">
              <SIPCalc />
            </Route>

            <Route path="/">
              <EMICalc />
            </Route>

          </Switch>
        <Footer />
      </div>
      
    </Router>
      
  );
}

export default App;
