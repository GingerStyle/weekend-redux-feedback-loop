import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function Feeling() {
    const feeling = useSelector(store => store.feeling);
    const history = useHistory();
    const dispatch = useDispatch();

    //function to make sure that a numbered selection was made before moving to next route
    const inputValidation = () => {
        if(feeling == 0 || feeling == 'select' ) {
            alert('You must choose numbers from 1 to 5');
        }else{
            history.push('/understanding');
        }
    }
    
    return(
        <>
            <h3>How well do you feel today?</h3>
            <h4>1 is not well. 5 is very well.</h4>
            <br></br>
            <select id="valueList" onChange={(event) => dispatch({type: 'SET_FEELING', payload: event.target.value})}>
                <option value='select'>Select</option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
            </select>
            <button onClick={() => inputValidation()}>Next Step</button>
        </>        
    );
}

export default Feeling;