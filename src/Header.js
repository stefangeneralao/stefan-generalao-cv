import React, {Component} from 'react';
import './App.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <h1>{this.props.selectedSection}</h1>
      </div>
    );
  }
}

export default Header;
