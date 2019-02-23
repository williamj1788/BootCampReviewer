
const initialState = {
    user: localStorage.getItem('user') || '',
    campCards: null,
    campInfo: {},
    usersNames: null,
    bootcampsNames: null,
};



function userReducer(state = initialState, action) {
    if(action.type === 'SET_USER'){
        return Object.assign({}, state, {
            user: action.payload
        });
    }else if(action.type === 'SET_CAMP_CARDS'){
        return Object.assign({}, state, {
            campCards: action.payload
        });
    }else if(action.type === 'SET_USERS_DASHBOARD'){
        return Object.assign({}, state, {
            usersNames: action.payload
        });
    }else if(action.type === 'SET_BOOTCAMPS_DASHBOARD'){
        return Object.assign({}, state, {
            bootcampsNames: action.payload
        });
    }else if(action.type === 'SET_CAMP_INFO'){
        return Object.assign({}, state, {
            campInfo: action.payload
        });
    }else if(action.type === 'ADD_REVIEW'){
        let copy = Object.assign({}, state.campInfo);
        copy.reviews.push(action.payload);
        console.log(action.payload);
        console.log(copy);
        return Object.assign({}, state, {
            campInfo: copy
        });
    }else if(action.type === 'UPDATE_CAMPS'){
        let copy = state.campCards;
        if(!copy){
            return state;
        }
        copy.push(action.payload);
        return Object.assign({}, state, {
            campCards: copy
        });
    }
    return state;
};

export default userReducer;