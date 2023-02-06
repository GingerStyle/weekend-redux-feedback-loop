import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function Understanding() {
    const understanding = useSelector(store => store.understanding);
    const history = useHistory();
    const dispatch = useDispatch();

    const inputValidation = () => {
        if(understanding == 0 || understanding == 'select' ) {
            alert('You must choose numbers from 1 to 5');
        }else{
            history.push('/support');
        }
    }
    
    return(
        <>
            <h3>How well are you understanding the content?</h3>
            <h4>1 is not understanding. 5 is well understood.</h4>
            <br></br>
            <select id="valueList" onChange={(event) => dispatch({type: 'SET_UNDERSTANDING', payload: event.target.value})}>
                <option value ='select'>Select</option>
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

export default Understanding;