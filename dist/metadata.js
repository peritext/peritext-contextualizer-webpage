'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  type: 'peritext-contextualizer',
  id: 'webpage',
  name: 'Webpage',
  coverage: {
    inlineStatic: false,
    blockStatic: true,
    inlineDynamic: false,
    blockDynamic: true
  },
  model: {
    acceptedResourceTypes: [{ type: 'webpage' }, {
      test: function test(resource) {
        return resource.metadata.URL && resource.metadata.URL.length || Array.isArray(resource.data) && resource.data[0].URL;
      }
    }],
    block: {
      expandable: false,
      options: []
    }
  }
};