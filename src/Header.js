import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Header extends Component {
    state = {  }
    render() { 
      return ( 
        <div>
            <img src={logo} className="App-logo" alt="logo" />
        </div> 
      );
    }
}

export default Header; 