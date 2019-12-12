import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';

class App extends Component {
  render(){
  return (
    <div className="container">
        <div className="header">React Todo Application</div> 
        <div className="btn">+</div>
        <input type="text"
          ref={((input) => {this.textInput = input})} />
    </div>
  );
  }
}
export default App;
