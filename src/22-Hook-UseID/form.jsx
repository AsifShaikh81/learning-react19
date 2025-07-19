import { useId } from "react";

 function Form() {
    const ID = useId()
    return (
        <>
        <form action="">
            <label htmlFor={ID +"name"}>Name:</label>
            <input id={ID +"name"} type="text" placeholder="Enter name "/>
            <br />
            <br />
            <label htmlFor={ID+"password"}>Password:</label>
            <input id={ID+"password"} type="password" placeholder="Enter password "/>
        </form>
        </>
    )
    
}

export default Form;

// useId ek React hook hai jo unique ID generate karta hai.
// Is ID ko aap elements ke id, aria-labelledby, ya htmlFor jaise accessibility attributes mein use kar sakte ho.

// use case