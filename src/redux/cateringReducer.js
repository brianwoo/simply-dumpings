import * as ActionTypes from './actionTypes';


export const CateringReducer = (
    state = {
        inqueryData: null,
        inquerySubmitted: false
    },
    action) => {

        switch (action.type) {
            case ActionTypes.ADD_CATERING_INQUERY:
                return {...state, inqueryData: action.payload, inquerySubmitted: true};
            default:
                return state;
        }
    }