import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import VerticalLayout from '../../Layout/VerticalLayout';
import Header from '../../Header/Header';
import Table from '../../UI/Table/Table';



class LandingPage extends Component {



	render() {

		let firstContent = [
			{
				"gene": "recA",
				"organism": "ecoli",
				"description": "description",
				"avg_fitness": 10
			},
			{
				"gene": "recA",
				"organism": "ecoli2",
				"description": "description",
				"avg_fitness": 20
			}
		]

		let secondContent = [
			{
				"gene": "reca",
				"organism": "ecoli3",
				"description": "description",
				"avg_fitness": 30
			}
		]

		let thirdContent = [
			{
				"gene": "reca",
				"organism": "ecoli3",
				"description": "description",
				"avg_fitness": 30
			},
			{
				"gene": "reca",
				"organism": "ecoli3",
				"description": "description",
				"avg_fitness": 30
			},
			{
				"gene": "reca",
				"organism": "ecoli3",
				"description": "description",
				"avg_fitness": 30
			}
		]


		let pageContent = [
			<Table content={firstContent} title='first' />,
			<Table content={secondContent} title='second' />,
			<Table content={thirdContent} title='third' />

		]

		return (
			<Aux>
				<Header title="LandingPage" />
				<div className='container'>
					
					<VerticalLayout content={pageContent} />
				</div>
			</Aux>
		)
	}

}

export default LandingPage;