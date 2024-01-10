import "./loading.css";


const Loading: React.FC<{ textLoading: string }> = ({ textLoading }) => {

  return (
    <div className="center-body">
      <div className="loader-circle-48"></div>
      <p>Loading {textLoading}</p>
    </div>
  );
};


export default Loading;