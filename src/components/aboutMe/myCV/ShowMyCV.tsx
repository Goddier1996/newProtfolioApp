
const ShowMyCV = () => {
    
  return (
    <>
      <div className="styleBtnDiploma">
        <a
          className="styleBtnDiploma"
          href={require("../../../images/Artem Kot - Front End CV.pdf")}
          aria-label="My CV"
          download="Artem Kot - Front End CV"
          target="_blank"
        >
          <button type="button">My CV</button>
        </a>
      </div>
    </>
  );
};


export default ShowMyCV;