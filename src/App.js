import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import Resume from './Components/Resume';
import Portfolio from './Components/Portfolio';
import Testimonials from './Components/Testimonials';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import {main,portfolio,resume,testimonials} from '../public/resumeData'


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      
      resumeData:{
        main: main,
        portfolio: portfolio,
        resume: resume,
        testimonials: testimonials
      }
    }
  }


  // getResumeData(){

  //   this.state = {

  //   }
  //   $.ajax({
  //     url:'http://localhost:3000/resumeData.json',
  //     dataType:'json',
  //     cache: false,
  //     success: function(data){
  //       this.setState({resumeData: data});
  //     }.bind(this),
  //     error: function(xhr, status, err){
  //       console.log(err);
  //       alert(err);
  //     }
  //   });
  // }

  // componentDidMount(){
  //   this.getResumeData();
  //  }

  render() {
    console.log(main);
    return (
      <div className="App">
        <Header data={main} />
        <About data={this.state.resumeData.main} />
        <Resume data={this.state.resumeData.resume} />
        <Portfolio data={this.state.resumeData.portfolio} />
        <Testimonials data={this.state.resumeData.testimonials} />
        <Contact data={this.state.resumeData.main} />
        <Footer />
      </div>
    );
  }
}

export default App;
