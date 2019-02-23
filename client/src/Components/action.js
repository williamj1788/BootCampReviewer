export function setUser(payload) {
    return { type: "SET_USER", payload };
};
export function setCampCards(payload){
    return { type: 'SET_CAMP_CARDS', payload};
}
export function setUsersDashboard(payload){
    return { type: 'SET_USERS_DASHBOARD', payload};
}
export function setBootcampsDashboard(payload){
    return { type: 'SET_BOOTCAMPS_DASHBOARD', payload};
}
export function setCampInfo(payload){
    return { type: 'SET_CAMP_INFO', payload};
}