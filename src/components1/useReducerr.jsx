import React,{useReducer} from "react";

const Reducerr =()=>{
const initialState = 0;
    function reducer(state,action){
      switch(action){
        case "add":
            return state +1;
        case "substract":
            return state-1;
        case "reset":
            return 0;
            default :  return state        
      }

    } ;
   const[count,dispatch] = useReducer(reducer,initialState);
    return(<div>
        <h1>hello web developers.</h1>
        <h2>{count}</h2>
        <button onClick={()=>dispatch("add")}>Add</button>
        <button onClick={()=>dispatch("reset")}>Reset</button>
        <button onClick={()=>dispatch("substract")}>Substract</button>
    </div>)
}
export default Reducerr;