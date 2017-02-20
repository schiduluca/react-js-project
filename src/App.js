import React, { Component } from 'react';
import './css/App.css';
import Header from './components/Header.js';
import Main from './components/Main.js';
import 'react-flex/index.css';
import './css/bootstrap/css/bootstrap.css';



class App extends Component {

    constructor(props) {
        super(props);

    }


    render() {
        return (
          <div className="App">
              <Header/>
              <Main />
          </div>
        );
    }
}


export default App;
