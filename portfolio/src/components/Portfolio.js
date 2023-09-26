import React from 'react';

const Project = ({ title, description, deployedLink, githubLink }) => {
  return (
    <div className="project">
      <h3>{title}</h3>
      <p>{description}</p>
      {/* project links to go here */}
      <a href={deployedLink} target="_blank" rel="noopener noreferrer">
        Example Deployed App
      </a>
      <a href={githubLink} target="_blank" rel="noopener noreferrer">
        GitHub Repository
      </a>
    </div>
  );
};

export default Project;
