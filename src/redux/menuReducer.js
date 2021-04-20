import * as ActionTypes from './actionTypes';


const initialState = {
    appetizer: [],
    dumpling: [],
    rice: [],
    noodle: [],
    meat: [],
    dessert: []
};


export const MenuReducer = (state = initialState, action) => {

    switch (action.type) {
        case ActionTypes.ADD_MENU_APPETIZER:
            return {...state, appetizer: action.payload};
        case ActionTypes.ADD_MENU_DUMPLING:
            return {...state, dumpling: action.payload};
        case ActionTypes.ADD_MENU_RICE:
            return {...state, rice: action.payload};
        case ActionTypes.ADD_MENU_NOODLE:
            return {...state, noodle: action.payload};
        case ActionTypes.ADD_MENU_MEAT:
            return {...state, meat: action.payload};
        case ActionTypes.ADD_MENU_DESSERT:
            return {...state, dessert: action.payload};
        default:
            return state;
    }
};