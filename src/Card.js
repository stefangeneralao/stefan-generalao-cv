import React, {Component} from 'react';
import './App.css';

class Card extends Component {
  createContent() {
    const content = this.props.content.map((item, key) => {
      const itemKey = Object.keys(item)[0]
      const itemValue = item[itemKey]
      let result;

      switch (itemKey) {
        case 'title':
          result = (<h3>{itemValue}</h3>)
          break;

        case 'divider':
          result = (<div className='Divider' />)
          break;

        case 'subtitle':
          result = (<h4>{itemValue}</h4>)
          break;

        case 'paragraph':
          result = (<p>{itemValue}</p>)
          break;

        default:
          result = (<p>{itemValue}</p>)
      }

      return (<div key={key}>{result}</div>)
    })

    return content
  }

  render() {
    return (
      <div className="Card">
        {this.createContent()}
      </div>
    );
  }
}

export default Card;
