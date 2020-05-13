import React from 'react';
import { Media } from 'reactstrap';
import { Progress } from 'reactstrap';
// import { Loading } from './LoadingComponent';
import Ahmed from '../images/AhmedMoustafa.jpg'


function About() {

	return( 	
		<div>
            <h3 className="section-title">About</h3>
            <hr />
			<Media>
		      <Media body className="">
		      	<Media id="profile-img-section">
	        		<Media  className="profile-img" object src={Ahmed} alt={"Ahmed Moustafa"}/>	
	        	</Media>
		    	<Media id="profile-desc-section">
			        <Media heading className="title">{"Ahmed Moustafa"}</Media>
			        <p className="title">{"Software Engineer"}</p>
			        <p>{"Hi, I'm Ahmed and I live in Egypt, I love everything that has to do with programming, I always want to learn new stuff about different tech fields, I believe that one should learn one thing about everything and everything about one thing, and finally 'You are who YOU believe you are'."}</p>
		        </Media>
	      	  </Media>

		    </Media>
			<h3 className="section-title">Education</h3>
            <hr />
            <div>
            	<div className="m-5">
            		 <h5 className="section-title">AinShams University</h5>
            		 <h6 className="section-title"> Faculty Of Engineering, Computer And Systems Major | Sep 2014—Jul 2019</h6>
            		 <p>During my collage years, I have gained robust experience in various computer engineering domains. I had the chance to work in Embedded Systems, Desktop applications, Web applications, Game development, Mobile applications and Image processing. I am familiar with Python, OpenCV, C, TIVA-C, AVR, Autosar, JavaScript, Bootstrap, ReactJs and many more. I have been involved in many development roles for startups inside and outside Egypt; From low-level C programming language to high level C++, Java, to C#, and Python; I also have experienced through many projects based on HTML, CSS, Js, ReactJs.</p>
            	</div>            
            </div>

            <h3 className="section-title">Skills</h3>
            <hr />
		    <div className="skills-div-wrapper">
			    <div className="skills-div">
			    	<div className="mx-3 d-flex">
			    		<p className="progress-skill-name">Html</p>
				    	<div className="progress-bar-width">
				      		<Progress animated color="info" value={80}/>		    	
					    </div>
			    	</div>
			    	<div className="mx-3 d-flex">
			    		<p className="progress-skill-name">JavaScript</p>
				    	<div className="progress-bar-width">
				      		<Progress animated color="info" value={60}/>		    	
					    </div>
			    	</div>
			    	<div className="mx-3 d-flex">
			    		<p className="progress-skill-name">Css</p>
				    	<div className="progress-bar-width">
				      		<Progress animated color="info" value={50}/>		    	
					    </div>
			    	</div>
			    	<div className="mx-3 d-flex">
			    		<p className="progress-skill-name">ReactJs</p>
				    	<div className="progress-bar-width">
				      		<Progress animated color="info" value={60}/>		    	
					    </div>
			    	</div>
			    	<div className="mx-3 d-flex">
			    		<p className="progress-skill-name">C</p>
				    	<div className="progress-bar-width">
				      		<Progress animated color="info" value={90}/>		    	
					    </div>
			    	</div>
			    	<div className="mx-3 d-flex">
			    		<p className="progress-skill-name">Python</p>
				    	<div className="progress-bar-width">
				      		<Progress animated color="info" value={85}/>		    	
					    </div>
			    	</div>
			    	<div className="mx-3 d-flex">
			    		<p className="progress-skill-name">C++</p>
				    	<div className="progress-bar-width">
				      		<Progress animated color="info" value={60}/>		    	
					    </div>
			    	</div>
			    	<div className="mx-3 d-flex">
			    		<p className="progress-skill-name">Java</p>
				    	<div className="progress-bar-width">
				      		<Progress animated color="info" value={70}/>		    	
					    </div>
			    	</div>	
			    	<div className="mx-3 d-flex">
			    		<p className="progress-skill-name">C#</p>
				    	<div className="progress-bar-width">
				      		<Progress animated color="info" value={40}/>		    	
					    </div>
			    	</div>
			    	<div className="mx-3 d-flex">
			    		<p className="progress-skill-name">Testing</p>
				    	<div className="progress-bar-width">
				      		<Progress animated color="info" value={40}/>		    	
					    </div>
			    	</div>
			    	<div className="mx-3 d-flex">
			    		<p className="progress-skill-name">OOP</p>
				    	<div className="progress-bar-width">
				      		<Progress animated color="info" value={60}/>		    	
					    </div>
			    	</div>
			    	<div className="mx-3 d-flex">
			    		<p className="progress-skill-name">Emb. Sys. SW.</p>
				    	<div className="progress-bar-width">
				      		<Progress animated color="info" value={90}/>		    	
					    </div>
			    	</div>
				</div>
			</div>

            <h3 className="section-title">Experience</h3>
            <hr />
            <div>
            	<div className="m-5">
            		 <h5 className="section-title">Sprints</h5>
            		 <h6 className="section-title"> Embedded Software Engineer | Nov 2019—Feb 2020</h6>
            		 <p>Project based automotive embedded software training.<br />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            	</div>
            	<div className="m-5">
            		 <h5 className="section-title">AinShams University Faculty Of Engineering</h5>
            		 <h6 className="section-title"> Teaching Assistant | Sep 2019—Jan 2020</h6>
            		 <p>Helped in teaching embedded networking course.<br />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            	</div>
            	<div className="m-5">
            		 <h5 className="section-title">4DEVE</h5>
            		 <h6 className="section-title"> Unity3D Developer | Sep 2018—Nov 2018</h6>
            		 <p>Worked on development of "WAHATY" game, Available on app store/google play.<br />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            	</div>
            	<div className="m-5">
            		 <h5 className="section-title">DellEMC</h5>
            		 <h6 className="section-title"> Trainee | Jan 2019</h6>
            		 <p>Intensive IOT training.<br />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            	</div>
            
            </div>
            <h3 className="section-title">Volunteering</h3>
            <hr />
            <div>
            	<div className="m-5">
            		 <h5 className="section-title">AIESEC India</h5>
            		 <h6 className="section-title"> Global Citizen | Jun 2015—Aug 2015</h6>
            		 <p>Teaching and interacting with more than 5000 of India's students, leaving them with a whole lot of information about Egypt and the Egyptain culture.<br />AIESEC is the world's leading youth leadership development organization. Developing the potential of young people across 120 countries and territories.</p>
            	</div>
            	<div className="m-5">
            		 <h5 className="section-title">AIESEC Egypt</h5>
            		 <h6 className="section-title"> Finance & Legalities Team Leader | Feb 2018—Aug 2018</h6>
            		 <p>I was responsible for contracts and finantial issues in my local committee.<br />AIESEC is the world's leading youth leadership development organization. Developing the potential of young people across 120 countries and territories.</p>
            	</div>
            	<div className="m-5">
            		 <h5 className="section-title">Catalysis</h5>
            		 <h6 className="section-title"> Academic Committee Vice Head | Sep 2017—Jun 2018</h6>
            		 <p>I was responsible for leading and training my team to create a science fair in our collage.<br />Catalysis is the first student activity in the credit hours engineering program in Ain Shams University, aiming to develop students scientifically and increase their awareness, and working on applying science and using it to the best of our country.</p>            	
            	</div>
            	<div className="m-5">
            		 <h5 className="section-title">APEC</h5>
            		 <h6 className="section-title"> Public Relations Representative | Jan 2016—Jun 2016</h6>
            		 <p>I was responsible for social media marking and offline representation of our student activity.<br />APEC (short for Associative Power Engineering Community), is a Non-profit organization headquartered at Faculty of Engineering, Ain Shams University, In cooperation with leading multinational industrial companies APEC offers free technical courses, visits & summer training opportunities for undergraduates besides many other events.</p>            	            	
            	</div>
            	<div className="m-5">
            		 <h5 className="section-title">Catalysis</h5>
            		 <h6 className="section-title"> Human Resources Specialist | Sep 2015—Jun 2016</h6>
            		 <p>I was responsible for organisation development and conducting interviews for those who want to join us.<br />Catalysis is the first student activity in the credit hours engineering program in Ain Shams University, aiming to develop students scientifically and increase their awareness, and working on applying science and using it to the best of our country.</p>            	            	
            	</div>
            	<div className="m-5">
            		 <h5 className="section-title">Arabesque</h5>
            		 <h6 className="section-title"> Choreographer | Jan 2018—Apr 2018</h6>
            		 <p>I was part of a contemporary dancing group, we performed on our university's theater infront of 2000+ people.<br />Arabesque is a student activity aims at helping students to increase their awareness, discover their talents and accepting others. Also motivate them to play a vital role in developing their society using all their positive potentials.</p>            	            	
            	</div>
            </div>	
            <h3 className="section-title">Certificates</h3>
            <hr />
            <div>
            	<div className="m-5">
            		 <h5 className="section-title">Front-End Web UI Frameworks and Tools: Bootstrap 4</h5>
            		 <h6 className="section-title">The Hong Kong University of Science and Technology</h6>
            	</div>
            	<div className="m-5">
            		 <h5 className="section-title">Front-End Web Development with React</h5>
            		 <h6 className="section-title">The Hong Kong University of Science and Technology</h6>
            	</div>
            </div>	    
	    </div>
	);
}

export default About;  

		 				  	// <CardImg className="profile-img" top width="100%" src={Ahmed} alt="Ahmed Moustafa" />
  /*          <div className="row">
            	<div className="col-12 col-md-3">
            		<img className="profile-img"  src={Ahmed} alt="Ahmed Moustafa" />
            	</div>
            	<div className="col-12 col-md-6">
				  <Card>
				    <CardBody>
				      <CardTitle>{"Ahmed Moustafa"}</CardTitle>
				      <CardSubtitle>{"Software Engineer"}</CardSubtitle>
				      <CardText>{"Hi, I'm Ahmed and I live in Egypt, I love everything that has to do with programming, I always want to learn new stuff about different tech fields, I believe that one should learn one thing about everything and everything about one thing, and finally 'You are who YOU believe you are'."}</CardText>
				    </CardBody>
				  </Card>
            	</div>
            </div>*/

