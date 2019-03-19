import React, {Component} from 'react';
import profileImage from './images/profile-picture-2-cropped.jpg'
import SectionListItem from './SectionListItem';
import SubSectionHeader from './SubSectionHeader';
class Drawer extends Component {
  onClickHandler(sectionID) {
    this.props.setSection(sectionID);
  }

  createSectionsList() {
    const sectionsList = window.storage.sections;

    const result = sectionsList.map((section) => {
      if (section.subSections) {

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

        return (
          <SubSectionHeader
            key={section.id}
            section={section}
            subSectionsList={subSectionsList}
          />
        );
      } else {
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

    return (
      <ul className="noselect">
        {result}
      </ul>
    );
  }

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

export default Drawer;
