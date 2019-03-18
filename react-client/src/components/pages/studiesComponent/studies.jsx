import React, { Component } from 'react';
import { Card } from 'primereact/card';
import { Col, Row } from 'react-bootstrap';



class Studies extends Component {
  render() {
    const headerHeiafr = (
      <img alt="Card" src={require('./img/heiafr.jpg')} />
    );
    const headerEmf = (
      <img alt="Card" src={require('./img/EMF.jpg')} />
    );
    const headerCoj = (
      <img alt="Card" src={require('./img/COJ.jpg')} />
    );
    return (
      <Row>
        <Card title="Heiafr" subTitle="Subtitle" style={{ width: '300px' }} className="ui-card-shadow" header={headerHeiafr}>
          <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                            quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</div>
        </Card>
        <Card title="EMF" subTitle="Subtitle" style={{ width: '300px' }} className="ui-card-shadow" header={headerEmf}>
          <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                        quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</div>
        </Card>
        <Card title="COJ" subTitle="Subtitle" style={{ width: '300px' }} className="ui-card-shadow" header={headerCoj}>
          <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                        quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</div>
        </Card>
      </Row>
    )
  }
}

export default Studies;