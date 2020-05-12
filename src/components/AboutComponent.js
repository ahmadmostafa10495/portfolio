import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
// import { Loading } from './LoadingComponent';
import Ahmed from './AhmedMoustafa.jpg'


function About() {

	return( 
		<div>
            <h3>About</h3>
            <hr />
			<Media>
		      <Media left middle>
		          <Media object src={Ahmed} alt={"Ahmed Moustafa"} />
		      </Media>
		      <Media body className="ml-5">
		        <Media heading>{"Ahmed Moustafa"}</Media>
		        <p>{"Software Engineer"}</p>
		        <p>{"Hi, I'm Ahmed and I live in Egypt, I love everything that has to do with programming, I always want to learn new stuff about different tech fields, I believe that one should learn one thing about everything and everything about one thing, and finally 'You are who YOU believe you are'."}</p>
		      </Media>
		    </Media>
	    </div>
	);
}

export default About;  