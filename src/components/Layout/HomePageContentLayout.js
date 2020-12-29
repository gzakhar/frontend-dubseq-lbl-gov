import React from 'react'


const layout = (props) => (

	<div className='container'>
		<h2>Lists</h2>
		<div class="card-deck">
			{props.rowOne}
		</div>
		<h2>LandingPages</h2>
		<div class="card-deck">
			{props.rowTwo}
		</div>
	</div>
)

export default layout;