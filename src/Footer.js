import React, {Component} from 'react';

class Footer extends Component {
  render() {
		let className = "Footer ";
		className += this.props.getDrawerState() ? "drawer-open" : "";

    return (
      <div className={className}>
          <p>Stefan Generalao</p>
          <p><a href="mailto:stefan.generalao@gmail.com"> stefan.generalao@gmail.com</a></p>
          <p>0768720573</p>
      </div>
    );
  }
}

export default Footer;
