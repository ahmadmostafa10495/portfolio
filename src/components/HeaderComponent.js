import React, { Component } from 'react';
import {Navbar, NavbarBrand, Nav, NavbarToggler, Collapse,
		NavItem, Jumbotron, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

	constructor(props) {
		super(props);
		this.state = {
			isNavOpen: false
		};
		this.toggleNav = this.toggleNav.bind(this);
	}

	toggleNav() {
		this.setState({
			isNavOpen: !this.state.isNavOpen
		});
	}

	render() {
		return(
			<React.Fragment>
				<Navbar dark expand="md">
					<div className="container">
						<NavbarToggler onClick={this.toggleNav} />
						<NavbarBrand className="mr-auto"href="/">
						<img src="/Images/logoAM.png" height="70" width="70" alt="AM"/>
						</NavbarBrand>
						<Collapse isOpen={this.state.isNavOpen} navbar>
						  	<Nav navbar className="ml-auto">
							  	<NavItem>
							  		<NavLink className="nav-link" to="/home">
							  			<span className="fa fa-home fa-lg"></span> Home
							  		</NavLink>
							  	</NavItem>
							  	<NavItem>
							  		<a className="nav-link" href="/home#about">
							  			<span className="fa fa-info fa-lg"></span> About
							  		</a>
							  	</NavItem>
							  	<NavItem>
							  		<a className="nav-link" href="/home#projects">
							  			<span className="fa fa-list fa-lg"></span> Projects
							  		</a>
							  	</NavItem>
							  	<NavItem>
							  		<a className="nav-link" href="/home#contact">
							  			<span className="fa fa-address-card fa-lg"></span> Contact
							  		</a>
							  	</NavItem>
						  	</Nav>
						</Collapse>
					</div>
				</Navbar>
		        <Jumbotron>
		        	<div className="container">
		        		<div className="row row-header">
		        			<div className="col-12">
		                       <h1>Ahmed Moustafa</h1>
		                       <p>I take inspiration from the world's remarkable artists, to create a unique user experience. My one of a kind creations will tickle your neuro optical senses!</p>
		        			</div>
		        		</div>
		        	</div>
		        </Jumbotron>
			</React.Fragment>
		);
	}

}


export default Header;
/*
						 	<Nav className="ml-auto" navbar>
						 		<NavItem>
						 			<Button outline >
						 				<span className="fa fa-adjust fa-lg"></span> Dark
						 			</Button>
						 		</NavItem>
						  	</Nav>
						  */