import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function Support() {
    const support = useSelector(store => store.support);
    const history = useHistory();
    const dispatch = useDispatch();

    //function to make sure that a numbered selection was made before moving to next route
    const inputValidation = () => {
        if(support == 0 || support == 'select' ) {
            alert('You must choose numbers from 1 to 5');
        }else{
            history.push('/comments');
        }
    }
    
    return(
        <>
            <h3>How supported do you feel?</h3>
            <h4>1 is not supported at all. 5 is very well supported.</h4>
            <br></br>
            <select id="valueList" onChange={(event) => dispatch({type: 'SET_SUPPORT', payload: event.target.value})}>
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

export default Support;