import React from 'react'


const card = (props) => (

	<div class="card">
		<div className='container'>
			<h5 class="card-title">{props.title}</h5>
			<div className='img'>
				{props.image == null ? <div>"def img"</div> : <img className="card-img-top" src={props.image} alt="Card cap" />}
			</div>
			<div class="card-body">
				<div className='card-text'>{props.body}</div>
			</div>
		</div>
	</div>

)

export default card;