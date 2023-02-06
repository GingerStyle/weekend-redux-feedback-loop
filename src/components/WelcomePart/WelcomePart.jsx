import { useHistory } from "react-router-dom";

function WelcomePart(){
    const history = useHistory();

    return(
        <>
            <h2>Welcome! Click the button to add new feedback.</h2>
            <button onClick={() => history.push('/feeling')}>Add New Feedback</button>
        </>
    );
}

export default WelcomePart;