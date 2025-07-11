import Style from './style.module.css'
function ModuleCss() {

  return (
    <>
      <h3 className={Style.heading}>Module css</h3>
      <div className={Style.container}>
        {/* Repeated cards */}
        <div className="user-card">
          <div>
            <img
              className={Style.Img}
              src="https://www.w3schools.com/howto/img_avatar.png"
              alt=""
            />
            <div className={Style.Wrap}>
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

export default ModuleCss;

//!what is diff between css module and external css
// module css only applies in specific component not global
// external css applies in specific component as well as outside the component 