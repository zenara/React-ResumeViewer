import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import Resume from './Components/Resume';
import Portfolio from './Components/Portfolio';
import Testomonial from './Components/Testomonial';
import Contact from './Components/Contacts';
import Footer from './Components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <About/>
        <Resume/>
        <Portfolio/>
        <Testomonial/>
        <Contact/>
        <Footer/>
      </div>
    );
  }
}

export default App;
