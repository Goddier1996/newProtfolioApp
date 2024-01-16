import GitHubCalendar from "react-github-calendar";
import { FaGithub } from "react-icons/fa";


const ShowGitHubCalendar: React.FC = () => {

  return (
    <div className="gitHubCalendar">
      <div className="styleCalendar">
        <h1>
          Activity in GitHub{" "}
          <span className="styleIconAboutMe">
            <FaGithub />
          </span>
        </h1>
        <GitHubCalendar
          username={process.env.REACT_APP_GIT || ""}
          blockSize={10.5}
          blockMargin={5}
          fontSize={11}
        />
      </div>
    </div>
  );
};


export default ShowGitHubCalendar;