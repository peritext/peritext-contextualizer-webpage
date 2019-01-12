
export default {
  id: 'webpage',
  type: 'peritext-contextualizer',
  name: 'Webpage entry contextualizer',
  acceptedResourceTypes: [ {
    type: 'webpage',
  }, {
    type: 'bib'
  } ],
  profile: {
    inline: {
      mutable: true,
      options: {
      }
    },
    block: {
      mutable: false,
       assetPickingRules: {
        element: {
          screened: [ 'url', 'rgbImageAssetId', 'cmybImageAssetId' ],
          paged: [ 'cmybImageAssetId', 'rgbImageAssetId' ]
        }
      }
    }
  }
};
