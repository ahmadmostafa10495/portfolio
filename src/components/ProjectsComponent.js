import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';


function RenderProject ({project}) {
    return (
        <Card>
            <Link to={`/projects/${project.id}`}>
            <CardImg width="100%" src={project.img} alt={project.name} />
            <CardImgOverlay>
                <CardTitle>{project.name}</CardTitle>
            </CardImgOverlay>
            </Link>
        </Card>
    );
}

const Projects = (props) => {

    const projects = props.projects.map((project) => {
        return (
            <div className="col-12 col-md-5 m-1"  key={project.id}>
                <RenderProject project={project} />
            </div>
        );
    });


    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h3>Projects</h3>
                    <hr />
                </div>
            </div>
            <div className="row">
                {projects}
            </div>
        </div>
    );
    
}

export default Projects;