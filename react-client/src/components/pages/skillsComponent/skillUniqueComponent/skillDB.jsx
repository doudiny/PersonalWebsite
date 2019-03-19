import React, { Component } from 'react';
import { Chart } from 'primereact/chart';
import { ScrollPanel } from 'primereact/scrollpanel';
import { Col, Row } from 'react-bootstrap';
import style from './skill.css';



class SkillDB extends Component {

  render() {

    const data = {
      labels: ['MySQL', 'MSSQL', 'Oracle', 'MongoDB', 'Cassandra', 'HBase'],
      datasets: [
        {
          label: 'Database knowledge',
          backgroundColor: 'rgba(102,187,106,0.2)', //milieu des points 
          borderColor: 'rgba(102,187,106,1)', // lignes entre points
          pointBackgroundColor: 'rgba(27, 94, 32, 1)', // points
          pointBorderColor: 'rgba(27, 94, 32, 1)', // contour des points
          pointHoverBackgroundColor: 'rgba(27, 94, 32, 1)', // point quand la souris est dessus
          pointHoverBorderColor: 'rgba(27, 94, 32, 1)',  // contour des points quand la souris est dessus
          data: [80, 72, 68, 82, 58, 1]
        }
      ]
    };
    return (
      <Row id="rowSkill">
        <Col>
          <ScrollPanel style={{ width: '100%', height: '200px' }}>
            <div style={{ padding: '1em', lineHeight: '1.5' }}>
              <h2>Database (Relational and NoSQL)</h2>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
              enim ad minim veniam, quis nostrud exercitation ullamco laboris 
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
              reprehenderit in voluptate velit esse cillum dolore eu fugiat 
              nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
              sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
          </ScrollPanel>
        </Col>
        <Col>
          <Chart type="radar" data={data} id="graph" />
        </Col>
      </Row>
    )
  }
}

export default SkillDB;