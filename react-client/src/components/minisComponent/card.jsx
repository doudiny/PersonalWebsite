import React, { Component } from 'react';
import { Card, Button, Col, Row } from 'react-bootstrap';
import Highlight from 'react-highlight'
import style from './card.css';
import 'highlight.js/styles/tomorrow-night.css';

class CardFront extends Component {
    render() {
        return (
            <div id="frontCardComponent">
                <Card style={{ width: '18rem' }} id="card">
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{this.props.subtitle}</Card.Subtitle>
                        <Card.Text>{this.props.text}</Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

class CardBack extends Component {
    render() {
        return (
            <div id="backCardComponent">
                <Card style={{ width: '18rem' }} id="card">
                    <Card.Body>
                        <Card.Title>Code</Card.Title>
                        <Highlight className="html" id="code">
                            {
                                this.props.code
                            }
                        </Highlight>
                        <Card.Link href={this.props.codelink}> Full code</Card.Link>
                        <div>
                            {this.props.balises}
                        </div>
                    </Card.Body>
                </Card>
            </div >
        )
    }
}

class FullCard extends Component {
    render() {
        return (
            <div id="fullCardComponent">
                <div id="flipper">
                    <CardFront title={this.props.titleF} subtitle={this.props.subtitleF} text={this.props.textF} />
                    <CardBack code={this.props.code} balises={this.props.balises} codelink={this.props.codelink} />
                </div>
            </div>
        )
    }
}

export default FullCard;