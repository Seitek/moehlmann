import axios from "axios";
import {
  GET_ERRORS,
  NUTZER_LOADING,
  GET_NUTZER,
  GET_NUTZERS,
  CLEAR_ERRORS
} from "./types";


//Create Nutzer
export const createNutzer = (postData, history) => dispatch => {
    axios
      .post("/api/nutzer", postData)
      .then(res => history.push("/"))
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: { msg: err.response.statusText, status: err.response.status }
        })
      );
  };



// Get Nutzers
export const getNutzers = () => dispatch => {
  dispatch(setNutzerLoading());
  axios
    .get("/api/nutzer")
    .then(res =>
      dispatch({
        type: GET_NUTZERS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_NUTZERS,
        payload: { msg: err.response.statusText, status: err.response.status }
      })
    );
};



// Get Nutzer
export const getNutzer = id => dispatch => {
  dispatch(setNutzerLoading());
  axios
    .get(`/api/nutzer/${id}`)
    .then(res =>
      dispatch({
        type: GET_NUTZER,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_NUTZER,
        payload: { msg: err.response.statusText, status: err.response.status }
      })
    );
};



// Nutzer Loading
export const setNutzerLoading = () => {
  return {
    type: NUTZER_LOADING
  };
};

// Clear errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};

//Delete Post
export const deleteNutzer = (id, history) => dispatch => {
  if (
    window.confirm(
      "Bist Du sicher? Der Nutzer kann nicht wiederhergestellt werden."
    )
  ) {
    axios
      .delete(`/api/nutzer/${id}`)
      .then(res => history.push("/"))
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      );
  }
};
