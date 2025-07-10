import { useState, useEffect } from "react";


export function Hook() {
    
const [count, setCount] = useState(0);
const [data, setData] = useState(0);

function callOnce(){
    console.log("call once");
    
}
function forCount (){
    console.log("i Will Listen Only When Count Button Is Clicked");
    }
// !what this example shows:
// jab bhi mein count button pe click karta hoon ye pura component re-render hota hai and callOnce() function ek baar call hone ki bajaye woh bar bar call hora hai jab bhi component re-render hota hai , this what we call side effects and to handel this we use "useEffect" hook 
// callOnce();//* this will cause issue

useEffect(()=>{
    callOnce();
    
},[]) //*[]- this means it will run only once    

useEffect(()=>{
    forCount();
}, [count]) //*[count]- forCount() function will update only when count button is clicked


return (
    <div>
    <button onClick={()=>{setCount(count+1)}}>Count:{count}</button>
    <button onClick={()=>{setData(data+1)}}>Data:{data}</button>
    </div>

)

}