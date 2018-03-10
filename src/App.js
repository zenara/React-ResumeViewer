import $ from 'jquery';
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
  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData:{}
    }
  }
  getResumeData(){
    $.ajax({
      url:'http://localhost:3000/resumeData.json',
      dataType:'json',
      cache:false,
      success: function(data){
        this.setState({resumeData: data});
      }.bind(this),
      error:function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }
  componentDidMount(){
    this.getResumeData();
  }
  render() {
    console.log(this.state.resumeData);
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
