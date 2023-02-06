import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function review() {
    const feeling = useSelector(store => store.feeling);
    const understanding = useSelector(store => store.understanding);
    const support = useSelector(store => store.support);
    const comments = useSelector(store => store.comments);
    const dispatch = useDispatch();
    const history = useHistory();

    //function to handle what happens when the Change Feedback button is pressed
    const changeFeedback = () => {
        //clear values to start over
        dispatch({type: 'SET_FEELING', payload: ''});
        dispatch({type: 'SET_UNDERSTANDING', payload: 0});
        dispatch({type: 'SET_SUPPORT', payload: 0});
        dispatch({type: 'SET_COMMENTS', payload: ''});
        history.push('/');
    }

    //function to handle when the Submit Feedback button is pressed
    const submitFeedback = () => {
        history.push('/')
    }

    return(
        <>
            <h3>Let's review your feedback.</h3>
            <br></br>
            You reported feeling: {feeling}<br></br>
            Level of understanding: {understanding}<br></br>
            Level of support: {support}<br></br>
            Comments: {comments}
            <br></br>
            <button onClick={() => changeFeedback()}>Change Feedback</button>
            <button onClick={() => submitFeedback()}>Submit Feedback</button>
        </>
    );
}

export default review;