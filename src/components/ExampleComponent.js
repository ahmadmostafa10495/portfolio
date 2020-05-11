import React from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardColumns,
  CardSubtitle, CardBody
} from 'reactstrap';
import { Link } from 'react-router-dom';


const Example = (props) => {
  return (
    <CardColumns>
      <Card>
      	<Link to={`/projects/${0}`}>
        	<CardImg top width="100%" src="/AhmedMoustafa.jpg" alt="Card image cap" />
        </Link>
        <CardBody>
          <CardTitle>Project 1</CardTitle>
          <CardSubtitle>Cool Project</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
        </CardBody>
      </Card>
      <Card body inverse color="primary">
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
      </Card>
      <Card>
        <CardImg top width="100%" src="/AhmedMoustafa.jpg" alt="Card image cap" />
      </Card>
      <Card>
        <CardBody>
          <CardImg top width="100%" src="/AhmedMoustafa.jpg" alt="Card image cap" />
          <CardTitle>Project 2</CardTitle>
          <CardSubtitle>Cool Project</CardSubtitle>
          <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
        </CardBody>
      </Card>
      <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
        <CardTitle>Checkout My New Achievment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
      </Card>
      <Card>
        <CardImg top width="100%" src="/AhmedMoustafa.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
        </CardBody>
      </Card>
      <Card body inverse color="primary">
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
      </Card>
    </CardColumns>
  );
};

export default Example;