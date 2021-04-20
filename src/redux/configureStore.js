import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { CateringReducer } from "./cateringReducer";
import { ContactReducer } from "./contactReducer";
import { MenuReducer } from "./menuReducer";
import { ReserveReducer } from "./reserveReducer";

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            catering: CateringReducer,
            menu: MenuReducer,
            contact: ContactReducer,
            reserve: ReserveReducer
        }),
        applyMiddleware(thunk)
    );

    return store;
}