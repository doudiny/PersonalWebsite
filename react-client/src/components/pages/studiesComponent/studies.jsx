import React, { Component } from 'react';
import { Card } from 'primereact/card';
import { Row } from 'react-bootstrap';



class Studies extends Component {
  render() {
    const headerHeiafr = (
      <img alt="Card" src={require('./img/heiafr.jpg')} />
    );
    const headerEmf = (
      <img alt="Card" src={require('./img/EMF.jpg')} />
    );
    const headerEf = (
      <img alt="Card" src={require('./img/EF.jpg')} />
    );
    return (
      <Row>
        <Card title="Heiafr - Switzerland" subTitle="2016–2019" style={{ width: '300px' }} className="ui-card-shadow" header={headerHeiafr}>
          <div>Bachelor degree in IT development, specialized in web development (fullstack). It's also during this studies that I've learn structur algotithms, 
            mobile development, bash scripting, and many more.
          </div>
                            
        </Card>
        <Card title="EF - United-Stated" subTitle="2015–2016" style={{ width: '300px' }} className="ui-card-shadow" header={headerEf}>
          <div>I've spend a year in Santa Barbara in purpose to learn english.</div>
        </Card>
        <Card title="EMF - Switzerland" subTitle="2010–2015" style={{ width: '300px' }} className="ui-card-shadow" header={headerEmf}>
          <div>Without really knowing much about IT, I've started this school by thinking it would make me a game designer. I was wrong but 
            I've discovered the world of programming in there, and I never left it.
          </div>
        </Card>
        
      </Row>
    )
  }
}

export default Studies;