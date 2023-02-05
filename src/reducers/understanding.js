const understanding = (state = 0, action) => {
    if(action.type === 'SET_UNDERSTANDING'){
        return action.payload;
    }
    return state;
}

export default understanding;