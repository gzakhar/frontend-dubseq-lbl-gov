import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import GraphPage from './components/GraphsPage/GraphsPage';
import HomePage from './components/Home/HomePage';
import About from './components/About/About';
import TablePage from './components/TablePage/TablePage';
import SearchPage from './components/Search/SearchPage';

class App extends Component {
	render() {
		return (
			<Router>
					<Route exact path ='/' component={HomePage}/>
					<Route path ='/graphPage' component={GraphPage}/>
					<Route path ='/about' component={About}/>
					<Route path='/listPage/:id' component={TablePage}/>
					<Route path='/search' component={SearchPage}/>
			</Router>
		);
	}
}

export default App;
