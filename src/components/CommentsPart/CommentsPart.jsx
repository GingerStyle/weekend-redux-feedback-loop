import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function comments() {
    const dispatch = useDispatch();
    const history = useHistory();

    return(
        <>
            <h3>Do you have any comments that you would like to share with us?</h3>
            <textarea id='comments-input' onChange={(event) => dispatch({type: 'SET_COMMENTS', payload: event.target.value})}></textarea>
            <button onClick={() => history.push('/review')}>Next Step</button>
        </>
    );
}

export default comments;