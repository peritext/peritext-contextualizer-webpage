"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var resource = _ref.resource;
  return _react2.default.createElement(
    "figure",
    {
      className: "peritext-contextualization peritext-contextualization-block peritext-contextualization-web peritext-contextualizer-webpage"
    },
    _react2.default.createElement("iframe", {
      src: resource.data.url || resource.metadata.URL || Array.isArray(resource.data) && resource.data[0].URL
    })
  );
};