import { useState } from "react"
import './style.css'

export function FormValidation (params) {
    const [name, setName] = useState();
    const [nameErr, setNameErr] = useState()
   
    const [pass, setPass] = useState();
    const [passErr, setPassErr] = useState()
    function handelName(e) {
        setName(e.target.value)
        if (e.target.value.length>5) {
            setNameErr('name exceed 5 char')
            
        } else {
            setNameErr('')
            
        }
    }

    const regex = /^[A-Z0-9]+$/i;
    const handelPassword = (e)=>{
        setPass(e.target.value)
        if (regex.test(e.target.value.length>5)){
            setPassErr("special character not allowed")
            
        } else {
            setPassErr("")
        }
    }
    
    console.log(name);
    console.log(pass);
    return (
        <>
        <label htmlFor="name"></label>
        <input className={nameErr?"error":null} type="text" id='name' placeholder="enter name" onChange={handelName}   />
        <br />
        <span className={nameErr?"span-text":null}>{nameErr}</span>
        <br />
        <br />
        
        <label htmlFor="password"></label>
        <input className={passErr?"error":null} type="text" id='password' placeholder="enter name" onChange={handelPassword} />
        <br />
        <span className={passErr?"span-text":null} >{passErr}</span>
        <br />
        <br />
        <button disabled={nameErr || passErr} >Login</button>
        </>
    )
    
}

