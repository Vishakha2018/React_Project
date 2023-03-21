import React , {useReducer} from 'react';
import "./style.css"

const reducer=(state,action)=>{
    if(action.typ==="INCR"){
        state=state+1;
    }
    if(state>0 && action.typ==="DECR"){
        state=state-1;
    }
    return state;
}
const UseReducer = () => {
    const initialData=5;

    //state is for store initialdata,dispatch is for point reducer function which update the state data 
    //It is similar to useState (for small task use useState and for big tasks or for redux use useReducer)
    const [state, dispatch] = useReducer(reducer, initialData);
  return (
    <>
    <div className='center_div'>
        <p>
            {state}
        </p>
        <div className='button2' onClick={()=>dispatch({typ:"INCR"})}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            INCR
        </div>
        <div className='button2' onClick={()=>dispatch({typ:"DECR"})}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            DECR
        </div>
      </div>
    </>
  );
}

export default UseReducer;
