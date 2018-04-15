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
		let className = "Body ";
		className += this.props.getDrawerState() ? "drawer-open" : "";

    return (
      <main id="Body" className={className} onClick={() => {this.onClickHandler()}}>
        {this.createContent()}
      </main>
    );
  }
}

export default Body;
