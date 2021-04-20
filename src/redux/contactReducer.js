import * as ActionTypes from './actionTypes';


export const ContactReducer = (
    state = {
        inqueryData: null,
        inquerySubmitted: false
    },
    action) => {
        switch (action.type) {
            case ActionTypes.ADD_CONTACT_INQUERY:
                return {...state, inqueryData: action.payload, inquerySubmitted: true};
            default:
                return state;
        }
    }