import React, { Component } from 'react';
import nose from './../img/nose.png'

class Breathing2 extends Component {
  render() {
    return (
      <div>
        <div className="curricular-square">
          <p>Nivel 2</p>
          <img src={nose} className="curricular-img"/>
          <p>Respiración</p>
        </div>
        
      </div>
    )
  }
}

export default Breathing2; 