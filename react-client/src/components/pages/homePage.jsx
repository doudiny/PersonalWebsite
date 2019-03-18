import React, { Component } from 'react';
import { ReactJS, Ruby, AngularJS, HTML, RubyOnRails, CSS, Typescript, Javascript, CSharp, Scrum, Git, DesignPattern, UML, Java, C, Prolog, Android, ReactNative, NodeJS, DotNet, Docker } from '../minisComponent/pins.jsx';
import Forml from './formComponent/form.jsx';
import FullCard from '../minisComponent/card.jsx';
import { Col, Row } from 'react-bootstrap';
import Intro from './introductionComponent/introduction.jsx';

const cardCode = "<div id='flipper'>\n" +
  " <CardFront title={this.props.titleF}\n" +
  "  subtitle={this.props.subtitleF}\n" +
  "  text={this.props.textF}/>\n" +
  " <CardBack code={this.props.code}\n" +
  "  balises={this.props.balises}/>\n" +
  "</div>";

const navCode =
  "<div id='fullcontent'>\n" +
  "  <MyNavBar/>\n" +
  "  <Route name='home'\n" +
  "    exact path='/'\n" +
  "    component={HomePage} />\n" +
  "</div>";

  const formCode = 
  "<div id='formComponent'>\n" + 
  "   <Forml/>\n" +
  "</div>"


class HomePage extends Component {
  render() {
    return (
      <div id="pageContainer">
        <div id="introContainer"><Intro /></div>
        <div id="sandboxContainer">
          <Row id="cardsRow">
            <Col id="cardsCol">
              <FullCard titleF="Cards" balises={[<ReactJS />, <HTML />, <CSS />]} subtitleF="Customized flipping cards" textF="Those cards your actually looking at, they flip when you put your mouse on it. Bootstrap and react-highlight has bees used for those and the code is on the back." code={cardCode} codelink="http://www.google.ch" />
              <FullCard titleF="Navogation Bar" balises={[<ReactJS />, <HTML />, <CSS />, <Javascript />]} subtitleF="Half-sticky Navigation Bar" textF="Look at the top bar of this website, there is the actual navigation bar I made. Bootstrap and Headroom has been used to implement this component. The code is on the back." code={navCode} codelink="http://www.google.ch"/>
              <FullCard titleF="Form" balises={[<ReactJS />, <HTML />, <CSS />, <Javascript />]} subtitleF="Message sender form" textF="Send me a message anytime by filling the form down there. The form is also responsive by using bootstrap." code={formCode} codelink="http://www.google.ch"/>
              <FullCard titleF="AAA" subtitleF="BBB" textF="CCC" code="DDD" />
              <FullCard titleF="AAA" subtitleF="BBB" textF="CCC" code="DDD" />
              <FullCard titleF="AAA" subtitleF="BBB" textF="CCC" code="DDD" />
            </Col>
          </Row>
        </div>
        <Forml />
      </div>
    )
  }
}

export default HomePage;