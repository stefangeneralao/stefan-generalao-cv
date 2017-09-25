import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import Drawer from './Drawer.js';
import Body from './Body.js'

class App extends Component {
  constructor() {
    super();
    this.state = {selectedSection: "Intro"}

    this.selectSection = this.selectSection.bind(this);
  }

  selectSection(section) {
    this.setState({selectedSection: section});
  }

  render() {
    return (
      <div className="App">
        <Header selectedSection={this.state.selectedSection}/>
        <Drawer
          selectSection={this.selectSection}
          selectedSection={this.state.selectedSection}
        />
        <Body />
      </div>
    );
  }
}

export default App;
