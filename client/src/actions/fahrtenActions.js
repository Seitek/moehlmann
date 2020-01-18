import axios from "axios";
import {
  GET_ERRORS,
  FAHRT_LOADING,
  GET_FAHRT,
  GET_FAHRTEN,
  CLEAR_ERRORS
} from "./types";


//Create Fahrt
export const createFahrt = (postData, history) => dispatch => {
    axios
      .post("/api/fahrten", postData)
      .then(res => history.push("/"))
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: { msg: err.response.statusText, status: err.response.status }
        })
      );
  };


  //Fahrt abschließen
export const completeFahrt = (auftragnr, history) => dispatch => {
  if (
    window.confirm(
      "Bist Du sicher?"
    )
  ){
    axios
    .post(`/api/fahrten/${auftragnr}`)
    .then(res => history.push("/"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: { msg: err.response.statusText, status: err.response.status }
      })
    )}};

     //Fahrt abbrechen
export const abortFahrt = (auftragnr, history) => dispatch => {
  if (
    window.confirm(
      "Bist Du sicher?"
    )
  ){
    axios
    .post(`/api/fahrten/abbruch/${auftragnr}`)
    .then(res => history.push("/"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: { msg: err.response.statusText, status: err.response.status }
      })
    )}};



// Get Nutzers
export const getFahrten = () => dispatch => {
  dispatch(setFahrtenLoading());
  axios
    .get("/api/fahrten")
    .then(res =>
      dispatch({
        type: GET_FAHRTEN,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_FAHRTEN,
        payload: { msg: err.response.statusText, status: err.response.status }
      })
    );
};



// Get Nutzer
export const getFahrt = id => dispatch => {
  dispatch(setFahrtenLoading());
  axios
    .get(`/api/fahrten/${id}`)
    .then(res =>
      dispatch({
        type: GET_FAHRT,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_FAHRT,
        payload: { msg: err.response.statusText, status: err.response.status }
      })
    );
};



// Nutzer Loading
export const setFahrtenLoading = () => {
  return {
    type: FAHRT_LOADING
  };
};

// Clear errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};

//Delete Post
export const deleteFahrt = (id, history) => dispatch => {
  if (
    window.confirm(
      "Bist Du sicher? Die Fahrt kann nicht wiederhergestellt werden."
    )
  ) {
    axios
      .delete(`/api/fahrten/${id}`)
      .then(res => history.push("/"))
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      );
  }
};
