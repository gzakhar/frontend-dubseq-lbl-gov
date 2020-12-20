import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Navbar from '../UI/Navbar/Navbar';


class HomeScreen extends Component {

	render () {
		return (
			<Aux>
				<Navbar />
				<div>Home</div>
			</Aux>
		)
	}
}

export default HomeScreen;