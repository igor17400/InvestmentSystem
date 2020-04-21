import { combineReducers } from "redux"
import authReducer from "./authReducers"
import errorReducer from "./errorRedurcers"
// import accountReducer from "./accountReducer";

export default combineReducers({
    auth: authReducer, 
    errors: errorReducer
})