import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import Drawer from './Drawer.js';
import Body from './Body.js';
import Footer from './Footer.js';
import getStorage from './storage.js'

window.storage = getStorage();

class App extends Component {
  constructor() {
    super();
    this.state = {selectedSection: "Intro"}
    this.selectSection = this.selectSection.bind(this);
  }

  selectSection(section) {
    this.setState({selectedSection: section});

		// Scroll to top on any section change.
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div className="App">
        <Header selectedSection={this.state.selectedSection}/>
        <Drawer
          selectSection={this.selectSection}
          selectedSection={this.state.selectedSection}
        />
        <Body
          selectedSection={this.state.selectedSection}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
