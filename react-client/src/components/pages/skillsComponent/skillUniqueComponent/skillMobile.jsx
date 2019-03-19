import React, { Component } from 'react';
import { Chart } from 'primereact/chart';
import { ScrollPanel } from 'primereact/scrollpanel';
import { Col, Row } from 'react-bootstrap';
import style from './skill.css';



class SkillMobile extends Component {

  render() {

    const data = {
      labels: ['React Native', 'Java Andoid', 'Xamarin', 'Ionic', 'Adobe PhoneGap', 'Swift'],
      datasets: [
        {
          label: 'Mobile development',
          backgroundColor: 'rgba(102,187,106,0.2)', //milieu des points 
          borderColor: 'rgba(102,187,106,1)', // lignes entre points
          pointBackgroundColor: 'rgba(27, 94, 32, 1)', // points
          pointBorderColor: 'rgba(27, 94, 32, 1)', // contour des points
          pointHoverBackgroundColor: 'rgba(27, 94, 32, 1)', // point quand la souris est dessus
          pointHoverBorderColor: 'rgba(27, 94, 32, 1)',  // contour des points quand la souris est dessus
          data: [65, 85, 13, 35, 0, 15]
        }
      ]
    };
    return (
      <Row id="rowSkill">
        <Col>
          <Chart type="radar" data={data} id="graph" />
        </Col>
        <Col>
          <ScrollPanel style={{ width: '100%', height: '200px' }}>
            <div style={{ padding: '1em', lineHeight: '1.5' }}>
              <h2>Mobile development</h2>
              During my studies, i've been through smalls projects in Java Android, the helped me to learning
              how to build application on a native android device. Once React JS caught my interest, I've also
              tried to use React native next to my studies to discover the differences with JS. Swift and Adobe
              PhoneGap never caught my attention though. <br />
              During my first semester projet in my last year of studies, I had to implement a monitoring app for
              Android. During this projet I did multiple test with Xamarin and Ionic to try it out. But I ended up
              implementing my projet in Java Android.
          </div>
          </ScrollPanel>
        </Col>
      </Row>
    )
  }
}

export default SkillMobile;