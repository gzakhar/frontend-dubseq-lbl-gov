import React from 'react'

const PageLayout = (props) => {
	let Navbar, Content = props;

	return (
		<div>
			<Navbar></Navbar>
			<Content></Content>
		</div>
	)
}

export default PageLayout;