"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint react/no-danger : 0 */
const Inline = ({
  resource,
  // contextualizer,
  contextualization,
  renderingMode = 'screen',
  children
}, {
  inNote
}) => {
  const url = resource.data.url;
  return _react.default.createElement("a", {
    id: contextualization.id,
    target: 'blank',
    rel: 'noopener',
    href: url,
    className: `peritext-contextualization inline webpage rendering-mode-${renderingMode}`
  }, children && children.length && children.filter(c => {
    if (typeof c === 'string') {
      return c.trim().length;
    }

    return true;
  }).length ? children : '*', renderingMode === 'paged' && !inNote && _react.default.createElement("sup", {
    id: 'footnote-pointer-' + contextualization.id,
    className: 'footnote',
    "data-notenumber": '*'
  }, url));
};

Inline.contextTypes = {
  inNote: _propTypes.default.bool
};
var _default = Inline;
exports.default = _default;