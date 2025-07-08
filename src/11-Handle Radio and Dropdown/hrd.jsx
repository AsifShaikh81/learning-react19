import { useState } from "react"
// name="gender" is same in both inputs, so only one can be selected.
// checked={gender === "male"} means if state is "male", then button is selected.

function Hrd() {
    const [gender, setGender] = useState('male') // default value is set so it already selected
    const [city, setCity] = useState();
    function handle(e) {
        console.log(e.target.value); //for testing
        setGender(e.target.value)
        
    }
    return(
   <div>
     <p>Gender: {gender}</p>
    <input onChange={handle} type="radio" name="gender" id="male" value="male" checked={gender=="male"} />
    <label htmlFor="male">Male</label>
    
    <input  onChange={handle} type="radio" name="gender" id="female" value="female" checked={gender=="female"}/>
    <label htmlFor="female">Female</label>
    
    <p>City: {city}</p> 
    <select onChange={(event)=>{setCity(event.target.value)}}>

    <option  value="Mumbai">Mumbai</option>
    <option value="Delhi">Delhi</option>
    <option value="Noida">Noida</option>

    </select>   


   </div>


    )
}

export default Hrd