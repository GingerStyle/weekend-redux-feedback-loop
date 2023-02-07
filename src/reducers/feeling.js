const feeling = (state = 0, action) => {
    if(action.type === 'SET_FEELING'){
        return action.payload;
    }
    return state;
}

export default feeling;