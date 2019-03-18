import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

class Intro extends Component {
    render() {
        return (
            <div >
                <Card id="introComponent">
                    <Card.Body>
                        <Card.Title>Yann's Sandbox</Card.Title>
                        <Card.Text>
                            Welcom in my sanbox website. Here I put all my component I implement and sutfff..
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default Intro;