import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import Layout from '../Layout/Layout';
import GenomeSVG from '../../images/genome.svg';
import GeneSVG from '../../images/gene.svg';
import ExperimentSVG from '../../images/experiment.svg';
import Card from '../UI/Card/Card';
import './HomePage.css';


class HomeScreen extends Component {

	render() {
		return (
			<Aux>
				<Header title='HomePage' />
				<Layout navbarContent={
					<ul>
						<li><Link className='link' to='/graphPage'>Graphs</Link></li>
						<li><div className='link'>About</div></li>
						<li><div className='link'>Stats</div></li>
					</ul>}
					mainContent={
						<div className='container'>
							<h2>Home</h2>
							<div className='row'>
								<div className='col'>
									<Card title='By Organism' image={GenomeSVG} body='Link to list of organisms.' />
								</div>
								<div className='col'>
									<Card title='By Experiment' image={ExperimentSVG} body='Link to list of experiments.' />
								</div>
								<div className='col'>
									<Card title='By Gene' image={GeneSVG} body='Link to list of genes.' />
								</div>
							</div>
							<div className='row'>
								<div className='col'>
									<Card title='Organims LandingPage' body='Organisms.' />
								</div>
								<div className='col'>
									<Card title='Gene LandingPage' body='Genes.' />
								</div>
							</div>
						</div>
					}
				/>
			</Aux>
		)
	}
}

export default HomeScreen;