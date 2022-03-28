const defaultState = {
    userName: localStorage.getItem("username"),
};

const loginReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "login":
            return { ...state, userName: action.data };
        default:
            return state;
    }
};

export default loginReducer;
