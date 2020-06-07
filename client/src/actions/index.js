import axios from "axios";

export function fetchData () {
    return async dispatch => {
        const res = await axios.get("http://localhost:5000/todo");
        dispatch({ type: "FETCH_DATA", payload: res.data });
    };
}

export function addData (text) {
    return async dispatch => {
        const res = await axios.post("http://localhost:5000/todo/add", {
            text: text,
        });
        dispatch({ type: "ADD_DATA", payload: res.data });
    };
}

export function deleteData (id) {
    return async dispatch => {
        const res = await axios.delete(`http://localhost:5000/todo/${id}`);
        dispatch({ type: "DELETE_DATA", payload: res.data });
    };
}

export function editData (id) {
    return async dispatch => {
        const res = await axios.put(`http://localhost:5000/todo/${id}`);
        dispatch({ type: "EDIT_DATA", payload: res.data });
    };
}

export function changeData (newTodos) {
    return dispatch => {
        dispatch({ type: "CHANGE_DATA", payload: newTodos});
    };
}

export function saveData ( id, text ) {
    return async dispatch => {
        const res = await axios.post(`http://localhost:5000/todo/${id}`, {
            text: text
        });
        dispatch({ type: "SAVE_DATA", payload: res.data});
    };
}

export function completeTodo ( id ) {
    return async dispatch => {
        const res = await axios.put(`http://localhost:5000/todo/complete/${id}`);
        dispatch({ type: "COMPLETE_TODO", payload: res.data});
    };
}

export function incrementPriority ( id ) {
    return dispatch => {
    // return async dispatch => {
        // const res = await axios.put(`http://localhost:5000/todo/decrement/${id}`);
        // dispatch({ type: "INCREMENT_PRIORITY", payload: res.data });
        dispatch({ type: "INCREMENT_PRIORITY", id: id });
    };
}

export function decrementPriority ( id ) {
    return async dispatch => {
        // const res = await axios.put(`http://localhost:5000/todo/decrement/${id}`);
        dispatch({ type: "DECREMENT_PRIORITY", id });
    };
}

