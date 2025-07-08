import { useState } from "react";

function Checkbox() {
    const [skills,setSkills] = useState([])

    function handleCheckbox(event) {
        console.log(event.target.value , event.target.checked);
        if (event.target.checked) {
            setSkills([...skills, event.target.value])
        }else{
             setSkills(skills.filter((item)=>item !==event.target.value)); 

         }
    }

    return (
        <div > 
            <input onChange={handleCheckbox} type="checkbox"  id="javaScript" value="javaScript" />
            <label htmlFor="javaScript">javaScript</label>
           <br />
           <br />
            <input  onChange={handleCheckbox} type="checkbox"  id="Reactjs" value="Reactjs" />
            <label htmlFor="Reactjs">Reactjs</label>
           <br />
           <br />
           
            <input  onChange={handleCheckbox} type="checkbox"  id="Python" value="Python" />
            <label htmlFor="Python">Python</label>
           <br />
           <br />
           
            <input onChange={handleCheckbox} type="checkbox"  id="Java" value="Java" />
            <label htmlFor="Java">Java</label>

            <p>{skills.toString()}</p>
            {/* <button onClick={()=>setSkills("")}>Clear</button> */}
        </div>
    )
}
export default Checkbox;