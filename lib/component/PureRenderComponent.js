'use strict';

exports.__esModule = true;
exports["default"] = undefined;
exports.shallowCompare = shallowCompare;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _shallowEqual = require('../utils/shallowEqual');

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function shallowCompare(component, nextProps, nextState) {
    return !(0, _shallowEqual2["default"])(component.props, nextProps) || !(0, _shallowEqual2["default"])(component.state, nextState);
}

/**
 * React组件基础类, 浅层检查props和state是否更改, 未更改则不重新渲染
 * 注意: 在不使用immutable.js作为数据源格式时, 请确保浅层检查不会阻止渲染!
 */

var PureRenderComponent = function (_React$Component) {
    _inherits(PureRenderComponent, _React$Component);

    function PureRenderComponent() {
        _classCallCheck(this, PureRenderComponent);

        return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
    }

    PureRenderComponent.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
        var isOk = shallowCompare(this, nextProps, nextState);
        //console.log('shallowCompare',isOk)
        return isOk;
    };

    return PureRenderComponent;
}(_react2["default"].Component);

exports["default"] = PureRenderComponent;