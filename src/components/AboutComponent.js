import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardImg, CardTitle, CardText, CardColumns,
  CardSubtitle, CardBody, CardHeader, Media } from 'reactstrap';
// import { Loading } from './LoadingComponent';
import Ahmed from '../images/AhmedMoustafa.jpg'


function About() {

	return( 
		<div>
            <h3>About</h3>
            <hr />
			<Media>
		      <Media body className="">
		        <Media middle className="profile-img" object src={Ahmed} alt={"Ahmed Moustafa"} />
		        <Media heading>{"Ahmed Moustafa"}</Media>
		        <p>{"Software Engineer"}</p>
		        <p>{"Hi, I'm Ahmed and I live in Egypt, I love everything that has to do with programming, I always want to learn new stuff about different tech fields, I believe that one should learn one thing about everything and everything about one thing, and finally 'You are who YOU believe you are'."}</p>
		      </Media>

		    </Media>
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

