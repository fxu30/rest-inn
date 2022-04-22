import axios from "axios";
import { 
    loginStart,
    loginSuccess,
    loginFailure,
    logoutStart,
    logoutSuccess,
    resetError } from "./userRedux"
import configData from "../config.json"

export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try{
        const res = await axios.post(`${configData.SERVER_URL}/Auth/login`, user)
        dispatch(loginSuccess(res.data))
    }catch(err){
        dispatch(loginFailure())
    }
}

export const logout = (dispatch) => {
  dispatch(logoutStart());
  dispatch(logoutSuccess());
  
};

export const reset = (dispatch) => {
  dispatch(resetError());
}