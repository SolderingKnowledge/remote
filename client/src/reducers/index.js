const initialState = {
    todos: []
  };

const reducer = (state = initialState, action) => {
    const newState = { ...state };

    switch (action.type) {
        case "FETCH_DATA":
            return {
                todos: [...newState.todos,...action.payload],
            }
        case "ADD_DATA":
            return {
                todos: [...newState.todos, action.payload],
            }
        case "DELETE_DATA":
            return {
                todos: [...action.payload],
            }
        case "EDIT_DATA":
            return {
                todos: [...action.payload],
            }
        case "CHANGE_DATA":
            return {
                todos: [...action.payload],
            }
        case "SAVE_DATA":
            return {
                todos: [...action.payload],
            }
        case "COMPLETE_TODO":
            return {
                todos: [...action.payload],
            }
        default:
            return state;
    }
};

export default reducer;
  