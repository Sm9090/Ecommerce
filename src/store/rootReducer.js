import { combineReducers } from "redux";
import cartSlice from "./cartSlice";

const rootReducer = combineReducers({
    cartReducer: cartSlice,
})

export default rootReducer