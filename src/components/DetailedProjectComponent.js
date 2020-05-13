import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import ProjectCarousel from './ProjectCarouselComponent'
// function RenderProject({project}) {
// 	if (project != null) {
// 		return (
// 			<div>
// 		    	<FadeTransform in 
// 		    		transformProps={{
// 		    			exitTransform: 'scale(0.5) translateY(-50%)'
// 		    		}}>
// 					<Card>
// 						<CardImg width="100%" object src={project.img} alt={project.name} />
// 						<CardBody>
// 							<CardTitle>{project.name}</CardTitle>
// 							<CardText>{project.description}</CardText>
// 						</CardBody>
// 					</Card>
// 		        </FadeTransform>
// 	        </div>
// 		);
// 	} else {
// 		return (
// 			<div></div>
// 		);
// 	}
// }

const  DetailedProject = (props) => {
	if(props.project != null) {
		return (
			<div className="container mt-2">
            	<div className="row">
	                <Breadcrumb>
	                	<BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
	                    <BreadcrumbItem active>{props.project.name}</BreadcrumbItem>
	                    <BreadcrumbItem><a href={props.project.link}>Live Demo</a></BreadcrumbItem>
	                </Breadcrumb>
	                <div className="col-12">
	                    <h3>{props.project.name}</h3>
	                    <hr />
	                </div>
	            </div>
				<div className="row">

					<div className="col-12 m-1">
						<ProjectCarousel project={props.project}/>
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
					</div>


										<div className="col-12 m-1">
						<RenderProject project={props.project} />
					</div>*/