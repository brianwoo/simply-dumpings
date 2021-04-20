import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { addMenuItems, findATable, selectActiveTab, selectReserveTimeSlot, setReserveDate, setReserveNumOfPeople, setReserveTime, submitCateringInquery, submitContactInquery, submitReservation } from '../redux/actionCreators';
import Catering from './Catering';
import Footer from './Footer';
import Home from './Home';
import Menu from './Menu';
import OrderOnline from './OrderOnline';
import ContactUs from './ContactUs';
import NavMenu from './NavMenu';
import Reservations from './Reservations';


const mapStateToProps = (state) => {

    return {
        catering: state.catering,
        contact: state.contact,
        menu: state.menu,
        reserve: state.reserve
    };
}

const mapDispatchToProps = (dispatch) => ({
    submitCateringInquery: (inquery) => dispatch(submitCateringInquery(inquery)),
    submitContactInquery: (inquery) => dispatch(submitContactInquery(inquery)),
    addMenuItems: () => dispatch(addMenuItems()),
    findATable: (date, time, numOfPeople) => dispatch(findATable(date, time, numOfPeople)),
    selectReserveTimeSlot: (timeslot) => dispatch(selectReserveTimeSlot(timeslot)),
    selectReserveActiveTab: (tab) => dispatch(selectActiveTab(tab)),
    setReserveNumOfPeople: (numOfPeople) => dispatch(setReserveNumOfPeople(numOfPeople)),
    setReserveDate: (date) => dispatch(setReserveDate(date)),
    setReserveTime: (time) => dispatch(setReserveTime(time)),
    submitReservation: (firstName, lastName, phone, email, occasion, specialRequest) => dispatch(submitReservation(firstName, lastName, phone, email, occasion, specialRequest))
});

class Main extends Component {

    componentDidMount() {
        this.props.addMenuItems();
    }

    render() {
        
        const HomePage = () => {
            return (
                <Home/>
            );
        }

        const CateringPage = () => {
            return (
                <Catering submitCateringInquery={this.props.submitCateringInquery}
                          isInquerySubmitted={this.props.catering.inquerySubmitted}/>
            );
        }

        const MenuPage = () => {

            return (
                <Menu menu={this.props.menu} 
                      addMenuItems={this.props.addMenuItems}/>
            );
        }

        const OrderOnlinePage = () => {
            return (
                <OrderOnline />
            );
        }

        const ContactUsPage = () => {
            return (
                <ContactUs submitContactInquery={this.props.submitContactInquery}
                           isInquerySubmitted={this.props.contact.inquerySubmitted}/>
            );
        }

        const ReservationsPage = () => {
            return (
                <Reservations findATable={this.props.findATable}
                              selectReserveTimeSlot={this.props.selectReserveTimeSlot}
                              selectReserveActiveTab={this.props.selectReserveActiveTab}
                              setReserveNumOfPeople={this.props.setReserveNumOfPeople}
                              setReserveDate={this.props.setReserveDate}
                              setReserveTime={this.props.setReserveTime}
                              submitReservation={this.props.submitReservation}
                              reserveDate={this.props.reserve.date}
                              reserveTime={this.props.reserve.time}
                              reserveNumOfPeople={this.props.reserve.numOfPeople}
                              reserveSelectedTimeSlot={this.props.reserve.selectedTimeSlot}
                              reserveAvailTimes={this.props.reserve.availTimes}
                              reserveConfirmNum={this.props.reserve.confirmationNum}
                              activeTab={this.props.reserve.activeTab} />
            );
        }
        

        return (
            <div>
                <NavMenu/>
                <Switch>
                    <Route path='/home' component={HomePage}/>
                    <Route path='/catering' component={CateringPage} />
                    <Route path='/menu' component={MenuPage} />
                    <Route path='/order' component={OrderOnlinePage} />
                    <Route path='/contactus' component={ContactUsPage} />
                    <Route path='/reserve' component={ReservationsPage} />
                    <Redirect to="/home"/>
                </Switch>
                <Footer/>
            </div>
        );
    }

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));