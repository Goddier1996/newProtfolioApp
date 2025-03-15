import ShowMyInfo from "./showPersonaInfo/ShowMyInfo";


const ShowInfoAboutMe = () => {
  
  const wordAboutMe: string = `
Passionate software developer specializing in web and mobile development. Expert in React, crafting dynamic, responsive applications with seamless user experiences. Proficient in Node.js, Express, MongoDB, and MSSQL, bridging front-end and back-end efficiently.`;

  const wordEducation: string = `
Practical Software Engineering graduate with a passion for innovation and continuous learning. Thrives on challenges, solving complex problems with creativity, attention to detail, and resilience. Driven by curiosity to explore new technologies and push boundaries in development.`;

  const wordExperiences: string = `
Key Skills & Experience: Successfully built complex applications from the ground up, ensuring flawless functionality and exceptional user experiences across all devices. Skilled in rigorous testing and debugging to deliver high-quality, reliable software.`;

  const wordPortfolio: string = `
Portfolio & Technical Expertise: Showcasing five top React projects utilizing advanced UI libraries for maximum user engagement. Experienced in building robust backends with Node.js, Express, MongoDB, and MSSQL, ensuring secure and scalable solutions.`;

  return (
    <>
      <p className="aboutMe">
        <ShowMyInfo info={wordEducation} />
        <br />
        <br />
        <ShowMyInfo info={wordAboutMe} />
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
