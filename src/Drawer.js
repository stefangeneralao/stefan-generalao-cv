import React, {Component} from 'react';
import './App.css';
import 'materialize-css'

class ListItem extends Component {
  onClickHandler() {
    this.props.selectSection(this.props.label)
  }

  render() {
  //   // If this item is selected, then highlight selection and disable onClick.
  //   if(this.props.selectedSection === this.props.label) {
  //     return (
  //       <div
  //         className="SelectedListItem"
  //       >
  //         <h2>{this.props.label}</h2>
  //       </div>
  //     )
  //   } else {
  //     return (
  //       <div
  //         className="ListItem"
  //         onClick={() => this.onClickHandler()}
  //       >
  //         <h2>{this.props.label}</h2>
  //       </div>
  //     )
  //   }
  // }

		let className = "";

		if(this.props.selectedSection === this.props.label) {
			className += "SelectedListItem ";
		} else {
			className += "ListItem ";
		}

		if(this.props.inset) {
			className += "Inset ";
		}

		return (
			<div
				className={className}
				onClick={() => this.onClickHandler()}
			>
				<h2>{this.props.label}</h2>
			</div>
		)
	}
}

class Drawer extends Component {
  // // Method to create sections list.
  // createSectionsList() {
  //   // Fetch sectionsList from storage.
  //   const sectionsList = window.storage.sections;
	//
  //   // Create list and return result.
  //   const result = sectionsList.map((section) => {
  //     // If section has subSections, then create FoldableListItem.
  //     // Else create ListItem.
  //     if(section.subSections) {
  //       return (
  //         <ListItem
  //         key={section.id}
  //         label={section.id}
  //         selectSection={this.props.selectSection}
  //         selectedSection={this.props.selectedSection}
  //         subSections={section.subSections}
  //         ></ListItem>
  //       )
  //     } else {
  //       return (
  //         <ListItem
  //         key={section.id}
  //         label={section.id}
  //         selectSection={this.props.selectSection}
  //         selectedSection={this.props.selectedSection}
  //         ></ListItem>
  //       )
  //     }
  //   });
	//
  //   return result;
  // }

	createSectionsList() {
		const sectionsList = window.storage.sections;

		const result = sectionsList.map((section) => {
			return (
				<ListItem
					key={section.id}
					label={section.id}
          selectSection={this.props.selectSection}
          selectedSection={this.props.selectedSection}
					inset={section.inset}
				></ListItem>
			)
		});

		return result;
	}

  render() {
    return (
      <div className="Drawer">
        {this.createSectionsList()}
      </div>
    );
  }
}

export default Drawer;
