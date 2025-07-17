import { useRef } from "react"; 
import UserInput from "./UserInput";
function ForwardRef() {
    
    const Fref = useRef(null);
    
    const handel = ()=>{
        Fref.current.value = 'Asif'
    }
    
    return (
        <>
        <h4>forward ref</h4>
       <UserInput  ref={Fref}/>
        <button onClick={handel}>Click</button>
        </>
    )
}

export default ForwardRef;

//  forwardRef is use with useref to pass data from parent component to child component 
// why it is used
// if components are sperated, like in example u can see forwardref and userinput are 2 diff seprated components 
// here  ForwardRef is parent component and Userlnput.jsx is child component
