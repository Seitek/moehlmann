import { combineReducers } from 'redux';
import nutzerReducer from './nutzerReducer';
import fahrtenReducer from './fahrtenReducer';
import kundenReducer from './kundenReducer';


export default combineReducers({
    nutzer: nutzerReducer,
    fahrten: fahrtenReducer,
    kunden: kundenReducer
});