import React from 'react';

export default ({
  resource,
  contextualizer,
  // contextualization
}) => (
  <a className="peritext-contextualization peritext-contextualization-inline peritext-contextualization-web peritext-contextualizer-webpage" href={resource.data.url} target={blank}>
    {contextualizer.content}
  </a>
)