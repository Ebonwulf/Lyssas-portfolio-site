import React from 'react';
import './ProjectTiles.scss';

const ProjectTiles = ({ projectImg, projectName, projectText }) => {
  return (
    <div className='project'>
      <p className='project__name'>{projectName}</p>
      <div className='project__img'>{projectImg}</div>
      <p className='project__text'>{projectText}</p>
    </div>
  );
};

export default ProjectTiles;
