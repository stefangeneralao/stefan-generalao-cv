import React from 'react';
import $ from 'jquery';

class SubSectionHeader extends React.Component{
  componentDidMount() {
    // Animation for the slide-effect when opening a subSection.
    $(".subsection-body").hide();
    $("#" + this.props.section.id).children(".subsection-header").click(
      function() {
        $(this).siblings(".subsection-body").slideToggle(250);
      }
    );
  }

  render() {
    return (
      <div className="subsection" id={this.props.section.id}>
        <li className="subsection-header section-list-item">
          {this.props.section.id}
        </li>
        <ul className="subsection-body">
          {this.props.subSectionsList}
        </ul>
      </div>
    );
  }
}

export default SubSectionHeader;