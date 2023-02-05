const support = (state = 0, action) => {
    if(action.type === 'SET_SUPPORT'){
        return action.payload;
    }
    return state;
}

export default support;