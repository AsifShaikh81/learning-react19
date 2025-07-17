import { useRef } from "react";

export  function UnComponent2() {
        const Userrefer = useRef(null);
        const Passrefer = useRef(null);
        
        function handel(event) {
            event.preventDefault() // ---> this prevent from loading after submit
            
           const user= Userrefer.current.value
           const pass= Passrefer.current.value
           
           console.log("useRef:" ,user, pass);
        }
    
    return(
   
        <>
        <form action="">
            <p>uncontrolled component with useref </p>
            <input type="text"  ref={Userrefer} id="userName" placeholder="enter name" />
            <br />
            <br />  
            <input type="password"ref={Passrefer} id="userPass" placeholder="enter password" />
            <br />
            <br />
            <button onClick={handel}>Submit</button>
        </form>
        </>
    )
}