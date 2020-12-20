import React, { Component } from 'react';
import ScoreGraph from './ScoreGraph.js'
import axios from 'axios';

export default class Controller extends Component {

  render() {
    return (
      <div className="controller">
        <ScoreGraph />
      </div>

    )
  }
}