
const ShowMyCV = () => {

  return (
    <div className="myCV">
      <div className="showMyCV">
        <a
          href={require("../../../images/Artem Kot - Front End CV.pdf")}
          aria-label="My CV"
          download="Artem Kot - Front End CV"
          target="_blank"
        >
          CV
        </a>
      </div>
    </div>
  );
};


export default ShowMyCV;