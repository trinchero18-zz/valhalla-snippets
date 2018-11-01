'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BadgeStyled = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    align-items: center;\n    background: ', ';\n    border-radius: ', ';\n    color: ', ';\n    display: flex;\n    font-size: ', ';\n    height: ', ';\n    justify-content: center;\n    margin: ', ';\n    padding: 2px;\n    width: ', ';\n'], ['\n    align-items: center;\n    background: ', ';\n    border-radius: ', ';\n    color: ', ';\n    display: flex;\n    font-size: ', ';\n    height: ', ';\n    justify-content: center;\n    margin: ', ';\n    padding: 2px;\n    width: ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BadgeStyled = exports.BadgeStyled = _styledComponents2.default.span(_templateObject, function (_ref) {
    var background = _ref.background,
        dangerColor = _ref.theme.dangerColor;
    return background || dangerColor;
}, function (props) {
    return 'rounded' in props ? '9999px' : '100%';
}, function (_ref2) {
    var color = _ref2.color;
    return color;
}, function (_ref3) {
    var fontSize = _ref3.fontSize;
    return fontSize;
}, function (_ref4) {
    var size = _ref4.size;
    return size;
}, function (_ref5) {
    var margin = _ref5.margin;
    return margin;
}, function (_ref6) {
    var size = _ref6.size;
    return size;
});