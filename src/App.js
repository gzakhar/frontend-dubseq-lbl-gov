import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ScoreGraph from './ScoreGraph';
import HomeScreen from './components/Home/HomeScreen';

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Route exact path ='/' component={HomeScreen}/>
					<Route path ='/scoreGraph' component={ScoreGraph}/>
				</div>
			</Router>
		);
	}
}

export default App;
