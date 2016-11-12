'use strict';

exports.__esModule = true;
exports["default"] = undefined;

var _react = require('react');

var _storeShape = require('../utils/storeShape');

var _storeShape2 = _interopRequireDefault(_storeShape);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Provider = function (_Component) {
    _inherits(Provider, _Component);

    Provider.prototype.getChildContext = function getChildContext() {
        return { store: this.store };
    };

    function Provider(props, context) {
        _classCallCheck(this, Provider);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

        _this.store = props.store;
        return _this;
    }

    Provider.prototype.render = function render() {
        var children = this.props.children;

        return _react.Children.only(children);
    };

    return Provider;
}(_react.Component);

exports["default"] = Provider;


Provider.propTypes = {
    store: _storeShape2["default"].isRequired,
    children: _react.PropTypes.element.isRequired
};
Provider.childContextTypes = {
    store: _storeShape2["default"].isRequired
};