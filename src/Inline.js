/* eslint react/no-danger : 0 */

import React from 'react';

const Inline = ( {
  resource,
  // contextualizer,
  contextualization,
  renderingMode = 'screen',
  children,
}, {
} ) => {
  const url = resource.data.url;
  return (
    <a
      id={ contextualization.id }
      target={ 'blank' }
      rel={ 'noopener' }
      href={ url }
      className={ `peritext-contextualization inline webpage rendering-mode-${renderingMode}` }
    >
      {children &&
        children.length && ( children.filter( ( c ) => {
          if ( typeof c === 'string' ) {
            return c.trim().length;
          }
          return true;
        } ) ).length ? children : '*'}
      {
        renderingMode === 'paged' &&
        <sup
          id={ contextualization.id }
          className={ 'footnote' }
          data-notenumber={ '*' }
        >
          {url}
        </sup>
      }
    </a>
  );
};


export default Inline;

