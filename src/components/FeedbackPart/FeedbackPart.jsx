import { useHistory } from "react-router-dom";

function Feedback() {
const history = useHistory();

    return(
        <>
        <h3>Feedback submission success!</h3>
        <br></br>
        <button onClick={() => history.push('/')}>Add New Feedback</button>
        </>
    );
}

export default Feedback;