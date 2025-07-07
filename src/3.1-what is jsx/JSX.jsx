// Example with JSX:
function WithJsx() {
// its a javascript
  const userName = "Asif Shaikh ";
  let x = 20;
  let y = 30;

  
  return (
    //its a jsx 
    <div>
      <p>{userName}</p>
      <p>{10 + 20 + 30}</p>
      <p>{x * y}</p>
      <button onClick={() => alert("Hello")}>Click</button>
    </div>
  );

}
export default WithJsx

// Without JSX (Old React method):


import { createElement } from "react";

 export function WithoutJsx() {
  return createElement(
    "div",
    { id: "rootDiv" },
    createElement("p", { className: "heading" }, "Hello without JSX")
  );
}