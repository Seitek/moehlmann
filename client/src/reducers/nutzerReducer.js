import {
    GET_NUTZER,
    GET_NUTZERS,
    NUTZER_LOADING

} from '../actions/types';

const initialState = {
    nutzer: {},
    nutzers: [],
    loading: false,
}


export default function (state = initialState, action) {
    switch (action.type) {
        case NUTZER_LOADING:
            return {
                ...state,
                loading: true
            };

        case GET_NUTZER:
            return {
                ...state,
                nutzer: action.payload,
                loading: false
            };

        case GET_NUTZERS:
            return {
                ...state,
                nutzers: action.payload,
                loading: false
            };
        
        default:
            return state;
    }
}