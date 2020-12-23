import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import './HomePage.css';


class HomeScreen extends Component {

	render() {
		return (
			<Aux>
				<Header title='HomePage' />
				<div className='container'>
					<h2>Home</h2>
					<ul>
						<li><Link to='/graphPage'>Graphs</Link></li>
						<li>by genome</li>
						<li>by condition</li>
					</ul>
				</div>
			</Aux>
		)
	}
}

export default HomeScreen;