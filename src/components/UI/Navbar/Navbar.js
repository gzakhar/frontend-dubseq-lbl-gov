import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => (
	<nav className="navbar navbar-expnad-lg navbar-dark bg-dark">
		<Link to='/'>Home</Link>
		<Link to='/scoreGraph'>Score</Link>
	</nav>
)

export default Navbar;