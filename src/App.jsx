// import { useState } from 'react'/
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import { Fruit,Color } from './1-component/cp';
import Login,{Profile, Setting, UserKey} from './2-import and export/import-export';
import WithJsx from './3.1-what is jsx/JSX';
import { WithoutJsx} from './3.1-what is jsx/JSX';
import ToDo from './3.1-what is jsx/exercise-1';
import App1,{App2,App3,App4,App5,App6} from './3.2-jsx-with-curly-braces/curly';
import { Cf1,Cf2,Cf3} from './4-clickEvent-and-functionCall/CF';
import Counter,{ St,Reverse} from './5-state/state';
import Ex2 from './5-state/exercise-2';
import Cr from './6-Conditional-Rendering/cr';
import Pr, { Dpr,Opr,Vpr,Apr,Epr} from './7-props/props';
import { useState } from 'react';


function App() {
      //refer chp no 6
      let obj ={Name:"peter" , 
        Age:20,
        Ph:9012345678 
      }
      // --------------------
      const address = "Mumbai"
    //  -------------------
      let Carr = ["iit","nit","mit","iet"]
    // -------------------
    const [std,setStd] = useState()
      //refer chp no 6

  return (
    <div>
      {/* --------------1st chapter--------- */}
      <h1>chapter 1 </h1>
      <h5>learning Component</h5>
      <Fruit />        {/* Self-closing tag */}
      <Color></Color>  {/* Normal tag */}
  
     {/* ----------2nd chapter-------- */}
      <h1>chapter 2 </h1>
      <h5>Importing and Exporting Components</h5>
      <Login />
      <Profile />
      <Setting />
       <h2>{UserKey}</h2>
      
     {/* ----------3.1 chapter-------- */}
     <h1>3.1 chapter</h1>
     <h5>learning jsx</h5>
     <WithJsx/>
     <WithoutJsx/>
    {/* -------------3.1 Exercide------------- */}
     <h1>exercise-1</h1>
     <ToDo/>

     {/* -----------chp 3.2----------- */}
     <h1>chaptee 3.2</h1>
     <h5>jsx with curly braces</h5>
     <App1></App1>
     <App2></App2>
     <App3></App3>
     <App4></App4>
     <App5></App5>
     <App6></App6>

     {/* ----------chp 4 --------------- */}
     <h1>chp 4</h1>
     <h5>clickEvent-and-functionCall</h5>
     <Cf1/>
     <Cf2/>
     <Cf3/>
  
     {/* ----------chp 5 --------------- */}
      <h1>chp 5</h1>
      <h5>State in react js</h5>
      <St></St>
      <Counter></Counter>
      <Reverse></Reverse>
      
      <h5>exercise-2-toggle</h5>
      <Ex2></Ex2>

     {/* ----------chp 6-------------- */}
     <h1>Chp 6</h1>
     <h5>Conditional rendering </h5>
     <Cr></Cr>


     {/* ----------chp 7-------------- */}
     <h1>Chp 7</h1>
     <h5>Props </h5>
     <Pr NAME="asif"></Pr>
     <Dpr Name="Asif" Age={22}  Email="asif@test.com" ></Dpr>
     <Vpr ADDR={address}></Vpr>
     <Opr USER={obj}> </Opr>
       <h5>passing array props</h5>
     <Apr college={Carr[0]} ></Apr>
     <Apr college={Carr[1]} ></Apr>
     <Apr college={Carr[2]} ></Apr>
     <h5>Pass Props on Click (Dynamic Props)</h5>
    { std && <Epr name={std}></Epr>}
     <button onClick={()=>{setStd("aaa")}}> click to se me</button>
    </div>
  );
}
export default App









