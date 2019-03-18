import React, { Component } from 'react';
import { Badge } from 'react-bootstrap';

//framework
class AngularJS extends Component {
  render() {
    return (
      <Badge variant="success">Angular JS</Badge>
    )
  }
}

class ReactJS extends Component {
  render() {
    return (
      <Badge variant="primary">React JS</Badge>
    )
  }
}

class RubyOnRails extends Component {
  render() {
    return (
      <Badge variant="danger">Ruby on Rails</Badge>
    )
  }
}

//Web languages
class HTML extends Component {
  render() {
    return (
      <Badge variant="light">HTML 5</Badge>
    )
  }
}

class CSS extends Component {
  render() {
    return (
      <Badge variant="light">CSS 3</Badge>
    )
  }
}

class Typescript extends Component {
  render() {
    return (
      <Badge variant="light">Typescript</Badge>
    )
  }
}

class Javascript extends Component {
  render() {
    return (
      <Badge variant="light">Javascript</Badge>
    )
  }
}

class Ruby extends Component {
  render() {
    return (
      <Badge variant="light">Ruby</Badge>
    )
  }
}

class CSharp extends Component {
  render() {
    return (
      <Badge variant="light">C#</Badge>
    )
  }
}

// web containers
class DotNet extends Component {
  render() {
    return (
      <Badge variant="secondary">.NET</Badge>
    )
  }
}

class NodeJS extends Component {
  render() {
    return (
      <Badge variant="success">Node JS</Badge>
    )
  }
}

//Methodology
class Git extends Component {
  render() {
    return (
      <Badge variant="info">Git</Badge>
    )
  }
}

class Scrum extends Component {
  render() {
    return (
      <Badge variant="info">Scrum</Badge>
    )
  }
}

class UML extends Component {
  render() {
    return (
      <Badge variant="info">UML</Badge>
    )
  }
}

class DesignPattern extends Component {
  render() {
    return (
      <Badge variant="info">Design Patterns</Badge>
    )
  }
}

//Programming languages
class Java extends Component {
  render() {
    return (
      <Badge variant="dark">Java</Badge>
    )
  }
}

class C extends Component {
  render() {
    return (
      <Badge variant="dark">C/C++</Badge>
    )
  }
}

class Prolog extends Component {
  render() {
    return (
      <Badge variant="dark">Prolog</Badge>
    )
  }
}

//Mobile languages
class Android extends Component {
  render() {
    return (
      <Badge variant="success">Java Android</Badge>
    )
  }
}

class ReactNative extends Component {
  render() {
    return (
      <Badge variant="primary">React Native</Badge>
    )
  }
}

// Other
class Docker extends Component {
  render() {
    return (
      <Badge variant="primary">Docker</Badge>
    )
  }
}

export {
  AngularJS,
  ReactJS,
  RubyOnRails,
  //---
  HTML,
  CSS,
  Typescript,
  Javascript,
  CSharp,
  Ruby,
  //---
  DotNet,
  NodeJS,
  //---
  Scrum,
  Git,
  DesignPattern,
  UML,
  //---
  Java,
  C,
  Prolog,
  //---
  Android,
  ReactNative,
  //---
  Docker
}