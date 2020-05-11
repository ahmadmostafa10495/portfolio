import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb,
		 BreadcrumbItem, Button, Row, Col, Modal, ModalHeader, 
		 ModalBody, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';

function RenderProject({project}) {
	if (project != null) {
		return (
			<div>
		    	<FadeTransform in 
		    		transformProps={{
		    			exitTransform: 'scale(0.5) translateY(-50%)'
		    		}}>
					<Card>
						<CardImg width="100%" object src={"." + project.img} alt={project.name} />
						<CardBody>
							<CardTitle>{project.name}</CardTitle>
							<CardText>{project.description}</CardText>
						</CardBody>
					</Card>
		        </FadeTransform>
	        </div>
		);
	} else {
		return (
			<div></div>
		);
	}
}

const  DetailedProject = (props) => {
	if(props.project != null) {
		return (
			<div className="container">
            	<div className="row">
	                <Breadcrumb>
	                	<BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
	                    <BreadcrumbItem active>{props.project.name}</BreadcrumbItem>
	                </Breadcrumb>
	                <div className="col-12">
	                    <h3>{props.project.name}</h3>
	                    <hr />
	                </div>
	            </div>
				<div className="row">
					<div className="col-12 col-md-5 m-1">
						<RenderProject project={props.project} />
					</div>

					<div>
						
					</div>
				</div>
			</div>
		);
	} else {
		return (
			<div></div>
		);
	}

}


export default DetailedProject;
/*					<div className="col-12 col-md-5 m-1">
						<RenderComments comments= {props.comments} 
										postComment={props.postComment}
										dishId={props.dish.id}
										/>
					</div>*/