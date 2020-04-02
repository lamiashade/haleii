import React from 'react';
import './App.css';

import Home from "./pages/Home"
import Services from './pages/Services'
import Footer from './components/Footer'
import Navbar from "./components/Navbar"
import Error from "./pages/Error"

import { BrowserRouter, Route, Switch } from "react-router-dom"



function App () {
  return (
    <React.Fragment>
      <Navbar />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/services" component={Services} />
            <Route component={Error} />
          </Switch>
        </BrowserRouter>
      <Footer />
    </React.Fragment>
  );
}

export default App;