
const ButtonNextBack: React.FC<any> = ({ click, typeButton, typeIcon }) => {


  return (
    <>
      <button aria-label={typeButton} onClick={() => click()}>
        {typeIcon}
      </button>
    </>
  );
};


export default ButtonNextBack;