import React, { Component } from 'react';
import { Chart } from 'primereact/chart';
import { ScrollPanel } from 'primereact/scrollpanel';
import { Col, Row } from 'react-bootstrap';
import style from './skill.css';



class SkillWeb extends Component {

  render() {

    const data = {
      labels: ['React JS', 'Vue JS', 'Angular JS', 'Runy on rails', '.NET', 'Node JS'],
      datasets: [
        {
          label: 'Web Technologies',
          backgroundColor: 'rgba(102,187,106,0.2)', //milieu des points 
          borderColor: 'rgba(102,187,106,1)', // lignes entre points
          pointBackgroundColor: 'rgba(27, 94, 32, 1)', // points
          pointBorderColor: 'rgba(27, 94, 32, 1)', // contour des points
          pointHoverBackgroundColor: 'rgba(27, 94, 32, 1)', // point quand la souris est dessus
          pointHoverBorderColor: 'rgba(27, 94, 32, 1)',  // contour des points quand la souris est dessus
          data: [91, 27, 85, 48, 75, 88]
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
              <h2>Web technologies</h2>
              Being able to build a RESTful web api was on of the biggest requirment during my studies, because
              I took the option "information system" I had to know how to build apps in ReactJS, Ruby on rails
              and .NET (those are the framework I choose between many others like Django, Laravel and so on). <br />
              Ruby on rails interested me at first, but the "convention over configuration", which is a good idea,
              ended up repulsing me because of the "forced" way to program. <br />
              During my second year of studies, Panier Local, a small swiss company contacted me to build and maintain 
              their web platform, which was in Angular JS (2). There, Angular caught my interest, but when I had to do my 
              first project with React JS, I felt in love with that framework. That how and why I decided to do this 
              sandbox website, to try to implement my own component and learn more and more about this framework.<br/>
              During my last semester at my engineering school, I had to do a recipe website for cooks and customer, all 
              that in ASP.NET and MSSQL (docker included). This was the first time I worked with .NET and was also really 
              interesting.<br/>
              Vue JS remains the last framework I'm also interesting in. I think once I'll get tired of making this sandbox, 
              I'll try to make it again in Vue instead of React ;)
          </div>
          </ScrollPanel>
        </Col >
      </Row >
    )
  }
}

export default SkillWeb;

