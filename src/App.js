import React, { Component } from 'react'
import { Header } from './components/Header';
import { Employee } from './components/Employee';
import { Footer } from './components/Footer';
import './App.css';

export default class App extends Component {
  render(){
    return (
      <div className="App">
        <Header />
        <Employee />
        <Footer />
      </div>
    );
  }
}

