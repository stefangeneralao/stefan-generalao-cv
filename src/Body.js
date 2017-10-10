import React, {Component} from 'react';
import './App.css';
import Card from './Card.js';

class Body extends Component {
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
    return (
      <div className="Body">
        {this.createContent()}
        {/* <Card
          content={[
            {title: "Card 1"},
            {divider: "full"},
            {subtitle: "Subtitle 1"},
            {paragraph: "Paragraph 1"},
            {subtitle: "Subtitle 2"},
            {paragraph: "Paragraph 2"}
          ]}
        />

        <Card
          content={[
            {title: "Card 2"},
            {divider: "full"},
            {subtitle: "Subtitle 1"},
            {paragraph: "Paragraph 1"},
            {subtitle: "Subtitle 2"},
            {paragraph: "Paragraph 2"}
          ]}
        />

        <Card
          content={[
            {title: "Card 3"},
            {divider: "full"},
            {subtitle: "Subtitle 1"},
            {paragraph: "Paragraph 1"},
            {subtitle: "Subtitle 2"},
            {paragraph: "Paragraph 2"}
          ]}
        />

        <Card
          content={[
            {title: "Card 4"},
            {divider: "full"},
            {subtitle: "Subtitle 1"},
            {paragraph: "Paragraph 1"},
            {subtitle: "Subtitle 2"},
            {paragraph: "Paragraph 2"}
          ]}
        />

        <Card
          content={[
            {title: "Card 5"},
            {divider: "full"},
            {subtitle: "Subtitle 1"},
            {paragraph: "Paragraph 1"},
            {subtitle: "Subtitle 2"},
            {paragraph: "Paragraph 2"}
          ]}
        /> */}
      </div>
    );
  }
}

export default Body;
