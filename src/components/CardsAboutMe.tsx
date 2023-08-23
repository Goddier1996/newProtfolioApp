import "../css/AboutMe.css";

const CardsAboutMe = (props: any) => {
  const { Icon, disc, title } = props;

  return (
    <div className="ContainerAboutMeCards">
      <span className="green">
        <Icon />
      </span>
      <h1>{title}</h1>
      <p>{disc}</p>
    </div>
  );
};

export default CardsAboutMe;
