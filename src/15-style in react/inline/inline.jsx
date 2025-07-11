function Inline() {
  const Pstyle={
          border: "1px solid #ccc",
          width: "200px",
          boxShadow: "1px 2px 3px 0px #cccccc57",
          margin: "10px",
          
  }
  return (
    <div>
      <h3 style={{ color: "red" }}>Inline Style in React</h3>
     <div style={{display: "flex",
          flexWrap: "Wrap"}}>
       <div
        style={Pstyle}
      >
        <img
          style={{ width: "200px" }}
          src="https://www.w3schools.com/howto/img_avatar.png"
          alt=""
        />
        <div style={{ padding: "5px" }}>
          <h4>Anil Sidhu</h4>
          <p>Software Developer</p>
        </div>
      </div>
      {/* -------------------- */}
       <div
        style={Pstyle}
      >
        <img
          style={{ width: "200px" }}
          src="https://www.w3schools.com/howto/img_avatar.png"
          alt=""
        />
        <div style={{ padding: "5px" }}>
          <h4>Anil Sidhu</h4>
          <p>Software Developer</p>
        </div>
      </div>
      {/* -------------------- */}
       <div
        style={Pstyle}
      >
        <img
          style={{ width: "200px" }}
          src="https://www.w3schools.com/howto/img_avatar.png"
          alt=""
        />
        <div style={{ padding: "5px" }}>
          <h4>Anil Sidhu</h4>
          <p>Software Developer</p>
        </div>
      </div>
     </div>
    </div>
  );
}
export default Inline;