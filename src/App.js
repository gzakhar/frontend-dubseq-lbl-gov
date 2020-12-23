import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import GraphPage from './components/GraphsPage/GraphsPage';
import HomePage from './components/Home/HomePage';
import About from './components/About/About';
import HeatMap from './components/D3Components/HeatMap';

class App extends Component {
	render() {
		return (
			<Router>
					<Route exact path ='/' component={HomePage}/>
					<Route path ='/graphPage' component={GraphPage}/>
					<Route path ='/about' component={About}/>
					<Route path='/heatMap' component={HeatMap}/>
			</Router>
		);
	}
}

export default App;
