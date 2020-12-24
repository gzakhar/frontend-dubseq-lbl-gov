import React, { Component } from 'react';
import Header from '../Header/Header';
import { useTable } from 'react-table'
import Aux from '../../hoc/Aux';

class TablePage extends Component {

	render() {

		let columns = [
			{
				Header: 'First Name',
				accessor: 'firstName',
			},
			{
				Header: 'Last Name',
				accessor: 'lastName',
			},
		]

		let data = [
			{firstName: 'geogre',
			lastName: 'zakharov'}
		]




		return (
			<Aux>
				<Header title="TablePage" />
				<Table columns={columns} data={data} />
			</Aux>
		)
	}
}


export default TablePage;