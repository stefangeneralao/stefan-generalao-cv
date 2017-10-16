import React, {Component} from 'react';
import './App.css';
import $ from 'jquery';

class SubSectionListItem extends Component {
  onClickHandler() {
    this.props.selectSection(this.props.id)
  }

	isSelected() {
		if(this.props.selectedSection === this.props.id) {
			return true;
		} else {
			return false;
		}
	}

	render() {
		let className = "subsection-list-item";
		if(this.isSelected()) {
			className += " active";
		}

		return (
			<li onClick={() => {this.onClickHandler()}} className={className}>
				{this.props.id}
			</li>
		)
	}
}

class SectionListItem extends Component {
  onClickHandler() {
    this.props.selectSection(this.props.id)
  }

	isSelected() {
		if(this.props.selectedSection === this.props.id) {
			return true;
		} else {
			return false;
		}
	}

	render() {
		let className = "section-list-item";
		if(this.isSelected()) {
			className += " active";
		}

		return (
			<li onClick={() => {this.onClickHandler()}} className={className}>
				{this.props.id}
			</li>
		)
	}
}

class SubSection extends Component{
	componentDidMount() {
		$(".subsection-body").hide();
    $("#" + this.props.section.id).children(".subsection-header").click(function() {
			$(this).siblings(".subsection-body").slideToggle(250);
    });
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
		)
	}
}

class Drawer extends Component {
  onClickHandler(sectionID) {
    this.props.selectSection(sectionID)
  }

  createSectionsList() {
    const sectionsList = window.storage.sections;

    // Iterate through every section.
    const result = sectionsList.map((section) => {

      // If section has subSections,
      // Then create a collapsible listItem.
      if (section.subSections) {

        // Create the list of subSections.
        const subSectionsList = section.subSections.map((subSection) => {
          return (
						<SubSectionListItem
							key={subSection.id}
							selectSection={this.props.selectSection}
							selectedSection={this.props.selectedSection}
							id={subSection.id}
						/>
          )
        })

        // Return collapsible SubSection-component.
        return (
					<SubSection
						key={section.id}
						section={section}
						subSectionsList={subSectionsList}
					/>
        )

        // If section has no subSections,
        // Then create listItem.
      } else {
        return (
					<SectionListItem
						key={section.id}
						selectSection={this.props.selectSection}
						selectedSection={this.props.selectedSection}
						id={section.id}
					/>
        )
      }
    });

    // Return sectionsList.
    return (
      <ul className="noselect">
        {result}
      </ul>
    )
  }

  render() {
		const width = this.props.open ? "100%" : "";

    return (
      <div className="Drawer" style={{width: width}}>
        {this.createSectionsList()}
      </div>
    );
  }
}

export default Drawer;
