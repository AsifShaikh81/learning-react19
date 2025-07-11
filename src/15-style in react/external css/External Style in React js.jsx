import './style.css'
function ExtCss() {

  return (
    <>
      <h3 className="heading">External Style</h3>
      <div className="container">
        {/* Repeated cards */}
        <div className="user-card">
          <div>
            <img
              className="img-style"
              src="https://www.w3schools.com/howto/img_avatar.png"
              alt=""
            />
            <div className="text-wrap">
              <h4>Anil Sidhu</h4>
              <p>Software Developer</p>
            </div>
          </div>
        </div>

        {/* Copy this div to make more cards */}
        {/* ...more cards */}
      </div>
    </>
  );
}

export default ExtCss;