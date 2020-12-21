import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = (props) => (
	<header className="navbar navbar-expnad-lg navbar-dark bg-dark">
		
		<Link to='/'>DubSeqVis</Link>
		<div>{props.title}</div>
		<Link to='/graphPage'>Graphs</Link>
		<Link to='/contact'>Contact</Link>
	</header>
)

export default Navbar;