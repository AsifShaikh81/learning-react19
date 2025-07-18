import { useActionState } from "react"
import { Color } from "../1-component/cp";

function UseActionState(params) {
   //syntax
//    const [state, formAction, isPending] = useActionState(actionFunction, initialState);

const actionFunction = async (prevState , formData)=>{
    const Name = formData.get('NAME');// getting data of name input
    const Pass = formData.get('PASS'); // getting input of password input
    // console.log("actionFunction",  Name,Pass);
    
    await new Promise(res=>setTimeout(res,3000));
    if (Name && Pass) {
        return {message: "data submitted", Name,Pass}
        
    } else {
        return {error:"failed to submit", Name,Pass}
    }

}
const [state,formAction,isPending] = useActionState(actionFunction,undefined);
 console.log(state);
   
    return (
        <>
        {/* when submit button is clicked formAction runs and it calls actionFunction */}
        <form action={formAction}>
            {/* //defaultValue={state?.Name} ---> after submit, the input field value will not get reset */}
            <input  defaultValue={state?.Name} type="text" placeholder="enter name" name="NAME" />
            <br />
            <br />
            <input defaultValue={state?.Pass} type="password" placeholder="enter password" name="PASS" />
            <br />
            <br />
            <button disabled={isPending}>{isPending?"loading....":"submit"}</button>
        </form>
        {
            state?.message && <span style={{color:"green"}}>{state?.message}</span> // check "Theory.txt for explanation"
        }
        {
            state?.error && <span style={{color:'red'}}>{state?.error}</span>  // check "Theory.txt for explanation"
        }
        
        {/* printing data     */}
        <h4>Name :{state?.Name}</h4>
        <h4>Password: {state?.Pass}</h4>
        </>
    )
}
export default  UseActionState;