import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { Iframe } from "mdbreact";


// components
import FixedNavbarExample from './components/headerComponent/FixedNavbarExample';
import CarouselPage from './components/pages/CarouselPage';
import Footer from './components/footerComponent/footer';
import Homepage from './components/pages/homePage';
import Products from './components/pages/products';
import IframePage from './components/pages/IframePage';
import FooterPage from './components/pages/FooterPage';



// includes


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">

      <FixedNavbarExample />

      <CarouselPage />



      <Homepage />

      <IframePage />

      <FooterPage />


      <Products />


      <Footer />

      </div>
      </Router>
    );
  }
}

export default App;
