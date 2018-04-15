import React, {Component} from 'react';
import $ from 'jquery';
import profileImage from './images/profile-picture-2-cropped.jpg'

// Main wrapper component for the whole drawer.
class Drawer extends Component {
	// Function handling clicks in the drawer.
  onClickHandler(sectionID) {
    this.props.setSection(sectionID);
  }

	// Returning the list of sections.
  createSectionsList() {
		// Fetching the list of sections from storage.
    const sectionsList = window.storage.sections;

    // Iterate through every section.
    const result = sectionsList.map((section) => {
			// If section has subSections, then return SubSectionHeader.
			// Else return SectionListItem.
      if (section.subSections) {

        // Create the body of the subSection.
        const subSectionsList = section.subSections.map((subSection) => {
          return (
						<SectionListItem
							isSubSection={true}
							key={subSection.id}
							setSection={this.props.setSection}
							getSection={this.props.getSection}
							id={subSection.id}
						/>
          );
        })

        // Return SubSectionHeader with header and body.
        return (
					<SubSectionHeader
						key={section.id}
						section={section}
						subSectionsList={subSectionsList}
					/>
        );
      } else {
				// Return SectionListItem.
        return (
					<SectionListItem
						key={section.id}
						setSection={this.props.setSection}
						getSection={this.props.getSection}
						id={section.id}
					/>
        );
      }
    });

    // Return sectionsList.
    return (
      <ul className="noselect">
        {result}
      </ul>
    );
  }

	// Create and return the top banner of the drawer.
	createDrawerBanner() {
		return (
			<div
				className="drawer-banner-wrapper"
				onClick={() => this.props.closeDrawer()}
			>
				<img className="profile-image" src={profileImage} alt="profile"/>
			</div>
		);
	}

	// Create and return a button linked to the pdf-version of this page.
	createExportToPDFButton() {
		const openPDF = () => {
			const newWindow = window.open();
			newWindow.location.href = '/stefan-generalao.pdf';
		}

		return (
			<ul>
				<SectionListItem
					id={"Öppna PDF-version"}
					setSection={() => openPDF()}
				/>
			</ul>
		);
	}

  render() {
		let className = "Drawer noselect";
		className += this.props.getDrawerState() ? " open" : "";

    return (
      <nav className={className}>
				{this.createDrawerBanner()}
        {this.createSectionsList()}
      </nav>
    );
  }
}

// Component for listItems in the drawer.
// Pass the attribute isSubSection={true} is this component
// should represent a subSection.
class SectionListItem extends Component {
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

// Use this component as a wrapper and header for components with subSections.
// Pass the attribute subSectionsList as a list of SectionListItems.
class SubSectionHeader extends Component{
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

export default Drawer;
