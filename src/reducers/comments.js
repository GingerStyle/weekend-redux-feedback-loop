const comments = (state = '', action) => {
    if(action.type === 'SET_COMMENTS'){
        return action.payload;
    }
    return state;
}

export default comments;