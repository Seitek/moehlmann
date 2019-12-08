import { combineReducers } from 'redux';
import nutzerReducer from './nutzerReducer';
import fahrtenReducer from './fahrtenReducer';


export default combineReducers({
    nutzer: nutzerReducer,
    fahrten: fahrtenReducer
});