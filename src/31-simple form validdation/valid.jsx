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
    // Regular Expression (Regex) is a sequence of characters that forms a search pattern. In React JS, it is used to validate and manipulate input fields by matching user input with defined patterns. 
    // Here what regex doing, it checking "A-z" it means user input should be between A-z and "0-9" it means user input should be between 0-9. No special char are allowed. i = u can use upper and lower case
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

