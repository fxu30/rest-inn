import axios from "axios";
import { 
    loginStart,
    loginSuccess,
    loginFailure,
    logoutStart,
    logoutSuccess,
    logoutFailure } from "./userRedux"
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

export const logout = async (dispatch) => {
    dispatch(logoutStart());
    try {
      const res = await axios.get(`${configData.SERVER_URL}/Auth/logout`);
      dispatch(logoutSuccess(res.data));
    } catch (err) {
      dispatch(logoutFailure());
    }
  };