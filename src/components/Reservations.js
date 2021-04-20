import { faCheckCircle, faUtensils } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classnames from "classnames";
import { useFormik } from "formik";
import { Fragment, useState } from "react";
import { Form, Jumbotron, Nav, NavItem, TabContent, TabPane, NavLink, Button, DropdownToggle, DropdownMenu, DropdownItem, Input, InputGroup, InputGroupButtonDropdown, InputGroupAddon, FormGroup, Label, FormFeedback, Row, Col, Fade } from "reactstrap";
import { timeDataMap } from "../data/timeData";
import ReservationBookingInfo from "./ReservationBookingInfo";
import ReservationWhatToKnow from "./ReservationWhatToKnow";



const initialValues = {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    occasion: '',
    specialRequest: ''
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

    if (!values.phone) {
        errors.phone = 'Required';
    }
    
    if (!values.email) {
        errors.email = 'Required';
    }
    else if (!emailRegex.test(values.email)) {
        errors.email = "Please enter a valid email address";
    }

    return errors;
};


function Reservations(props) {

    console.log("reserve props:", props);

    const onSubmit = (values) => {
        console.log("onSubmit: " + JSON.stringify(values));
        props.submitReservation(values.firstName,
                                values.lastName,
                                values.phone,
                                values.email,
                                values.occasion,
                                values.specialRequest);
    }

    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: onSubmit,
        validate: validate
    });


    /*********************************** 
     * activeTab state
     */
    const switchTab = (tab) => {
        props.selectReserveActiveTab(tab);
    };

    /*********************************** 
     * numOfPeople state
     */
    const [numOfPeopleIsOpen, setNumOfPeopleIsOpen] = useState(false);
    const toggleNumOfPeopleDropdown = () => {
        setNumOfPeopleIsOpen(!numOfPeopleIsOpen);
    };

    const setNumOfPeople = (numOfPeople) => {
        props.setReserveNumOfPeople(numOfPeople);
    };

    const getNumOfPeople = () => {
        if (props.reserveNumOfPeople === 0)
            return "# People";
        else if (props.reserveNumOfPeople === 1)
            return "1 Person";
        else if (props.reserveNumOfPeople >= 1)
            return props.reserveNumOfPeople + " People";
        else
            return "# People";
    };


    /*********************************** 
     * time state
     */
    const [timeIsOpen, setTimeIsOpen] = useState(false);
    const toggleTimeIsOpenDropdown = () => {
        setTimeIsOpen(!timeIsOpen);
    };

    const setTime = (time) => {
        props.setReserveTime(time);
    };
    const getTime = () => {
        if (props.reserveTime === 'Time')
            return props.reserveTime;

        let timeStr = timeDataMap.get(props.reserveTime);
        if (typeof timeStr === 'undefined')
            return 'Time';

        return timeStr;
    };

    /*********************************** 
     * date state
     */
    const onChangeDate = (val) => {
        props.setReserveDate(val.target.value);
    };

    const isReadyToFindATable = () => {
        return (props.reserveDate.length > 0 && 
            props.reserveTime !== 'Time' && 
            props.reserveNumOfPeople > 0);
    };

    /*********************************** 
     * Handle FindATable
     */
    const handleFindATable = () => {
        if (isReadyToFindATable())
            props.findATable(props.reserveDate, props.reserveTime, props.reserveNumOfPeople);
    };

    /*********************************** 
     * Handle handlePickATimeSlot
     */
    const handlePickATimeSlot = (timeId) => {
        props.selectReserveTimeSlot(timeId);
        
    };

    const ReservationsHeader = () => {
        return (
            <Jumbotron className="jumbotron-fluid reservations_bg_img">
                <div className="container pt-5">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="display-4 pt-5 home_jumbotron_text">Reservations</h1>
                            <div>&nbsp;</div>
                            <p className="lead home_jumbotron_text">We believe food should be beautifully designed, purposefully executed, and hand-crafted.</p>
                            <p className="lead home_jumbotron_text">Let our talented chefs and events team pamper you and your loved ones in the comfort of your home. Breathtaking cuisine, attentive service, and flawless execution await.</p>
                        </div>
                    </div>
                </div>
            </Jumbotron>
        );
    };


    const UtensilsIcon = <FontAwesomeIcon icon={faUtensils} size="1x"/>
    const CheckCircleIcon = <FontAwesomeIcon icon={faCheckCircle} size="1x" />
    const CheckCircleIconBig = <FontAwesomeIcon icon={faCheckCircle} size="3x"/>

    const AvailTimes = props.reserveAvailTimes.map((availTime) => {
        return (
            <div key={availTime.id} className="btn-group mr-1" role="group">
                <Button className="reservations-find-btn mr-1"
                        key={availTime.id}
                        onClick={() => {handlePickATimeSlot(availTime.id); switchTab("yourDetails");}}>
                    {UtensilsIcon}&nbsp; {availTime.time}
                </Button>
            </div>
        );
    });


    const showStepNumOrFinished = (tab, stepNum) => {
        if (tab === 'findTable' && props.activeTab !== tab) {
            return CheckCircleIcon;
        } 
        else if (tab === 'yourDetails' && props.activeTab === 'yourReservation') {
            return CheckCircleIcon;
        }
        else if (tab === 'yourReservation' && props.activeTab === tab) {
            return CheckCircleIcon;
        }
        else {
            return stepNum + ". ";
        }
    }


    return (
        <Fragment>
            <ReservationsHeader/>
            
                <div className="container">                
                    <Nav className="menu-page-nav">
                        <NavItem>
                            <NavLink className={classnames({active: props.activeTab === 'findTable'})}
                            onClick={() => switchTab('findTable')}>
                                {showStepNumOrFinished('findTable', 1)} Find a Table
                            </NavLink>
                        </NavItem>  
                        <NavItem>
                            <NavLink className={classnames({active: props.activeTab === 'yourDetails'})}>
                            {showStepNumOrFinished('yourDetails', 2)} Your Details
                            </NavLink>
                        </NavItem>   
                        <NavItem>
                            <NavLink className={classnames({active: props.activeTab === 'yourReservation'})}>
                            {showStepNumOrFinished('yourReservation', 3)} Your Reservation
                            </NavLink>
                        </NavItem>                                              
                    </Nav>  
                    <Fade big>
                        <TabContent activeTab={props.activeTab}>
                            <TabPane tabId="findTable" className="pt-4 pb-4">
                                <div className="container">
                                    <div className="row">
                                        <InputGroup>
                                            <InputGroupButtonDropdown addonType="prepend" isOpen={numOfPeopleIsOpen} toggle={toggleNumOfPeopleDropdown}>
                                                <DropdownToggle className="reservations-btn" outline caret>
                                                    {getNumOfPeople()}
                                                </DropdownToggle>
                                                <DropdownMenu>
                                                    <DropdownItem onClick={() => {setNumOfPeople(1)}}>1 Person</DropdownItem>
                                                    <DropdownItem onClick={() => {setNumOfPeople(2)}}>2 People</DropdownItem>
                                                    <DropdownItem onClick={() => {setNumOfPeople(3)}}>3 People</DropdownItem>
                                                    <DropdownItem onClick={() => {setNumOfPeople(4)}}>4 People</DropdownItem>
                                                    <DropdownItem onClick={() => {setNumOfPeople(5)}}>5 People</DropdownItem>
                                                    <DropdownItem onClick={() => {setNumOfPeople(6)}}>6 People</DropdownItem>
                                                    <DropdownItem onClick={() => {setNumOfPeople(7)}}>7 People</DropdownItem>
                                                    <DropdownItem onClick={() => {setNumOfPeople(8)}}>8 People</DropdownItem>
                                                    <DropdownItem onClick={() => {setNumOfPeople(9)}}>9 People</DropdownItem>
                                                    <DropdownItem onClick={() => {setNumOfPeople(10)}}>10 People</DropdownItem>
                                                    <DropdownItem onClick={() => {setNumOfPeople(11)}}>11 People</DropdownItem>
                                                    <DropdownItem onClick={() => {setNumOfPeople(12)}}>12 People</DropdownItem>
                                                </DropdownMenu>
                                            </InputGroupButtonDropdown>
                                            <InputGroupAddon addonType="append">
                                                <Input className="reservations-btn" 
                                                       placeholder="dd/mm/yyyy"
                                                       type="date" 
                                                       onChange={onChangeDate} 
                                                       value={props.reserveDate}/>
                                            </InputGroupAddon>
                                            <InputGroupButtonDropdown addonType="append" isOpen={timeIsOpen} toggle={toggleTimeIsOpenDropdown}>
                                                <DropdownToggle className="reservations-btn" outline caret>
                                                    {getTime()}
                                                </DropdownToggle>
                                                <DropdownMenu>
                                                    <DropdownItem onClick={() => {setTime("1700")}}>5:00pm</DropdownItem>
                                                    <DropdownItem onClick={() => {setTime("1730")}}>5:30pm</DropdownItem>
                                                    <DropdownItem onClick={() => {setTime("1800")}}>6:00pm</DropdownItem>
                                                    <DropdownItem onClick={() => {setTime("1830")}}>6:30pm</DropdownItem>
                                                    <DropdownItem onClick={() => {setTime("1900")}}>7:00pm</DropdownItem>
                                                    <DropdownItem onClick={() => {setTime("1930")}}>7:30pm</DropdownItem>
                                                    <DropdownItem onClick={() => {setTime("2000")}}>8:00pm</DropdownItem>
                                                    <DropdownItem onClick={() => {setTime("2030")}}>8:30pm</DropdownItem>
                                                    <DropdownItem onClick={() => {setTime("2100")}}>9:00pm</DropdownItem>
                                                    <DropdownItem onClick={() => {setTime("2130")}}>9:30pm</DropdownItem>
                                                    <DropdownItem onClick={() => {setTime("2200")}}>10:00pm</DropdownItem>
                                                    <DropdownItem onClick={() => {setTime("2230")}}>10:30pm</DropdownItem>
                                                    <DropdownItem onClick={() => {setTime("2300")}}>11:00pm</DropdownItem>
                                                    <DropdownItem onClick={() => {setTime("2330")}}>11:30pm</DropdownItem>
                                                </DropdownMenu>
                                            </InputGroupButtonDropdown>
                                            <InputGroupAddon addonType="append">
                                                <Button className={classnames({disabled: !isReadyToFindATable()}, 'reservations-find-btn')} 
                                                        addonType="append"
                                                        onClick={handleFindATable}>Find a table</Button>
                                            </InputGroupAddon>
                                        </InputGroup>
                                    </div>
                                    <div className="row pt-3">
                                        <div className="btn-toolbar" role="toolbar">
                                            {AvailTimes}
                                        </div>
                                    </div>
                                </div>
                            </TabPane>                       
                            <TabPane tabId="yourDetails" className="pt-4 pb-4">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12 col-md-6 pb-4">
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
                                                    <Label for="phone">Phone Number</Label>
                                                    <Input type="tel" name="phone" id="phone"
                                                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                                        className="form-field"
                                                        placeholder="XXX-XXX-XXXX"
                                                        invalid={formik.errors.phone && formik.touched.phone ? true : false}
                                                        {...formik.getFieldProps('phone')}/> 
                                                    <FormFeedback>{formik.errors.phone}</FormFeedback>    
                                                </FormGroup>                                         
                                                <FormGroup>
                                                    <Label for="email">Your Email</Label>
                                                    <Input type="email" name="email" id="email"
                                                        className="form-field"
                                                        invalid={formik.errors.email && formik.touched.email ? true : false}
                                                        {...formik.getFieldProps('email')}/> 
                                                    <FormFeedback>{formik.errors.email}</FormFeedback>    
                                                </FormGroup>    
                                                <FormGroup>
                                                    <Label for="occasion">Occasion</Label>
                                                    <Input type="select" name="occasion" id="occasion"
                                                        className="form-field"
                                                        invalid={formik.errors.occasion && formik.touched.occasion ? true : false}
                                                        {...formik.getFieldProps('occasion')}>
                                                        <option>None</option>
                                                        <option>Birthday</option>
                                                        <option>Anniversary</option>
                                                        <option>Date</option>
                                                        <option>Special Occasion</option>
                                                        <option>Business Meal</option>
                                                    </Input>
                                                </FormGroup>
                                                <FormGroup>
                                                    <Label for="specialRequest">Special Request</Label>
                                                    <Input type="text" name="specialRequest" id="specialRequest"
                                                        className="form-field"
                                                        invalid={formik.errors.specialRequest && formik.touched.specialRequest ? true : false}
                                                        {...formik.getFieldProps('specialRequest')}/> 
                                                    <FormFeedback>{formik.errors.specialRequest}</FormFeedback>    
                                                </FormGroup>  
                                                <Button type="submit" className="form-field pt-3 pb-3 pl-4 pr-4 mt-4" outline>CONFIRM RESERVATION</Button>                                                                              
                                            </Form>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <div className="row">
                                                <div className="col-12">
                                                    <ReservationBookingInfo reserveDate={props.reserveDate}
                                                                            reserveSelectedTimeSlot={props.reserveSelectedTimeSlot}
                                                                            numOfPeopleStr={getNumOfPeople()}/>
                                                </div>
                                            </div>
                                            <div className="row pt-3">
                                                <div className="col-12">
                                                    <ReservationWhatToKnow/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TabPane>  
                            <TabPane tabId="yourReservation" className="pt-4 pb-1">
                                <div className="container">
                                    <div className="row reservation-confirmed">
                                        <div className="pl-3">{CheckCircleIconBig}</div>
                                        <div>
                                            <div className="container">
                                                <div className="reservation-title">Your table has been confirmed!</div>
                                                <div>An email confirmation has been sent to you.</div>
                                                <div>Confirmation #{props.reserveConfirmNum}</div>
                                            </div>
                                        </div>                                
                                    </div>
                                    <div className="row pt-4">
                                        <div className="col-12 col-md-6 pb-3">
                                            <ReservationBookingInfo reserveDate={props.reserveDate}
                                                                                reserveSelectedTimeSlot={props.reserveSelectedTimeSlot}
                                                                                numOfPeopleStr={getNumOfPeople()}/>
                                        </div>
                                        <div className="col-12 col-md-6 pb-3">
                                            <ReservationWhatToKnow/>
                                        </div>
                                    </div>
                                </div>
                            </TabPane> 
                        </TabContent>
                    </Fade> 
                </div>
        </Fragment>
    );

}

export default Reservations;