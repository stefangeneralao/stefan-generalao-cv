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
          result = (<h2>{itemValue}</h2>)
          break;

        case 'divider':
          result = (<div className='Divider' />)
          break;

        case 'subtitle':
          result = (<h3>{itemValue}</h3>)
          break;

        case 'paragraph':
          result = (<p>{itemValue}</p>)
          break;

				case 'progressbar':
					result = (
						<div className="progressbar">
							<div className="progress" style={{width: itemValue + "%"}}/>
						</div>
					)
					break;

				case 'link':
					console.log(itemValue);
					result = (
						<a href={itemValue} target="blank"><p>{itemValue}</p></a>
					)
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
