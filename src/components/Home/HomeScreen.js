import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Navbar from '../Header/Header';


class HomeScreen extends Component {

	render () {
		return (
			<Aux>
				<Navbar title='HomePage'/>
				<div>Home</div>
			</Aux>
		)
	}
}

export default HomeScreen;