"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var resource = _ref.resource,
      contextualizer = _ref.contextualizer;
  return _react2.default.createElement(
    "a",
    { className: "peritext-contextualization peritext-contextualization-inline peritext-contextualization-web peritext-contextualizer-webpage", href: resource.data.url, target: blank },
    contextualizer.content
  );
};