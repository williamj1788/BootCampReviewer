const initialState = {
    user: localStorage.getItem('user') || '',
    
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