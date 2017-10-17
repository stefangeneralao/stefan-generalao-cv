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
    this.state = {
			selectedSection: "",
			drawerOpen: true
		};
    this.selectSection = this.selectSection.bind(this);
		this.openDrawer = this.openDrawer.bind(this);
		this.closeDrawer = this.closeDrawer.bind(this);
		this.toggleDrawer = this.toggleDrawer.bind(this);
  }

  selectSection(section) {
    this.setState({
			selectedSection: section
		});

		this.closeDrawer();

		// Scroll to top on any section change.
    window.scrollTo(0, 0)
  }

	openDrawer() {
		this.setState({
			drawerOpen: true
		});
	}

	closeDrawer() {
		this.setState({
			drawerOpen: false
		});
	}

	toggleDrawer() {
		this.setState({
			drawerOpen: !this.state.drawerOpen
		});
	}

  render() {
    return (
      <div className="App">
				<Drawer
					selectSection={this.selectSection}
					selectedSection={this.state.selectedSection}
					open={this.state.drawerOpen}
				/>
        <Header
					selectedSection={this.state.selectedSection}
					toggleDrawer={this.toggleDrawer}
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
