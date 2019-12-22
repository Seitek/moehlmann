import {
    GET_KUNDE,
    GET_KUNDEN,
    KUNDEN_LOADING

} from '../actions/types';

const initialState = {
    kunde: {},
    kunden: [],
    loading: false,
}


export default function (state = initialState, action) {
    switch (action.type) {
        case KUNDEN_LOADING:
            return {
                ...state,
                loading: true
            };

        case GET_KUNDE:
            return {
                ...state,
                kunde: action.payload,
                loading: false
            };

        case GET_KUNDEN:
            return {
                ...state,
                kunden: action.payload,
                loading: false
            };
        
        default:
            return state;
    }
}