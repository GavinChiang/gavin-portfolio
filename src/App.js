import React, {
  Component
} from 'react';
import './freelancer.css';
import Header from './Header.js';
import About from './About.js';
import Footer from './Footer.js';
import Contact from './Contact.js';
import Portfolio from './Portfolio.js'
import Navbar from './Navbar.js'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <Portfolio />
        <About />
        <Footer />
      </div>
    );
  }
}

export default App;

/*
navbar
headr
skills
self intro
projects
contactme
footer
cv
*/

/* <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */