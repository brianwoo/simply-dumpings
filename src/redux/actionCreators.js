import MenuData from '../data/menuData';
import { randomTimeData } from '../data/timeData';
import { submitReservation as submitReservationToServer } from '../server/server';
import { submitCateringInquery as submitCateringInqueryToServer } from '../server/server';
import { submitContactInquery as submitContactInqueryToServer } from '../server/server';
import * as ActionTypes from './actionTypes';

export const submitCateringInquery = (cateringInquery) => (dispatch) => {
    submitCateringInqueryToServer(cateringInquery);
    dispatch(addCateringInquery(cateringInquery));
};

export const submitContactInquery = (contactInquery) => (dispatch) => {
    submitContactInqueryToServer(contactInquery);
    dispatch(addContactInquery(contactInquery));
};


export const addCateringInquery = (cateringInquery) => ({
    type: ActionTypes.ADD_CATERING_INQUERY,
    payload: cateringInquery
});

export const addContactInquery = (contactInquery) => ({
    type: ActionTypes.ADD_CONTACT_INQUERY,
    payload: contactInquery
});


export const findATable = (date, time, numOfPeople) => (dispatch) => {
    const availTimes = randomTimeData();
    dispatch(getTableAvailTimes(date, time, numOfPeople, availTimes));
};


export const getTableAvailTimes = (date, time, numOfPeople, availTimes) => ({
    type: ActionTypes.FIND_A_TABLE,
    payload: {
        date: date,
        time: time,
        numOfPeople: numOfPeople,
        availTimes: availTimes
    }
});

export const submitReservation = (firstName, lastName, phone, email, occasion, specialRequest) => (dispatch, getState) => {

    // Submit reservation
    let reserve = getState().reserve;
    let selectedTimeSlot = reserve.selectedTimeSlot;
    let reserveDate = reserve.date;
    let numOfPeople = reserve.numOfPeople;
    let submitReservationResult = submitReservationToServer(reserveDate, 
                                                            selectedTimeSlot, 
                                                            numOfPeople, 
                                                            firstName, 
                                                            lastName, 
                                                            phone, 
                                                            email, 
                                                            occasion, 
                                                            specialRequest);

    dispatch(setReserveConfirmationNum(submitReservationResult.confirmationNum));
    dispatch(selectActiveTab('yourReservation'));
};


export const setReserveConfirmationNum = (confirmationNum) => ({
    type: ActionTypes.SET_RESERVE_CONFIRM_NUM,
    payload: confirmationNum
});

export const selectReserveTimeSlot = (selectedTimeSlot) => ({
    type: ActionTypes.SELECT_TIME_SLOT,
    payload: selectedTimeSlot
});

export const selectActiveTab = (tab) => ({
    type: ActionTypes.SELECT_ACTIVE_TAB,
    payload: tab
});

export const setReserveNumOfPeople = (numOfPeople) => ({
    type: ActionTypes.SET_RESERVE_NUM_PEOPLE,
    payload: numOfPeople
});

export const setReserveDate = (date) => ({
    type: ActionTypes.SET_RESERVE_DATE,
    payload: date
});

export const setReserveTime = (time) => ({
    type: ActionTypes.SET_RESERVE_TIME,
    payload: time
});

export const addMenuItems = () => (dispatch) => {

    let appetizerDishes = [];
    let dumplingDishes = [];
    let riceDishes = [];
    let noodleDishes = [];
    let meatDishes = [];
    let dessertDishes = [];

    MenuData.forEach((currVal) => {
        if (currVal.category === 'appetizer')
            appetizerDishes.push(currVal);
        else if (currVal.category === 'dumpling')
            dumplingDishes.push(currVal);
        else if (currVal.category === 'rice')
            riceDishes.push(currVal);            
        else if (currVal.category === 'noodles')
            noodleDishes.push(currVal);            
        else if (currVal.category === 'meat')
            meatDishes.push(currVal);            
        else if (currVal.category === 'dessert')
            dessertDishes.push(currVal);            
    });

    dispatch(addMenuItemsAppetizer(appetizerDishes));
    dispatch(addMenuItemsDumpling(dumplingDishes));
    dispatch(addMenuItemsRice(riceDishes));
    dispatch(addMenuItemsNoodle(noodleDishes));
    dispatch(addMenuItemsMeat(meatDishes));
    dispatch(addMenuItemsDessert(dessertDishes));
};

export const addMenuItemsAppetizer = (appetizerDishes) => ({
    type: ActionTypes.ADD_MENU_APPETIZER,
    payload: appetizerDishes
});

export const addMenuItemsDumpling = (dumplingDishes) => ({
    type: ActionTypes.ADD_MENU_DUMPLING,
    payload: dumplingDishes
});

export const addMenuItemsRice = (riceDishes) => ({
    type: ActionTypes.ADD_MENU_RICE,
    payload: riceDishes
});

export const addMenuItemsNoodle = (noodleDishes) => ({
    type: ActionTypes.ADD_MENU_NOODLE,
    payload: noodleDishes
});

export const addMenuItemsMeat = (meatDishes) => ({
    type: ActionTypes.ADD_MENU_MEAT,
    payload: meatDishes
});

export const addMenuItemsDessert = (dessertDishes) => ({
    type: ActionTypes.ADD_MENU_DESSERT,
    payload: dessertDishes
});