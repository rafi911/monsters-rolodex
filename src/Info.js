import React, { Component } from 'react';

class Info extends Component {
    state = {  }
    render() { 
      return ( 
        <div>
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hi Rafi, Learn React
            </a>
        </div> 
      );
    }
  }

  export default Info;