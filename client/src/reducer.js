const initialState = {
    user: ""
};
export function setUser(payload) {
    return { type: "SET_USER", payload };
};
function userReducer(state = initialState, action) {
    if(action.type === 'SET_USER'){
        return Object.assign({}, state, {
            user: action.payload
        });
    }
    return state;
};

export default userReducer;