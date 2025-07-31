import { useReducer } from "react"

const initialState = 0;
const Reducer = (currentState,action)=>{
 switch (action.type) {
    case "Increment":
        return currentState + 1;
        
    case "Decrement":
        return currentState - 1;
        
    case "Reset":
        return initialState;    
    default:
        console.log("action not match");
        break;
 }
}



function HookReducer() {

    const [state, dispatch] = useReducer(Reducer,initialState);
  return (
    <>
    <h5>Hook-UseReducer</h5>
    <p>Count: {state}</p>
    <button onClick={()=>dispatch({type: "Increment"})}>Increment</button>
    <button onClick={()=>dispatch({type: "Decrement"})}>Decrement</button>
    <button onClick={()=>dispatch({type:"Reset"})}>Reset</button>
    </>
  )
}

export default HookReducer

