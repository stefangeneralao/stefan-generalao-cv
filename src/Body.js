import React, {Component} from 'react';
import './App.css';
import Card from './Card.js';

class Body extends Component {
	onClickHandler() {
		this.props.closeDrawer();
	}

  createContent() {
    const cards = [];
    window.storage.cards.forEach((card, index) => {
      if(card.section === this.props.selectedSection) {
        cards.push(<Card content={card.content} key={index}/>);
      }
    });

    return (
      <div>
        {cards}
      </div>
    )
  }

  render() {
		const className = this.props.drawerOpen ? "Body drawer-open" : "Body"

    return (
      <div className={className} onClick={() => {this.onClickHandler()}}>
        {this.createContent()}
      </div>
    );
  }
}

export default Body;
