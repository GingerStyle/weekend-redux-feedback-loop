import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from 'axios';

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
        //move to welcome screen
        history.push('/');
    }

    //function to handle when the Submit Feedback button is pressed
    const submitFeedback = () => {
        axios.post('/feedback', {
            feelings: {feeling},
            understand: {understanding},
            supportLevel: {support},
            comment: {comments}
        })
        .then(() => {
            //clear values
            dispatch({type: 'SET_FEELING', payload: ''});
            dispatch({type: 'SET_UNDERSTANDING', payload: 0});
            dispatch({type: 'SET_SUPPORT', payload: 0});
            dispatch({type: 'SET_COMMENTS', payload: ''});
            //move to feedback submission success screen
            history.push('/feedback');
        }).catch((error) => {
            console.log('error with adding feedback to database', error);
        });
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
            <br></br>
            <button onClick={() => changeFeedback()}>Change Feedback</button>
            <button onClick={() => submitFeedback()}>Submit Feedback</button>
        </>
    );
}

export default review;