import {
    GET_FAHRT,
    GET_FAHRTEN,
    FAHRT_LOADING

} from '../actions/types';

const initialState = {
    fahrt: {},
    fahrten: [],
    loading: false,
}


export default function (state = initialState, action) {
    switch (action.type) {
        case FAHRT_LOADING:
            return {
                ...state,
                loading: true
            };

        case GET_FAHRT:
            return {
                ...state,
                fahrt: action.payload,
                loading: false
            };

        case GET_FAHRTEN:
            return {
                ...state,
                fahrten: action.payload,
                loading: false
            };
        
        default:
            return state;
    }
}