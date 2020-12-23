import React from 'react';
import Aux from '../../hoc/Aux';
import "./Layout.css";

const layout = (props) => (

	<Aux>
		<div className='row'>
			<div className="col-sm-2">
				<div className="sidebar">
					{props.navbarContent}
				</div>

			</div>
			<div className="col-sm-10">
				<div>
					{props.graph}
				</div>
			</div>
		</div>
	</Aux>

)

export default layout;
