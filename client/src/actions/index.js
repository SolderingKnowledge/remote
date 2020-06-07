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