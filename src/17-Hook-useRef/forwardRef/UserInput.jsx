//--------------old method--------------

// import { forwardRef } from "react";
// function UserInpurt(props,Fref) {
//     return (
//         <>
//          <input ref={Fref} type="text" /> // here's a diff --->"ref={Fref}"
//         </>
//     )
// }

// export default forwardRef(UserInpurt);
//--------------old method--------------

// -------------new method------------

function UserInput(props) {
    return(
        <>
     <input ref={props.ref} type="text" />  {/*  here's a diff --->"ref={props.ref}" */}
    </>
        
    )
    
}
export default UserInput;
// -------------new method------------
// new mwthod work only in react V19