
import { useState } from "react";

function DynamicInline() {
  
   const [ctheme,setCtheme] = useState({
        border: "1px solid #ccc",
          width: "200px",
          boxShadow: "1px 2px 3px 0px #cccccc57",
          margin: "10px",
          
   });
   const [textcolor,setTextcolor] = useState('white')
    const [grid, setGrid] = useState(false);

   

      function fChangeTheme(bgcolor,textcolor) {
    setCtheme({...ctheme, backgroundColor:bgcolor}) 
    setTextcolor(textcolor)

    
   }
   
   return (


    <div>
      <h3 style={{ color: "red" }}> Dynamic and Conditional Inline Style in React</h3>
      
      <button onClick={()=>{fChangeTheme('white','black')}}>Change theme</button>
      <button onClick={()=>{fChangeTheme('','white')}}>default theme</button>
       <button onClick={()=>{setGrid(!grid)}}>grid</button> {/* if grid true make it false, if false make it true */}
     
     <div style={{display: grid? 'flex': 'block',
          flexWrap: "Wrap"}}>
       <div
        style={ctheme}
      >
        <img
          style={{ width: "200px" }}
          src="https://www.w3schools.com/howto/img_avatar.png"
          alt=""
        />
        <div style={{ padding: "5px",  color:textcolor }}>
          <h4>Asif shaikh </h4>
          <p>Software Developer</p>
        </div>
      </div>
      {/* -------------------- */}
       <div
style={ctheme}      >
        <img
          style={{ width: "200px" ,  color:textcolor}}
          src="https://www.w3schools.com/howto/img_avatar.png"
          alt=""
        />
        <div style={{ padding: "5px" , color:textcolor }}>
          <h4>Asif shaikh </h4>
          <p>Software Developer</p>
        </div>
      </div>
      {/* -------------------- */}
       <div
        style={ctheme}
      >
        <img
          style={{ width: "200px" }}
          src="https://www.w3schools.com/howto/img_avatar.png"
          alt=""
        />
        <div style={{ padding: "5px", color:textcolor}}>
          <h4>Asif shaikh </h4>
          <p>Software Developer</p>
        </div>
      </div>
     </div>
    </div>
  );
}
export default DynamicInline;