import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Form, FormGroup, Label, Input, Col, Row, FormFeedback } from 'reactstrap';
import { Link } from 'react-router-dom';

const required = (val) => val && val.length;

const maxLength = (len) => (val) => !(val) || (val.length <= len);

const minLength = (len) => (val) => (val) && (val.length >= len);

const isNumber = (val) => !isNaN(Number(val));

const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Contact extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            subject: '',
            email: '',
            message: '',
            touched: {
                subject: false,
                email: false,
                message: false,
            },
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type ==='checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]:value
        });
    }
    handleSubmit(event) {
        console.log("Current State is: " + JSON.stringify(this.state));
        alert("Current State is: " + JSON.stringify(this.state));
        event.preventDefault();
    }

    handleBlur = (field) => (evt) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        });
    }

    validate(subject, email, message) {
        const errors = {
            subject: '',
            email: '',
            message: ''
        };

        if(this.state.touched.subject && subject.length < 1) {
            errors.subject = 'Subject required';
        }


        const reg = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        if(this.state.touched.email && !reg.test(email)) {
            errors.email = 'Invalid email';
        }

        if(this.state.touched.message && subject.length < 1) {
            errors.message = 'Message required';
        } 

        return errors;    
    }

    render() {
    	const errors = this.validate(this.state.subject, this.state.email, this.state.message);
    	return(
				<div className="row row-content">
                    <div className="col-12">
                        <h3>Contact</h3>
                    </div>
                    <div className="col-12 col-md-9">
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label htmlFor="subject" md={2}>Subject</Label>
                                <Col md={10}>
                                    <Input type="text" 
                                           id="subject" 
                                           name="subject" 
                                           placeholder="Subject" 
                                           value={this.state.subject}
                                           valid={errors.subject === ''}
                                           invalid={errors.subject !== ''} 
                                           onChange={this.handleInputChange} 
                                           onBlur={this.handleBlur('subject')} />
                                    <FormFeedback>{errors.subject}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Input type="email" 
                                           id="email" 
                                           name="email" 
                                           placeholder="Email" 
                                           value={this.state.email} 
                                           valid={errors.email === ''}
                                           invalid={errors.email !== ''}
                                           onChange={this.handleInputChange} 
                                           onBlur={this.handleBlur('email')} />
                                    <FormFeedback>{errors.email}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="message" md={2}>Your Message</Label>
                                <Col md={10}>
                                    <Input type="textarea" 
                                    	   id="message" 
                                    	   name="message" 
                                    	   rows="12" 
                                    	   value={this.state.message} 
                                    	   onChange={this.handleInputChange}
                                           valid={errors.message === ''}
                                           invalid={errors.message !== ''}
                                           onBlur={this.handleBlur('message')} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size: 10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                    Send Message
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
    	);
    }
}

export default Contact;