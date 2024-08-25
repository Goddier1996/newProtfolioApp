import ShowMyInfo from "./showPersonaInfo/ShowMyInfo";



const ShowInfoAboutMe = () => {


  const wordAboutMe: string = `
  I'm a software developer, with a deep passion for both web and mobile development, I specialize in
  creating dynamic, responsive applications that offer seamless user
  experiences. My expertise lies in the React framework, where I bring
  complex projects to life with an eye for detail and a commitment to
  excellence. While my primary focus is on the client side, I also have a
  solid understanding of server-side technologies, working proficiently
  with Node.js, Express, MongoDB, and MSSQL.`;

  const wordEducation: string = `
        I have a Degree of practical engineer in the software engineering track
        and continuously explore new technologies and techniques to enhance my
        skill set, 'improve my game, and innovate. I thrive on challenges and am
        driven by the opportunity to solve complex problems as they surface
        during the creation of a project. With a strong sense of curiosity,
        creativity, attention to detail, and resilience, I approach development
        not just as a job but as a passion that drives me to learn, create, and
        push the boundaries of what's possible.`;

  const wordExperiences: string = `
        Key Experiences and Skills: I have successfully developed complex
        projects from the ground up, ensuring that each application not only
        functions flawlessly but also provides an exceptional user experience
        across all devices. Every project undergoes rigorous code testing and
        debugging to identify and resolve issues efficiently, ensuring a
        high-quality result.`;

  const wordPortfolio: string = `
        My portfolio showcases the top five projects l've built using React and
        advanced Ul component libraries, each designed to maximize user
        engagement and satisfaction. On the server side, I have developed robust
        backends to manage and store data, leveraging technologies like Node.js,
        Express, and databases such as MongoDB and MSSQL to create secure and
        scalable solutions.`;

  
  return (
    <>
      <p className="aboutMe">
        <ShowMyInfo info={wordAboutMe} />
        <br />
        <br />
        <ShowMyInfo info={wordEducation} />
        <br />
        <br />
        <ShowMyInfo info={wordExperiences} />
        <br />
        <br />
        <ShowMyInfo info={wordPortfolio} />
      </p>
    </>
  );
};


export default ShowInfoAboutMe;