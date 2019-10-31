import {
    GET_LOGS,
    SET_LOADING_LOG,
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

export const addLog = (log) => async dispatch => {

    try {
        //setLoading();         // Doesn't work in this way.
        dispatch(setLoading());
        const res = await fetch("/logs",
                                {
                                    method: "POST",
                                    body: JSON.stringify(log),
                                    headers: {
                                        "Content-Type": "application/json"
                                    }
                                }
        );
        if (res.ok) {
            const data = await res.json();
            dispatch({type: ADD_LOG, payload:data});
        }
        else {
            dispatch({type: LOGS_ERROR,payload: `${res.status}:${res.statusText}`});
        }
    }
    catch (err) {
        dispatch({type: LOGS_ERROR, payload: err.response.data});
    }
};

export const deleteLog = (id) => async dispatch => {
    try {
        //setLoading();         // Doesn't work in this way.
        dispatch(setLoading());
        const res = await fetch(`/logs/${id}`, {
            method: "DELETE"
        });
        if (res.ok) {
            dispatch({type:DELETE_LOG, payload: id});
        }
        else {
            dispatch({type:LOGS_ERROR,payload: `${res.status}:${res.statusText}`});
        }
    }
    catch (err) {
        dispatch({type:LOGS_ERROR, payload:err.response.data});
    }
};

export const updateLog = (log) => async dispatch => {
    try {
        //setLoading();         // Doesn't work in this way.
        dispatch(setLoading());
        const res = await fetch(`/logs/${log.id}`, {
            method: "PUT",
            body: JSON.stringify(log),
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (res.ok) {
            const data = await res.json();
            dispatch({type:UPDATE_LOG, payload: data});
        }
        else {
            dispatch({type:LOGS_ERROR,payload: `${res.status}:${res.statusText}`});
        }
    }
    catch (err) {
        dispatch({type:LOGS_ERROR, payload:err.response.data});
    }
};

export const searchLogs = (text) => async dispatch => {
    try {
        //setLoading();         // Doesn't work in this way.
        dispatch(setLoading());
        const res = await fetch(`/logs?q=${text}`);
        if (res.ok) {
            const data = await res.json();
            dispatch({type:SEARCH_LOGS, payload:data});
        }
        else {
            dispatch({type:LOGS_ERROR,payload: `${res.status}:${res.statusText}`});
        }
    }
    catch (err) {
        dispatch({type:LOGS_ERROR, payload:err.response.data});
    }
};

export const setCurrent = (log) => {
    return {
        type: SET_CURRENT,
        payload: log
    }
};

export const clearCurrent = () => {
    return {
        type: CLEAR_CURRENT
    }
};

export const setLoading = () => {
    return {
        type: SET_LOADING_LOG
    };
};