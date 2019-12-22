import axios from "axios";
import {
  GET_ERRORS,
  KUNDEN_LOADING,
  GET_KUNDE,
  GET_KUNDEN,
  CLEAR_ERRORS
} from "./types";


//Create Nutzer
export const createKunden = (kundenData, history) => dispatch => {
    axios
      .post("/api/kunden", kundenData)
      .then(res => history.push("/"))
      .catch(err =>
        dispatch(console.log(err.response.statusText))
      );
  };



// Get Nutzers
export const getKunden = () => dispatch => {
  dispatch(setKundeLoading());
  axios
    .get("/api/kunden")
    .then(res =>
      dispatch({
        type: GET_KUNDEN,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_KUNDEN,
        payload: { msg: err.response.statusText, status: err.response.status }
      })
    );
};



// Get Nutzer
export const getKunde = id => dispatch => {
  dispatch(setKundeLoading());
  axios
    .get(`/api/kunden/${id}`)
    .then(res =>
      dispatch({
        type: GET_KUNDE,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_KUNDE,
        payload: { msg: err.response.statusText, status: err.response.status }
      })
    );
};



// Nutzer Loading
export const setKundeLoading = () => {
  return {
    type: KUNDEN_LOADING
  };
};

// Clear errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};

//Delete Post
export const deleteKunden = (id, history) => dispatch => {
  if (
    window.confirm(
      "Bist Du sicher? Der Kunde kann nicht wiederhergestellt werden."
    )
  ) {
    axios
      .delete(`/api/kunden/${id}`)
      .then(res => history.push("/"))
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      );
  }
};
