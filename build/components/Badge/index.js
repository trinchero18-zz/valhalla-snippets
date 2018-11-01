'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _styled = require('./styled');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _propTypes = require('prop-types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var BadgeComponent = function BadgeComponent(_ref) {
    var content = _ref.content,
        props = _objectWithoutProperties(_ref, ['content']);

    return _react2.default.createElement(
        _styled.BadgeStyled,
        props,
        content
    );
};

BadgeComponent.defaultProps = {
    color: '#fff',
    fontSize: '10px',
    margin: '0 12px',
    size: '20px'
};

BadgeComponent.propTypes = {
    color: _propTypes.string,
    content: (0, _propTypes.oneOfType)([_propTypes.number, _propTypes.string]),
    fontSize: _propTypes.string,
    margin: _propTypes.string,
    size: _propTypes.string
};

var Badge = (0, _styledComponents.withTheme)(BadgeComponent);
Badge.displayName = 'Badge';

exports.default = Badge;