/* eslint react/no-danger : 0 */

import React from 'react';
import PropTypes from 'prop-types';

const Inline = ( {
  resource,
  // contextualizer,
  contextualization,
  renderingMode = 'screen',
  children,
}, {
  inNote
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
        renderingMode === 'paged' && !inNote &&
        <sup
          id={ 'footnote-pointer-' + contextualization.id }
          className={ 'footnote' }
          data-notenumber={ '*' }
        >
          {url}
        </sup>
      }
    </a>
  );
};
Inline.contextTypes = {
  inNote: PropTypes.bool
}


export default Inline;

