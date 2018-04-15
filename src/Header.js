import React, {Component} from 'react';
import menuIcon from './images/ic_menu_black_24px.svg';

class Header extends Component {
	constructor() {
		super();
		this.createMenuIcon = this.createMenuIcon.bind(this);
		this.createHeader = this.createHeader.bind(this);
	}

	onClickHandler() {
		this.props.toggleDrawer();
	}

	createMenuIcon() {
		return (
			<img
				className="menu-icon"
				src={menuIcon}
				alt="menu icon"
			/>
		)
	}

	createHeader() {
		return (<h1>{this.props.getSection()}</h1>)
	}

  render() {
		let className = "Header ";
		className += this.props.getDrawerState() ? "drawer-open " : "";
		className += this.props.smallHeader ? "small " : "";

    return (
      <header
				className={className}
				onClick={() => {this.onClickHandler()}}
			>
				{this.createMenuIcon()}
				{this.createHeader()}
      </header>
    );
  }
}

export default Header;
