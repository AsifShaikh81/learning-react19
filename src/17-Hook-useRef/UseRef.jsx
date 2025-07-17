import { useRef } from "react"

export function UseRef() {
    const Inputref = useRef(null);
    const h1ref = useRef(null);
 
    function HandleRef() {
    Inputref.current.focus()
    Inputref.current.placeholder = 'enter password'
    Inputref.current.value = 'asif'
    Inputref.current.style.color = 'red'
 }

 function toggle() {
    if(Inputref.current.style.display!='none'){
        Inputref.current.style.display = 'none'
    } else{
        Inputref.current.style.display = 'inline'
    }

 }

 function H1handler() {
    h1ref.current.style.color = 'green';
 }

    return(
        <>
         
     

        <input ref={Inputref} type="text" />
        <button onClick={HandleRef}>click</button>
        <button onClick={toggle}>Toggle </button>

        <h4 ref={h1ref}>Asif Shaikh </h4>
        <button onClick={H1handler}>h1handler</button>
        </>
    )
}