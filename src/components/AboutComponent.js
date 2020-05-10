import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
// import { Loading } from './LoadingComponent';



function About() {

	return( 
		<Media>
	      <Media left middle>
	          <Media object src={"./AhmedMoustafa.jpg"} alt={"Ahmed Moustafa"} />
	      </Media>
	      <Media body className="ml-5">
	        <Media heading>{"Ahmed Moustafa"}</Media>
	        <p>{"Software Engineer"}</p>
	        <p>{""}</p>
	      </Media>
	    </Media>
	);
}

export default About;  