import React from 'react';

export default ({
  resource,
  // contextualizer,
  // contextualization
}) => {
  if (resource.data.thumbnail) {
    return (
      <figure
        className="peritext-contextualization peritext-contextualization-block peritext-contextualization-codex peritext-contextualizer-webpage"
      >  
      <img className="resource-thumbnail"
            src={resource.data.thumbnail}
          />
      </figure>
      )
  }
  else {
    return (
      <figure
        className="peritext-contextualization peritext-contextualization-block peritext-contextualization-codex peritext-contextualizer-webpage"
      >  
        <div className="thumbnail-placeholder" />
      </figure>
    )
  }
}