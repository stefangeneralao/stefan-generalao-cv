import React, {Component} from 'react';
import './App.css';
import menuIcon from './images/ic_menu_black_24px.svg';

class Header extends Component {
	onClickHandler() {
		this.props.toggleDrawer();
	}

  render() {
    return (
      <div
				className="Header"
				onClick={() => {this.onClickHandler()}}
			>
				<img
					className="menu-icon"
					src={menuIcon}
					alt="menu icon"
				/>
        <h1>{this.props.selectedSection}</h1>
      </div>
    );
  }
}

export default Header;
