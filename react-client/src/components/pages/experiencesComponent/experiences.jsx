import React, { Component } from 'react';
import { Card } from 'primereact/card';
import { Row } from 'react-bootstrap';
import { AngularJS, HTML, CSS, Typescript } from '../../minisComponent/pins.jsx';




class Experience extends Component {

  render() {
    const headerPl = (
      <img alt="Card" src={require('./img/pl.jpg')} />
    );
    return (
      <Row>
        <Card title="Panier Local" subTitle="2018–2019" style={{ width: '300px' }} className="ui-card-shadow" header={headerPl}>
          <div>Currently, I work alongside my studies at Panier Local and help them maintain their
            web platform. I had the opportunity to work with Angular as part of an update to their
            website, which put into practice what I learned in class and familiarize myself with the
            world of work.
          </div>
          <div>
            <AngularJS /><HTML /><CSS /><Typescript />
          </div>
        </Card>
      </Row>
    )
  }
}

export default Experience;