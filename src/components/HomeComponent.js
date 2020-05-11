import React from 'react';
// import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';
// import { Loading } from './LoadingComponent';
// import { FadeTransform } from 'react-animation-components';
import About from './AboutComponent';
import Contact from './ContactComponent';
import Projects from './ProjectsComponent';
import Example from './ExampleComponent';



function Home(props) {
    return(
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md-12 m-1" id="about">
                	<About />
                </div>
                <div className="col-12 col-md-12 m-1" id="projects">
                	<Example projects={props.projects} />
                </div>
                <div className="col-12 col-md-12 m-1" id="contact">
                	<Contact />
                </div>
            </div>
        </div>
    );
}

export default Home;