import { useState } from "react";
function Controlled() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  return (
    <div>
      {/* <h1>Controlled Component</h1>/ */}
      <form action="" method="get" >
        <input
          type="text"
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter Name"
          value={name}
        />
        <br />
        <br />
        <input
          type="password"
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Enter Password"
          value={password}
        />
        <br />
        <br />
        <input
          type="text"
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter Email"
          value={email}
        />
        <br />
        <br />

        <button>Submit</button>
        <button
          onClick={() => {
            setName("");
            setEmail("");
            setPassword("");
          }}
        >
          Clear
        </button>

        <h1>{name}</h1>
        <h1>{password}</h1>
        <h1>{email}</h1>
      </form>
    </div>
  );
}
export default Controlled