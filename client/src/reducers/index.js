const initialState = {
    todos: []
  };

const reducer = (state = initialState, action) => {
    const newState = { ...state };

    switch (action.type) {
        case "FETCH_DATA":
            return {
                todos: [...state.todos,...action.payload],
            }
        case "ADD_DATA":
            return {
                todos: [...newState.todos, action.payload],
            }
        case "DELETE_DATA":
            return {
                todos: [...action.payload],
            }
        default:
            return state;
    }
    // return newState;
};

export default reducer;
  