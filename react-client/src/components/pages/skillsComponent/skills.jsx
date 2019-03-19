import React, { Component } from 'react';
import { Fade } from 'react-bootstrap';
import SkillWeb from './skillUniqueComponent/skillWeb.jsx';
import SkillMobile from './skillUniqueComponent/skillMobile.jsx';
import SkillDB from './skillUniqueComponent/skillDB.jsx';



class Skills extends Component {

  render() {
    return (
      <div>
        <Fade bottom >
          <SkillWeb/>
        </Fade>
        <Fade bottom >
          <SkillDB/>
        </Fade>
        <Fade bottom >
          <SkillMobile/>
        </Fade>
        in devlopment, more to come...
      </div>
    )
  }
}

export default Skills;