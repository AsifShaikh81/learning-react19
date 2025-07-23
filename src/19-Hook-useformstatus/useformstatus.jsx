import { useFormStatus } from "react-dom";
function Useformst() {
    
    async function handlesubmit() {
       await new Promise(res=>setTimeout(res,3000));
       console.log('submited');
       
       
     
    }
    
    function CustomForm() {
        const {pending} = useFormStatus();
        return (
            <>
                <input type="text" placeholder="enter name"/>
            <br />
            <br />
            <input type="password" placeholder="enter password" />
            <br />
            <br />
            <button disabled={pending}>{pending?'submitting...':'submit'}</button>
            </>
        )
    }

    return(
        <>
        <h4>useFormStatus hook</h4>
        <form action={handlesubmit}>
        <CustomForm/>
        </form>
     
        </>
    )
}
export default Useformst;

//useFormStatus hook ----> work only inside form tag 
//https://react.dev/reference/react-dom/hooks/useFormStatus --->read for clear understanding

//waht is usefomm status ?
//basicly it handles the loading state ,when i click submit it wait for the couple of secs and while waiting it changes the state like disabling button to let user know its been submitted 