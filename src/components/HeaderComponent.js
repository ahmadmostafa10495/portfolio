import React, { Component } from 'react';
import {Navbar, NavbarBrand, Nav, NavbarToggler, Collapse,
		NavItem, Jumbotron} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import logolight from "../images/logolight.png";
import logodark from "../images/logodark.png";
import iconlight from "../images/iconlight.ico";
import icondark from "../images/icondark.ico";

class Header extends Component {

	constructor(props) {
		super(props);
		this.state = {
			isNavOpen: false,
			isDark: false,
			darkText: "Dark",
			logo: logolight
		};
		this.toggleNav = this.toggleNav.bind(this);
		this.darkTheme = this.darkTheme.bind(this);
	}

	toggleNav() {
		this.setState({
			isNavOpen: !this.state.isNavOpen
		});
	}

  darkTheme(){
  	console.log(document.getElementById("dark-theme-btn").innerHtmn);
  	if (this.state.isDark)
  	{
	  	// this.state.isDark = false;
	  	this.setState({
			darkText: "Dark",
			isDark: !this.state.isDark,
			logo: logolight
		});
	  	document.documentElement.style.setProperty('--deeperDarkBlue', '#fff');
	  	document.documentElement.style.setProperty('--firstDarkBlue', '#fff');
	  	document.documentElement.style.setProperty('--secondDarkBlue', '#fff');
	  	document.documentElement.style.setProperty('--thirdDarkBlue', '#fff');
	  	document.documentElement.style.setProperty('--specialDarkBlue', '#919EFF');
	  	document.documentElement.style.setProperty('--text', '#000');
	  	// $("#dark-theme-btn").html("Dark");
	  	// document.getElementById("favicon").setAttribute("href","%PUBLIC_URL%/favicon.ico");
	  	// let body = document.getElementsByTagName("BODY")[0];
    // 	body.style.color = "#000"
	    let link = document.getElementById("favicon");
	    // link.type = 'image/x-icon';
	    link.rel = 'icon';
	    link.href = iconlight;
	    document.getElementsByTagName('head')[0].appendChild(link);
  	}
  	else
  	{  		
  		// this.state.isDark = true;
	  	// this.state.darkText = "Light";
	  	this.setState({
			darkText: "Light",
			isDark: !this.state.isDark,
			logo: logodark
		});
	  	document.documentElement.style.setProperty('--deeperDarkBlue', '#131524');
	  	document.documentElement.style.setProperty('--firstDarkBlue', '#191B2F');
	  	document.documentElement.style.setProperty('--secondDarkBlue', '#0F2447');
	  	document.documentElement.style.setProperty('--thirdDarkBlue', '#064169');
	  	document.documentElement.style.setProperty('--specialDarkBlue', '#0F2447');
	  	document.documentElement.style.setProperty('--text', '#fff');
	  	// $("#dark-theme-btn").html("Light");
	  	// document.getElementById("dark-theme-btn").innerHtml = "Light";
	    let link = document.getElementById("favicon");
	    // link.type = 'image/x-icon';
	    link.rel = 'icon';
	    link.href = icondark;
	    document.getElementsByTagName('head')[0].appendChild(link);
  	}

	    console.log("isDark",this.state.isDark);
    // let body = document.getElementsByTagName("BODY")[0];
    // body.style.
    // let bg = document.documentElement.style.getProperty("--firstDarkBlue")
    // if ()
    // document.documentElement.style.setProperty('--firstDarkBlue', '#fff');
    };
	render() {
		return(
			<React.Fragment>
				<Navbar dark expand="md">
					<div className="container">
						<NavbarBrand className="mr-auto"href="/">
						<img src={this.state.logo} height="70" width="70" alt="AM"/>
						</NavbarBrand>
						<NavbarToggler onClick={this.toggleNav} />
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
						 	<Nav className="ml-auto" navbar>
						 		<NavItem>
						 			<a onClick={this.darkTheme} id = "dark-theme-btn" >
						 				<span className="fa fa-adjust fa-lg"></span> {this.state.darkText}
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

						 	// <Nav className="ml-auto" navbar>
						 	// 	<NavItem>
						 	// 		<Button outline >
						 	// 			<span className="fa fa-adjust fa-lg"></span> Dark
						 	// 		</Button>
						 	// 	</NavItem>
						  // 	</Nav>
						  // 