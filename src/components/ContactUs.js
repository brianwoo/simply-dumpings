import { useFormik } from 'formik';
import { Fragment } from "react";
import { Button, Col, Form, FormFeedback, FormGroup, Input, Jumbotron, Label, Row, Fade } from "reactstrap";

const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
};

const validate = (values) => {
    let errors = {};
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!values.firstName) {
        errors.firstName = 'Required';
    }
    
    if (!values.lastName) {
        errors.lastName = 'Required';
    }
    
    if (!values.email) {
        errors.email = 'Required';
    }
    else if (!emailRegex.test(values.email)) {
        errors.email = "Please enter a valid email address";
    }

    if (!values.subject) {
        errors.subject = 'Required';
    }
    
    if (!values.message) {
        errors.message = 'Required';
    }

    return errors;
};



function ContactUs(props) {

    const onSubmit = (values) => {
        console.log("onSubmit: " + JSON.stringify(values));
        if (!props.isInquerySubmitted)
            props.submitContactInquery(values);
    }

    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: onSubmit,
        validate: validate
    });

    const ContactHeader = () => {
        return (
            <Jumbotron className="jumbotron-fluid contact_bg_img">
                <div className="container pt-5">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="display-4 pt-5 home_jumbotron_text">Contact Us</h1>
                            <div>&nbsp;</div>
                            <p className="lead home_jumbotron_text">Let's get in touch.</p>
                            <p className="lead home_jumbotron_text">Have a question for us? Take a look below to learn more.</p>
                        </div>
                    </div>
                </div>
            </Jumbotron>
        );
    };


    return (
        <Fragment>
            <ContactHeader/>
            <Fade>
                <div className="container pb-4">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className="embed-responsive embed-responsive-4by3">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2508.472183525992!2d-114.06521838412228!3d51.04436855227244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53716ffd8b153d15%3A0xd249f37347b3ac6!2s101%209%20Ave%20SW%2C%20Calgary%2C%20AB%20T2P%201J9!5e0!3m2!1sen!2sca!4v1618181467347!5m2!1sen!2sca" title="map" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
                            </div>
                            <div className="pt-5 pb-5 pl-1">
                                <a href={process.env.PUBLIC_URL + "/catering"} className="font-weight-normal">Click Here For Catering Inquiries</a>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            
                            <div className="pl-1 font-weight-normal">We welcome your suggestions. Please send us your questions, feedback and comments.</div>
                            <div className="container pl-1 pr-1 pt-4">
                                <Form onSubmit={formik.handleSubmit}>
                                    <Row form>
                                        <Col xs={6}>
                                            <FormGroup>
                                                <Label for="firstName">First Name</Label>
                                                <Input type="text" name="firstName" id="firstName" 
                                                        className="form-field"
                                                        invalid={formik.errors.firstName && formik.touched.firstName ? true : false}
                                                        {...formik.getFieldProps('firstName')}/>
                                                <FormFeedback>{formik.errors.firstName}</FormFeedback> 
                                            </FormGroup>
                                            
                                        </Col>
                                        <Col xs={6}>
                                            <FormGroup>
                                                <Label for="lastName">Last Name</Label>
                                                <Input type="text" name="lastName" id="lastName" 
                                                    className="form-field"
                                                    invalid={formik.errors.lastName && formik.touched.lastName ? true : false}
                                                    {...formik.getFieldProps('lastName')}/>   
                                                <FormFeedback>{formik.errors.lastName}</FormFeedback>                                                
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <FormGroup>
                                        <Label for="numOfPeople">Your Email</Label>
                                        <Input type="email" name="email" id="email"
                                            className="form-field"
                                            invalid={formik.errors.email && formik.touched.email ? true : false}
                                            {...formik.getFieldProps('email')}/> 
                                        <FormFeedback>{formik.errors.email}</FormFeedback>    
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="companyName">Subject</Label>
                                        <Input type="text" name="subject" id="subject" 
                                            className="form-field"
                                            invalid={formik.errors.subject && formik.touched.subject ? true : false}
                                            {...formik.getFieldProps('subject')}/>
                                        <FormFeedback>{formik.errors.subject}</FormFeedback>  
                                    </FormGroup>    
                                    <FormGroup>
                                        <Label for="numOfPeople">Message</Label>
                                        <Input type="textarea" rows="4" name="message" id="message" 
                                            className="form-field"
                                            invalid={formik.errors.message && formik.touched.message ? true : false}
                                            {...formik.getFieldProps('message')}/>
                                        <FormFeedback>{formik.errors.message}</FormFeedback>  
                                    </FormGroup>    
                                    <Button type="submit" className="form-field pt-3 pb-3 pl-4 pr-4 mt-4" disabled={props.isInquerySubmitted} outline>
                                        {props.isInquerySubmitted ? 'SUBMITTED'  : 'SUBMIT'}
                                    </Button>                                                             
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
        </Fragment>
    );

}

export default ContactUs;