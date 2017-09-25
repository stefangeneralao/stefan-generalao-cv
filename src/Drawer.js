import React, {Component} from 'react';
import './App.css';

class ListItem extends Component {
  onClickHandler() {
    this.props.selectSection(this.props.label)
  }

  render() {
    return (
      <div
        className="ListItem"
        onClick={() => this.onClickHandler()}
      >
        <h2>{this.props.label}</h2>
      </div>
    )
  }
}

class Drawer extends Component {
  render() {
    return (
      <div className="Drawer">
        <ListItem label="Intro" selectSection={this.props.selectSection}></ListItem>
        <div className="Divider" />

        <ListItem label="Avslutade högskolekurser" selectSection={this.props.selectSection}></ListItem>
        <div className="Divider" />

        <ListItem label="Skickligheter" selectSection={this.props.selectSection}></ListItem>
        <div className="Divider" />

        <ListItem label="Arbetslivserfarenhet" selectSection={this.props.selectSection}></ListItem>
        <div className="Divider" />

      </div>
    );
  }
}

export default Drawer;
