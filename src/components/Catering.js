import { Fragment } from "react";
import { Button, Col, Form, FormFeedback, FormGroup, Input, Jumbotron, Label, Row, Fade } from "reactstrap";
import { useFormik } from 'formik';
import CateringCarousel from "./CateringCarousel";


const initialValues = {
    firstName: "",
    lastName: "",
    companyName: "",
    date: "",
    numOfPeople: 1,
    email: "",
    message: ""
};

const validate = (values) => {
    let errors = {};

    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!values.firstName) {
        errors.firstName = 'Required'
    }

    if (!values.lastName) {
        errors.lastName = 'Required'
    }

    if (!values.date) {
        errors.date = 'Required'
    }

    if (values.numOfPeople === 0) {
        errors.numOfPeople = 'Number of people needs to be great than 0'
    }

    if (!values.email) {
        errors.email = 'Required'
    }
    else if (!emailRegex.test(values.email)) {
        errors.email = "Please enter a valid email address";
    }

    if (!values.message) {
        errors.message = 'Please enter a message'
    }            

    return errors;
};


function Catering(props) {

    console.log("catering props:", props);

    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: (values) => {
            if (!props.isInquerySubmitted)
                props.submitCateringInquery(values);
        },
        validate: validate
    });

    const CateringHeader = () => {
        return (
            <Jumbotron className="jumbotron-fluid catering_bg_img">
                <div className="container pt-5">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="display-4 pt-5 home_jumbotron_text">Catering</h1>
                            <div>&nbsp;</div>
                            <p className="lead home_jumbotron_text">We believe food should be beautifully designed, purposefully executed, and hand-crafted.</p>
                            <p className="lead home_jumbotron_text">Let our talented chefs and events team pamper you and your loved ones in the comfort of your home. Breathtaking cuisine, attentive service, and flawless execution await.</p>
                        </div>
                    </div>
                </div>
            </Jumbotron>
        );
    };

    // console.log("Form values", formik.values);
    // console.log("Form errors", ormik.touched.firstName);

    return (
        <Fragment>
            <CateringHeader/>
            <Fade>
                <div className="container">
                    <div className="row pb-4">
                        <div className="col-12 text-center topic-text text-bold">
                            <div>Catering Inquiries</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-6 ">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12 text-center">
                                        <div className="pb-3">25 orders minimum for delivery</div>
                                        <div className="pb-3">Delivery available between 11am-11:30am</div>
                                        <div className="pb-4">Pick-up times available upon request</div>
                                        <Button className="form-field p-3">CATERING MENU</Button>
                                        <hr className="pt-2 pb-2"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 text-center">
                                        <CateringCarousel/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="container pt-5 pt-md-0">
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
                                        <Label for="companyName">Company Name</Label>
                                        <Input type="text" name="companyName" id="companyName" 
                                            placeholder="(if applicable)"
                                            className="form-field"
                                            {...formik.getFieldProps('companyName')} />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="date">Date</Label>
                                        <Input type="date" name="date" id="date" 
                                            className="form-field"
                                            invalid={formik.errors.date && formik.touched.date ? true : false}                                      
                                            {...formik.getFieldProps('date')}/>
                                        <FormFeedback>{formik.errors.date}</FormFeedback> 
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="numOfPeople">Number of People</Label>
                                        <Input type="number" name="numOfPeople" id="numOfPeople" min="1"
                                            className="form-field"
                                            invalid={formik.errors.numOfPeople && formik.touched.numOfPeople ? true : false}  
                                            {...formik.getFieldProps('numOfPeople')} />
                                        <FormFeedback>{formik.errors.numOfPeople}</FormFeedback>  
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="numOfPeople">Your Email</Label>
                                        <Input type="email" name="email" id="email"
                                            className="form-field"
                                            invalid={formik.errors.email && formik.touched.email ? true : false} 
                                            {...formik.getFieldProps('email')} />
                                        <FormFeedback>{formik.errors.email}</FormFeedback> 
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="numOfPeople">Message</Label>
                                        <Input type="textarea" name="message" id="message" 
                                            className="form-field"
                                            invalid={formik.errors.message && formik.touched.message ? true : false}
                                            {...formik.getFieldProps('message')} />
                                        <FormFeedback>{formik.errors.message}</FormFeedback>
                                    </FormGroup>    
                                    <Button type="submit" className="form-field pt-3 pb-3 pl-4 pr-4 mt-4" disabled={props.isInquerySubmitted} outline>
                                        {props.isInquerySubmitted ? 'SUBMITTED' : 'SUBMIT'}
                                    </Button>                            
                                </Form>
                            </div>
                        </div>
                    </div>
                    <div className="row pb-5">                    
                    </div>
                </div>
            </Fade>
        </Fragment>
    );
}

export default Catering;