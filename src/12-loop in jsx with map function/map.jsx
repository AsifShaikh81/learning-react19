import Rcil from "./Reuse-comp-in-loop";
export function MapLoop() {
  // const userData = ["Anil", "Sam", "Peter", "Bruce"];
  // const collegeData = ["IET", "IIT", "NIT"];

  const userData = [
    {
      name: "Anil",
      age: 29,
      email: "anil@test.com",
      id: 1,
    },
    {
      name: "Sam",
      age: 36,
      email: "sam@test.com",
      id: 2,
    },
    {
      name: "Peter",
      age: 20,
      email: "peter@test.com",
      id: 3,
    },
    {
      name: "Bruce",
      age: 50,
      email: "bruce@test.com",
      id: 4,
    },
  ];
  return (
    <div>
      <h3>without loop</h3>
      <table border="1">
        <thead>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Age</td>
            <td>Email</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>input</td>
            <td>input</td>
            <td>input</td>
            <td>input</td>
          </tr>
          <tr>
            <td>input</td>
            <td>input</td>
            <td>input</td>
            <td>input</td>
          </tr>
          <tr>
            <td>input</td>
            <td>input</td>
            <td>input</td>
            <td>input</td>
          </tr>
        </tbody>
      </table>

      <h3>Loop in JSX with Map Function</h3>

      <table border="1">
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Email</td>
            <td>Age</td>
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => {
            return (
              <tr key={user.id}> {/* key helps React track each row */}
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <h3>Reuse component in loop</h3>
      {userData.map((user) => (
        <div key={user.id}>{/* key helps React track each row and avoid errors */}
          <Rcil Data={user}></Rcil>
        </div>
      ))}
    </div>
  )
}