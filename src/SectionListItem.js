import React from 'react';

class SectionListItem extends React.Component {
  // Calls the function setSection passed from parent component.
  onClickHandler() {
    this.props.setSection(this.props.id);
  }

  isSelected() {
    return this.props.getSection() === this.props.id;
  }

  render() {
    let className = this.props.isSubSection ? "subsection-list-item " : "section-list-item ";
    className += this.isSelected() ? "active " : "";

    return (
      <div>
        <li onClick={() => {this.onClickHandler()}} className={className}>
          {this.props.id}
        </li>
      </div>
    );
  }
}

export default SectionListItem;