import { createStore } from "redux";
import {GET_STAR } from './actions/actions';
import {FETCHING_STAR_WAR_SUCESS} from "./actions/actions"

const initialState = {
    list:[]
};
    

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
      
        case FETCHING_STAR_WAR_SUCESS:
            return {
              ...state,
              list: action.payload,
              
            };
      default:
        return state;
    }
  };