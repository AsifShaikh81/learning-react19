// !Using Variables Inside JSX
// *JSX allows you to insert JavaScript variables inside HTML using curly braces {}.
function App1() {
  const name = "Asif Shaikh";
  let x = 10;
  let y = 20;
  return (
    <div>
      <h5>Variable in JSX</h5>
       <p>{name}</p>
      <p>{x + y}</p>
    </div>
  );
}

export default App1

// !Conditional Rendering in JSX
// *You can also use conditions inside JSX using the ternary operator:

export function App2() {
  const name = "Asif Shaikh";

  return (
    <div>
      <h5>Conditional Rendering in JSX</h5>
      <p>{name ? name : "User not Found"}</p>
      
    </div>
  );
}

// !Using Functions Inside JSX
// *You can call functions directly within JSX:

export function App3() {
  function fruit() {
    return "Apple";
  }

  return ( 
    <div>
  <h5>Using Functions Inside JSX</h5>
  <p>{fruit()}</p>
    </div>
    
  )
}

// !Performing Operations in JSX
// *You can write logic-based operations and call them inside your JSX:

export function App4() {
  function operation(a, b, op) {
    if (op == "+") {
      return a + b;
    } else if (op == "-") {
      return a - b;
    } else {
      return a * b;
    }
  }
  return (
    <div>
<h5>Performing Operations in JSX</h5>
<p>{operation(20, 10, "-")}</p>
<p>{operation(20, 10, "+")}</p>
<p>{operation(20, 10, "")}</p>
    </div>
  );
}

// !Using Objects and Arrays with JSX
// *Working with objects:
export function App5() {
  const userObj = {
    name: "Asif Shaikh",
    email: "Asif@test.com",
    age: 29,
  };

  return (
    <div>
      <h5>Using Object with JSX</h5>
       <p>{userObj.name}</p>
       <p>{userObj.email}</p>
       <p>{userObj.age}</p>
    </div>
  );
}

// *Working with arrays:
 export function App6() {
  const userArray = ["sam", "peter", "bruce"];

  return (
    <div>
        <h5>Using Arrays with JSX</h5>
<p>{userArray[0]}</p>
    </div>
  );
}