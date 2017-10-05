"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var resource = _ref.resource;

  if (resource.data.thumbnail) {
    return _react2.default.createElement(
      "figure",
      {
        className: "peritext-contextualization peritext-contextualization-block peritext-contextualization-codex peritext-contextualizer-webpage"
      },
      _react2.default.createElement("img", { className: "resource-thumbnail",
        src: resource.data.thumbnail
      })
    );
  } else {
    return _react2.default.createElement(
      "figure",
      {
        className: "peritext-contextualization peritext-contextualization-block peritext-contextualization-codex peritext-contextualizer-webpage"
      },
      _react2.default.createElement("div", { className: "thumbnail-placeholder" })
    );
  }
};