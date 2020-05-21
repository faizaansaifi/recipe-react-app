import React, { Component } from 'react';
import './app.css';
import './styles/common.scss'

import Header from "./component/Header";
import Footer from "./component/Footer";


class App extends Component {
  render(){
    return (
        <div className="App">
            <Header />
            <Footer />
        </div>
    );
  }
}

export default App;
