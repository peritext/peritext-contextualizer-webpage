import React from 'react';

export default ({
  resource,
  // contextualizer,
  // contextualization
}) => (
  <figure
    className="peritext-contextualization peritext-contextualization-block peritext-contextualization-web peritext-contextualizer-webpage"
  >  
    <iframe
      src={
        resource.data.url || 
          resource.metadata.URL ||
          Array.isArray(resource.data) && resource.data[0].URL
      }
    />
  </figure>
)