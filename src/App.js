import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import Drawer from './Drawer.js';
import Body from './Body.js';
import Footer from './Footer.js';
import getStorage from './storage.js'

window.storage = getStorage();

// This is the main component.
class App extends Component {
  constructor() {
    super();
    this.state = {
			selectedSection: "Intro",
			drawerOpen: false
		};
		this.openDrawer = this.openDrawer.bind(this);
		this.closeDrawer = this.closeDrawer.bind(this);
		this.toggleDrawer = this.toggleDrawer.bind(this);
		this.setSection = this.setSection.bind(this);
		this.getSection = this.getSection.bind(this);
		this.handleScroll = this.handleScroll.bind(this);
  }

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	}

	handleScroll(event) {
		console.log("Scrolled")
	}

	// Function for selecting a section in the navigation.
  setSection(section) {
    this.setState({
			selectedSection: section
		});

		this.closeDrawer();

		// Scroll to top on any section change.
    window.scrollTo(0, 0);
  }

	// Function for opening the drawer.
	openDrawer() {
		this.setState({
			drawerOpen: true
		});
	}

	// Function for closing the drawer.
	closeDrawer() {
		this.setState({
			drawerOpen: false
		});
	}

	// Function for toggling the drawer.
	toggleDrawer() {
		this.setState({
			drawerOpen: !this.state.drawerOpen
		});
	}

	// Get current selected section.
	getSection() {
		return this.state.selectedSection;
	}

  render() {
    return (
      <div className="App" onScroll={() => this.handleScroll()}>
				<Drawer
					setSection={this.setSection}
					getSection={this.getSection}
					open={this.state.drawerOpen}
				/>
        <Header
					getSection={this.getSection}
					toggleDrawer={this.toggleDrawer}
					drawerOpen={this.state.drawerOpen}
				/>
        <Body
					getSection={this.getSection}
					drawerOpen={this.state.drawerOpen}
					closeDrawer={this.closeDrawer}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
