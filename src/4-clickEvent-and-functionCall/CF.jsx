// !Correct Way to Use onClick in React JSX
export function Cf1() {
  function callFun() {
    alert("Function called");
  }

  return (
    <div>
        <h5>Correct Way to Use onClick in React JSX</h5>
      <button onClick={callFun}>Click Me</button>
    </div>
  );
}
//*Note:
// Important JSX Rules:
// Use camelCase: onClick instead of onclick.
// Don’t use quotes "": JSX treats quoted functions as strings.
// Do not call the function immediately using (). Just pass the reference like onClick={callFun}.


// !Using Arrow Functions in JSX
// You can also use arrow functions instead of normal functions:

export function Cf2() {
  const fruits = () => {
    alert("Apple");
  };

  return (
    <div>
        <h5>Using Arrow Functions in JSX</h5>
      <button onClick={fruits}>Click Me</button>
    </div>
  );
}

// !Passing Parameters to Functions in JSX
// If you want to pass parameters, you must use an inline arrow function:

export function Cf3() {
  const fruits = (name) => {
    alert(name);
  };

  return (
    <div>
      <h5>Passing Parameters to Functions in JSX</h5>
      <button onClick={() => fruits("Apple")}>Apple</button>
      <button onClick={() => fruits("Banana")}>Banana</button>
    </div>
  );
}

//Because onClick={fruits("Apple")} will call the function immediately, not on click. Using onClick={() => fruits("Apple")} ensures the function runs only when the button is clicked.