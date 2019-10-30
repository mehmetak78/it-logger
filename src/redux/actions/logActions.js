import {
    GET_LOGS,
    SET_LOADING,
    LOGS_ERROR,
    ADD_LOG,
    DELETE_LOG,
    UPDATE_LOG,
    SEARCH_LOGS,
    SET_CURRENT,
    CLEAR_CURRENT
} from './actionTypes';

export const getLogs = () => async dispatch => {
    try {
        //setLoading();         // Doesn't work in this way.
        dispatch(setLoading());
        const res = await fetch("/logs");
        if (res.ok) {
            const data = await res.json();
            dispatch({type:GET_LOGS, payload:data});
        }
        else {
            dispatch({type:LOGS_ERROR,payload: `${res.status}:${res.statusText}`});
        }
    }
    catch (err) {
        dispatch({type:LOGS_ERROR, payload:err.response.data});
    }
};


export const setLoading = () => {
    return {
        type: SET_LOADING
    };
};