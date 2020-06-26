import axios from "axios";

export const FETCHING_ADD_STAR = 'FETCHING_ADD_STAR';
export const FETCHING_STAR_WAR_SUCESS = 'FETCHING_ADD_STAR_SUCESS';
export const FETCHING_STAR_WAR_FAILURE = 'FETCHING_ADD_STAR_FAILURE';






const headers = {
    Accept: "application/json"
  };
export const getStar = () => dispatch => {
    dispatch({ type: FETCHING_ADD_STAR });
    axios
      .get("https://swapi.dev/api/people/", { headers })
      .then(res => {
        console.log(res);
        dispatch({ type: FETCHING_STAR_WAR_SUCESS, payload: res.data.results });
      })
      .catch(err => {
        console.log(err);
       
      });
  };