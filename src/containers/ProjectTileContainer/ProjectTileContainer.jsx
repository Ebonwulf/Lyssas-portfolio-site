import React from 'react';
import './ProjectTileContainer.scss';
import ProjectTiles from '../../components/ProjectTiles/ProjectTiles';

const ProjectTileContainer = ({ projectData }) => {
  const projectTileContainerJsx = projectData.map((card) => {
    return (
      <ProjectTiles
        projectImg={card.image}
        projectName={card.name}
        projectText={card.text}
      />
    );
  });

  return <div>{projectTileContainerJsx}</div>;
};

export default ProjectTileContainer;
