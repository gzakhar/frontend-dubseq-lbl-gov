import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import GraphPage from './components/GraphsPage/GraphsPage';
import HomeScreen from './components/Home/HomeScreen';

class App extends Component {
	render() {
		return (
			<Router>
					<Route exact path ='/' component={HomeScreen}/>
					<Route path ='/graphPage' component={GraphPage}/>
			</Router>
		);
	}
}

export default App;
