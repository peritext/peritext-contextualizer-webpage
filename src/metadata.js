export default {
  type: 'peritext-contextualizer',
  id: 'webpage',
  name: 'Webpage',
  coverage: {
    inlineStatic: false,
    blockStatic: true,
    inlineDynamic: false,
    blockDynamic: true,
  },
  model: {
    acceptedResourceTypes: [
      {type: 'webpage'},
      { 
        test: resource => 
          ( 
            resource.metadata.URL 
            && resource.metadata.URL.length
          ) ||
          (
            Array.isArray(resource.data) && 
            resource.data[0].URL
          )
      }
    ],
    block: {
      expandable: false,
      options: []
    }
  }
}