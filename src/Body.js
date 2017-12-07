import React, {Component} from 'react';
import Card from './Card.js';

class Body extends Component {
	onClickHandler() {
		this.props.closeDrawer();
	}

  createContent() {
    const cards = [];
    window.storage.cards.forEach((card, index) => {
      if(card.section === this.props.getSection()) {
        cards.push(<Card content={card.content} key={index}/>);
      }
    });

    return (
      <div className="Cards">
        {cards}
      </div>
    );
  }

  render() {
		const className = this.props.drawerOpen ? "Body drawer-open" : "Body";

    return (
      <div id="Body" className={className} onClick={() => {this.onClickHandler()}}>
        {this.createContent()}
      </div>
    );
  }
}

export default Body;
