import { combineReducers } from "redux";
import cartSlice from "./cartSlice";
import userSlice from "./userSlice";


const rootReducer = combineReducers({
    cartReducer: cartSlice,
    userReducer: userSlice,
})

export default rootReducer