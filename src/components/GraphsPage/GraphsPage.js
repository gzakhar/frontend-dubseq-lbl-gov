import React, { Component } from 'react';
import ScoreGraph from '../D3/ScoreGraph.js';
import Navbar from '../Header/Header';
import Aux from '../../hoc/Aux';
import PageLayout from './../UI/PageLayout/PageLayout';

class GraphsPage extends Component {

	render() {
		return (
			<Aux>
				<Navbar title='Graphs'/>
				<ScoreGraph /> 
			</Aux>
		)
	}

	navbar(){
		return (
			<ul>
				<li>first</li>
				<li>second</li>
			</ul>
		)
	}

}

export default GraphsPage;