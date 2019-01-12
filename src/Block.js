
import React from 'react';
import PropTypes from 'prop-types';

import meta from './meta';
import { chooseAppropriateAsset } from 'peritext-utils';

const Block = ( {
  resource,
  // contextualizer,
  contextualization = {},
  renderingMode
}, {
  productionAssets,
} ) => {

  const appropriateAsset = chooseAppropriateAsset( resource, meta.profile.block.assetPickingRules.element[renderingMode], productionAssets );
  let field;
  if ( appropriateAsset ) {
    field = appropriateAsset.resourceDataField;
  }
 else {
    return null;
  }

  let assetUri;
  const asset = appropriateAsset.asset;
  const renderContent = () => {
    switch ( field ) {
      case 'url':
        assetUri = resource.data.url;
        return <iframe src={ assetUri } />;
        default:
          if ( appropriateAsset ) {
            assetUri = asset.data;
            return <img src={ assetUri } />;
          }
        return null;
      }
    };
    return (
      <div
        id={ contextualization.id }
        className={ `peritext-contextualization block webpage rendering-mode-${renderingMode} asset-field-${field}` }
      >
        {renderContent()}
      </div>
    );
  // }
};

Block.contextTypes = {
  productionAssets: PropTypes.object,
};

export default Block;
