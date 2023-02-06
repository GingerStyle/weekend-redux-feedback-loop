import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function Feeling() {
    const feelingReducer = useSelector(store => store.feeling);
    const dispatch = useDispatch();
    const history = useHistory();

    const inputValidation = () => {
        if (feelingReducer == ''){
            alert('This field is required');
        } else{
            history.push('/understanding');
        };
    }

    return(
        <>
        <h3>How are you feeling today?</h3>
        <input required value={feelingReducer} onChange={(event) => dispatch({type: 'SET_FEELING', payload: event.target.value})}></input>
        <button onClick={() => inputValidation()}>Next Step</button>
        </>
    );
}

export default Feeling;