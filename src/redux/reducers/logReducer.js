import {
    GET_LOGS,
    LOGS_ERROR,
    SET_LOADING_LOG,
    ADD_LOG,
    DELETE_LOG,
    UPDATE_LOG,
    SEARCH_LOGS,
    SET_CURRENT,
    CLEAR_CURRENT
} from "../actions/actionTypes";

const initialState =
    {
        logs: null,
        current: null,
        loading: false,
        error: null
    };

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_LOGS:
            return {
                ...state,
                logs: action.payload,
                loading: false
            };
        case ADD_LOG:
            return {
                ...state,
                logs: [...state.logs, action.payload],
                loading: false
            };
        case DELETE_LOG:
            return {
                ...state,
                logs: state.logs.filter((log => log.id !== action.payload)),
                loading: false
            };
        case UPDATE_LOG:
            return {
                ...state,
                logs: state.logs.map(log =>
                                         log.id === action.payload.id ? action.payload : log
                ),
                loading: false
            };
        case SEARCH_LOGS:
            return {
                ...state,
                logs: action.payload,
                loading: false
            };
        case SET_CURRENT:
            return {
                ...state,
                current: action.payload
            };
        case CLEAR_CURRENT:
            return {
                ...state,
                current: null
            };
        case SET_LOADING_LOG:
            return {
                ...state,
                loading: true
            };
        case LOGS_ERROR:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
}