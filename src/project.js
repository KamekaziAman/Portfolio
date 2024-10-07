import React from 'react';

const Project = ({ projectName }) => {
  return (
    <div>
      {/* Add hover effect to project */}
      <div
        className="project"
        onMouseEnter={() => console.log('Mouse entered project')}
        onMouseLeave={() => console.log('Mouse left project')}
      >
        {/* Display the project name dynamically */}
        <div className="projectname">{projectName}</div>
        <div className="projectnumber">01</div>
      </div>
    </div>
  );
};

export default Project;
