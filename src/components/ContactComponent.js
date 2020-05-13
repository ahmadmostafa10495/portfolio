import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Col, FormFeedback } from 'reactstrap';

// const required = (val) => val && val.length;

// const maxLength = (len) => (val) => !(val) || (val.length <= len);

// const minLength = (len) => (val) => (val) && (val.length >= len);

// const isNumber = (val) => !isNaN(Number(val));

// const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

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
        // console.log("Current State is: " + JSON.stringify(this.state));

        let email = this.state.email;
        let subject = this.state.subject;
        let message = this.state.message;
        let reciever = "a7mad53@ymail.com";
        this.setState({
            subject: '',
            email: '',
            message: '',
            touched: {
                subject: false,
                email: false,
                message: false,
            },

        })
  	    window.emailjs.send("default_service", "template_X4M0HAzv", {
			  from_name: subject,
			  message_html: message,
			  reply_to: email,
			  to_name: reciever
			}
	      )
	      .then(res => {
	      	 alert("Sent!!");
	      })
	      // Handle errors here however you like
	      .catch(err => console.error('Failed to send feedback. Error: ', err));
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
    			<div>
					<div className="row row-content">
	                    <div className="col-12">
	                        <h3 className="section-title">Contact</h3>
	                        <hr />
	                    </div>
	                    <div className="col-12 col-md-9">
	                        <Form onSubmit={this.handleSubmit}>
	                            <FormGroup row>
	                                <Label htmlFor="email" md={2}>Email</Label>
	                                <Col md={10}>
	                                    <Input type="email" 
	                                           id="email" 
	                                           name="email" 
	                                           placeholder="john.snow@winterfell.com" 
	                                           value={this.state.email} 
	                                           valid={errors.email === '' && this.state.touched.email}
	                                           invalid={errors.email !== ''}
	                                           onChange={this.handleInputChange} 
	                                           onBlur={this.handleBlur('email')} />
	                                    <FormFeedback>{errors.email}</FormFeedback>
	                                </Col>
	                            </FormGroup>
	                            <FormGroup row>
	                                <Label htmlFor="subject" md={2}>Subject</Label>
	                                <Col md={10}>
	                                    <Input type="text" 
	                                           id="subject" 
	                                           name="subject" 
	                                           placeholder="Winter Is Coming!!" 
	                                           value={this.state.subject}
	                                           valid={errors.subject === '' && this.state.touched.subject}
	                                           invalid={errors.subject !== ''} 
	                                           onChange={this.handleInputChange} 
	                                           onBlur={this.handleBlur('subject')} />
	                                    <FormFeedback>{errors.subject}</FormFeedback>
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
	                                           valid={errors.message === '' && this.state.touched.message}
	                                           invalid={errors.message !== ''}
	                                           onBlur={this.handleBlur('message')} />
	                                </Col>
	                            </FormGroup>
	                            <FormGroup row>
	                                <Col md={{size: 10, offset: 2}}>
	                                    <Button type="submit" color="secondary ">
	                                    Send Message
	                                    </Button>
	                                </Col>
	                            </FormGroup>
	                        </Form>
	                    </div>
	                </div>
	                <div className="col-12 align-self-center border-bottom pb-5" >
	                    <div className="text-center social-btn">
	                        <a className="btn btn-social-icon btn-github mx-1" href="https://github.com/ahmadmostafa10495"><i className="fa fa-github"></i></a>
	                        <a className="btn btn-social-icon btn-facebook mx-1" href="https://www.facebook.com/ahmed.mostafa.3939503"><i className="fa fa-facebook"></i></a>
	                        <a className="btn btn-social-icon btn-linkedin mx-1" href="https://www.linkedin.com/in/ahmed--moustafa/"><i className="fa fa-linkedin"></i></a>
	                        <a className="btn btn-social-icon btn-twitter mx-1" href="https://twitter.com/AhMadMostafa7"><i className="fa fa-twitter"></i></a>
	                        <a className="btn btn-social-icon btn-google mx-1" href="https://www.youtube.com/channel/UCKiXWLA1CvSE8D0cT9d2lSA?"><i className="fa fa-youtube"></i></a>
	                        <a className="btn btn-social-icon btn-instagram mx-1" href="https://www.instagram.com/ahmd_mostafa/"><i className="fa fa-instagram"></i></a>	          
	                        <a className="btn btn-social-icon btn-soundcloud mx-1" href="https://soundcloud.com/ahmed-mostafa-1012"><i className="fa fa-soundcloud"></i></a>	          
	                        <a className="btn btn-social-icon btn-yahoo mx-1" href="mailto:a7mad53@ymail.com"><i className="fa fa-yahoo"></i></a>
	                    </div>
	                </div>
            	</div>
    	);
    }
}

export default Contact;