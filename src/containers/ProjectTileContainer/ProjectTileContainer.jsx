import React from 'react';
import './ProjectTileContainer.scss';
import ProjectTiles from '../../components/ProjectTiles/ProjectTiles';

const ProjectTileContainer = () => {
  return (
    <div>
      <ProjectTiles projectImg={image} projectName={name} projectText={text} />
    </div>
  );
};

export default ProjectTileContainer;
