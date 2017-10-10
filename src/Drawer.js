import React, {Component} from 'react';
import './App.css';

class ListItem extends Component {
  onClickHandler() {
    this.props.selectSection(this.props.label)
  }

  render() {
    let className = "";

    if (this.props.selectedSection === this.props.label) {
      className += "SelectedListItem ";
    } else {
      className += "ListItem ";
    }

    if (this.props.inset) {
      className += "Inset ";
    }

    // return (
    //   <li className={className} onClick={() => this.onClickHandler()}>
    //     <h2>{this.props.label}</h2>
    //   </li>
    // )

		return (
      <li>

      </li>
		)
  }
}

class Drawer extends Component {
  createSectionsList() {
    const sectionsList = window.storage.sections;

		console.log(sectionsList);

    const result = sectionsList.map((section) => {
      // return (
      //   <ListItem
			// 		key={section.id}
			// 		label={section.id}
			// 		selectSection={this.props.selectSection}
			// 		selectedSection={this.props.selectedSection}
			// 		inset={section.inset}>
			// 	</ListItem>
      // )

			if(section.subSections) {
				console.log(section.id + " has subSections");

				const subSectionsList = section.subSections.map(
					(subSection) => {
						return (
							<li key={subSection.id}>
								{subSection.id}
							</li>
						)
					}
				)

				return (
					<li key={section.id}>
						<ul className="collapsible" key={section.id}>
							<li>
								<div className="collapsible-header">
									{section.id}
								</div>
								<div className="collapsible-body">
									<ul>
										{subSectionsList}
									</ul>
								</div>
							</li>
						</ul>
					</li>
				)
			} else {
				console.log(section.id + " has no subSections");
				return (
					<li key={section.id}>
						{section.id}
					</li>
				)
			}
    });

		return (
			<ul>
				{result}
			</ul>
		)
  }

  render() {
    return (
      <div className="Drawer">
        {this.createSectionsList()}
      </div>
    );

    // return (
    //   <div className="Drawer">
    //     <ul className="collapsible" data-collapsible="accordion">
    //       <li>
    //         <div className="collapsible-header">First</div>
    //         <div className="collapsible-body">
    //           <span>Lorem ipsum dolor sit amet.</span>
    //         </div>
    //       </li>
    //       <li>
    //         <div className="collapsible-header">Second</div>
    //         <div className="collapsible-body">
    //           <span>Lorem ipsum dolor sit amet.</span>
    //         </div>
    //       </li>
    //       <li>
    //         <div className="collapsible-header">Third</div>
    //         <div className="collapsible-body">
    //           <span>Lorem ipsum dolor sit amet.</span>
    //         </div>
    //       </li>
    //       <li>
    //         <div className="collapsible-header">Third</div>
    //         <div className="collapsible-body">
    //           <span>Lorem ipsum dolor sit amet.</span>
    //         </div>
    //       </li>
    //       <li>
    //         <div className="collapsible-header">Third</div>
    //         <div className="collapsible-body">
    //           <span>Lorem ipsum dolor sit amet.</span>
    //         </div>
    //       </li>
    //       <li>
    //         <div className="collapsible-header">Third</div>
    //         <div className="collapsible-body">
    //           <span>Lorem ipsum dolor sit amet.</span>
    //         </div>
    //       </li>
    //       <li>
    //         <div className="collapsible-header">Third</div>
    //         <div className="collapsible-body">
    //           <span>Lorem ipsum dolor sit amet.</span>
    //         </div>
    //       </li>
    //       <li>
    //         <div className="collapsible-header">Third</div>
    //         <div className="collapsible-body">
    //           <span>Lorem ipsum dolor sit amet.</span>
    //         </div>
    //       </li>
    //       <li>
    //         <div className="collapsible-header">Third</div>
    //         <div className="collapsible-body">
    //           <span>Lorem ipsum dolor sit amet.</span>
    //         </div>
    //       </li>
    //     </ul>
    //   </div>
    // )
  }
}

export default Drawer;
