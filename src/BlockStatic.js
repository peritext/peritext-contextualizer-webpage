import React from 'react';
import PropTypes from 'prop-types';

const BlockStatic = ({
  resource: {
    data: {
      thumbnailDataset
    }
  },
  // contextualizer,
  // contextualization
}, {
  datasets = {}
}) => {
  const thumbnail = datasets[thumbnailDataset];
  return (
    <figure
      className="peritext-contextualization peritext-contextualization-block peritext-contextualization-codex peritext-contextualizer-webpage"
    >  
    {
      thumbnail ? 
        <img className="resource-thumbnail"
          src={thumbnail.uri}
        /> 
        : 
        <div className="thumbnail-placeholder" />
    }
    </figure>
    );
};

export default BlockStatic;