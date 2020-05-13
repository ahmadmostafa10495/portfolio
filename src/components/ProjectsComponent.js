import React from 'react';
import {
  Card, CardImg, CardTitle, CardText, CardColumns,
  CardSubtitle, CardBody
} from 'reactstrap';
import { Link } from 'react-router-dom';


const Projects = (props) => {
  return (
    <div className="container">
        <div className="row">
            <div className="col-12">
                <h3>Projects</h3>
                <hr />
            </div>
        </div>
        <div className="row">
			<CardColumns>
			  <Card>
			    <CardBody>
			  	  <Link to={`/projects/${0}`}>
			    	  <CardImg top width="100%" src={props.projects[0].img} alt="Card image cap" />
			      </Link>
			      <CardTitle>Confusion</CardTitle>
			      <CardSubtitle>React Project</CardSubtitle>
			      <CardText>This is a Pizza restuarant react application, get to know our lovely dishes.</CardText>
			    </CardBody>
			  </Card>
			  <Card className="bg-thirdBlue">
			    <CardBody>
			    <CardTitle>Nostalgic to old cartoon themes?</CardTitle>
			    <CardText>Check out my <a href="https://soundcloud.com/ahmed-mostafa-1012/sets/arabic_cartoon">playlist</a>.</CardText>
			    </CardBody>
			  </Card>
			  <Card body  className="bg-thirdBlue">
			    <CardTitle>Checkout my latest creations.</CardTitle>
			    <CardText>Follow me on <a href="https://github.com/ahmadmostafa10495">Github</a> to be updated.</CardText>
			  </Card>
			  <Card>
			    <CardBody>
			      <Link to={`/projects/${1}`}>
			      	<CardImg top width="100%" src={props.projects[1].img} alt="Card image cap" />
			      </Link>
			      <CardTitle>Background Color Generator</CardTitle>
			      <CardSubtitle>My First Child</CardSubtitle>
			      <CardText>Choose the color gradient you want and leave the css to me.</CardText>
			    </CardBody>
			  </Card>
			  <Card>
			    <CardBody>
			  	  <Link to={`/projects/${2}`}>
			       	  <CardImg top width="100%" src={props.projects[2].img} alt="Card image cap" />
			      </Link>
			      <CardTitle>Confusion</CardTitle>
			      <CardSubtitle>Hungry?</CardSubtitle>
			      <CardText>This website helps you to reserve a place in one of the greatest restuarants ever.</CardText>
			    </CardBody>
			  </Card>
			  <Card body  className="bg-thirdBlue">
			    <CardTitle>Do you like chess?!</CardTitle>
			    <CardText><a href="https://twitter.com/AhMadMostafa7/status/1250759556004749313">Here</a> is a thread of my greatest wins!</CardText>
			  </Card>
			</CardColumns>
        </div>
    </div>
  );
};

export default Projects;