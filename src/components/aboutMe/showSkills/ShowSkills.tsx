
const ShowSkills: React.FC<any> = ({value}) => {

  return (
    <>
      <div className="slide" key={value.image.asset.url}>
        <img src={value.image.asset.url} alt="skills" />
      </div>
    </>
  );
};


export default ShowSkills;