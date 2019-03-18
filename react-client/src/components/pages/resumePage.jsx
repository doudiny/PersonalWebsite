import React, { Component } from 'react';
import Studies from './studiesComponent/studies.jsx';
import { TabView, TabPanel } from 'primereact/tabview';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import style from './pages.css';
import Experience from './experiencesComponent/experiences.jsx';
import Skills from './skillsComponent/skills.jsx';
import { Col, Row } from 'react-bootstrap';

class ResumePage extends Component {
  render() {
    return (
      <div id="resumeContainer">
      
        <TabView id="resumeTable">
          <TabPanel header="Studies">
            <Studies />
          </TabPanel>
          <TabPanel header="Experiences">
            <Experience />
          </TabPanel>
          <TabPanel header="Skills">
            <Skills />
          </TabPanel>
        </TabView>
      </div>
    )
  }
}

export default ResumePage;