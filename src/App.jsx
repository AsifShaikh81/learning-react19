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
import Defpara,{Pjwp,Cswp}from './7.1-Adv props/adv-props';
import Gin from './8-getting input/GI';
import Controlled from './9-controlled component/Cc';
import Checkbox from './10-handle-checkbox/hc';
import Hrd from './11-Handle Radio and Dropdown/hrd';
import { MapLoop } from './12-loop in jsx with map function/map';
import Nl from './13-Nesting looping with nested array/NL';
import { Hook } from './14-useEffect-Hook/hooks';
import Lc from './14.1-Life cycle in React js/Lifecycle';
import Inline from './15-style in react/inline/inline';
import DynamicInline from './15-style in react/inline/Dynamic and Conditional Inline Style';
import ExtCss from './15-style in react/external css/External Style in React js';
import ModuleCss from './15-style in react/style with css module/Style with CSS Modules';
import { StlComponent } from './15-style in react/styled compoment/Styled Components';
import { Boot } from './15-style in react/bootstrap/boot';
import Rr from './16-react-router/rr'
import { NestedRoute } from './16.1-nested,layout,index-route/nested,layout,index-route,dynamic';

function App() {
      //refer chp no 7
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
      //refer chp no 7

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
     <button onClick={()=>{setStd("aaa")}}> click to see me</button>

     {/* ----------chp 7.1-------------- */}
     <h1>Chp-7.1</h1>
     <h5>Default parameter</h5>
     <Defpara name='Asif'></Defpara>
     <Defpara ></Defpara> {/* no props used so default parameter is passed */}

     <h5>Passing jsx with props</h5>
     <Pjwp>
      {/* cannot use html element directly inside component so passing it as a props */}
       <p> HELLO WORLD</p>
     </Pjwp>

     <h5>Passing style with props</h5>
     {/* passing stylw with props as well as using default param for color: "color = red" */}
      <Cswp color='blue'></Cswp>

     {/* ----------chp 8 -------------- */}
      <h1>Chp-8</h1>
      <h5>getting input field value</h5>
      <Gin></Gin>

     {/* ----------chp 9 -------------- */}
     <h1>chp-9</h1>
     <h5>controlled component</h5>
     <Controlled></Controlled>
     {/* ----------chp 10 -------------- */}
     <h1>Chp-10</h1>
     <h5>handel checkbox</h5>
     <Checkbox></Checkbox>
     {/* ----------chp 11 -------------- */}
     <h1>chp-11</h1>
     <h5>Handle Radio and Dropdown</h5>
     <Hrd></Hrd>
     {/* ----------chp 12 -------------- */}
     <h1>chp-12</h1>
     <h5>lopp in jsx (map)</h5>
     <MapLoop></MapLoop>
     {/* ----------chp 13 -------------- */}
     <h1>Chp-13</h1>
     <h5>Nesting looping with nested array</h5>
     <Nl></Nl>
     {/* ----------chp 14 -------------- */}
     <h1>Chp-14</h1>
     <h5>Hook</h5>
     <Hook></Hook>
     {/* ----------chp 14.1 -------------- */}
     <h1>Chp-14.1</h1>
     <h5>Life cycle in react js </h5>
     <Lc></Lc>     
     {/* ----------chp 15 -------------- */}
     <h1>Chp-15</h1>
     <h5>style in react</h5>
     <Inline></Inline>
     <DynamicInline></DynamicInline>
     <ExtCss></ExtCss>
     <ModuleCss></ModuleCss>
     <h3>styled component</h3>
     <StlComponent></StlComponent>
     <Boot></Boot>

     {/* ----------chp 16 -------------- */}
     <h1>Chp-16</h1>
     <h5>React Router</h5>
     <Rr></Rr>
     <h5> Nested Route</h5>
     <NestedRoute></NestedRoute>

  
    </div>
  );
}
export default App









