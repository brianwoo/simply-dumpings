import * as ActionTypes from './actionTypes';


const findATableInitState = {
    numOfPeople: 0,
    date: '',
    time: 'Time',
    availTimes: [],
    selectedTimeSlot: '',
    activeTab: 'findTable',
    confirmationNum: ''
};

export const ReserveReducer = (state = findATableInitState, action) => {

    //console.log("payload:", action.payload);

    switch (action.type) {
        case ActionTypes.SET_RESERVE_NUM_PEOPLE:
            return { ...state, numOfPeople: action.payload };
        case ActionTypes.SET_RESERVE_DATE:
            return { ...state, date: action.payload };
        case ActionTypes.SET_RESERVE_TIME:
            return { ...state, time: action.payload };
        case ActionTypes.FIND_A_TABLE:
            return { ...state, 
                date: action.payload.date,
                time: action.payload.time,
                numOfPeople: action.payload.numOfPeople,
                availTimes: action.payload.availTimes
            };
        case ActionTypes.SELECT_TIME_SLOT:
            return { ...state, selectedTimeSlot: action.payload };
        case ActionTypes.SELECT_ACTIVE_TAB:
            return { ...state, activeTab: action.payload };
        case ActionTypes.SET_RESERVE_CONFIRM_NUM:
                return { ...state, confirmationNum: action.payload };                    
        default:
            return state;
    }
};