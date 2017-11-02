webpackJsonp([79611799117203,60335399758886],{

/***/ 48:
/***/ (function(module, exports) {

	module.exports = {"layoutContext":{}}

/***/ }),

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _index = __webpack_require__(94);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _layoutIndex = __webpack_require__(48);
	
	var _layoutIndex2 = _interopRequireDefault(_layoutIndex);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (props) {
	  return _react2.default.createElement(_index2.default, _extends({}, props, _layoutIndex2.default));
	};
	
	module.exports = exports["default"];

/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const React = __webpack_require__(3);
	function Header({ Logo, titles, baseUrl }) {
	    const items = titles.map((title, index) => (React.createElement("a", { className: 'nav-item', href: `${baseUrl}/${title}/`, key: index }, title)));
	    return (React.createElement("header", { className: 'nav' },
	        React.createElement("div", { className: 'nav-left' }, Logo('nav-item title')),
	        React.createElement("div", { className: 'nav-right nav-menu' }, items)));
	}
	exports.Header = Header;
	//# sourceMappingURL=Header.js.map

/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var Header_1 = __webpack_require__(85);
	exports.Header = Header_1.Header;
	//# sourceMappingURL=index.js.map

/***/ }),

/***/ 166:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _style = __webpack_require__(86);
	
	var _gatsbyLink = __webpack_require__(77);
	
	var _gatsbyLink2 = _interopRequireDefault(_gatsbyLink);
	
	__webpack_require__(166);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Template = function (_PureComponent) {
	  _inherits(Template, _PureComponent);
	
	  function Template() {
	    _classCallCheck(this, Template);
	
	    return _possibleConstructorReturn(this, _PureComponent.apply(this, arguments));
	  }
	
	  Template.prototype.render = function render() {
	    var children = this.props.children;
	
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(_style.Header, {
	        Logo: function Logo(className) {
	          return _react2.default.createElement(
	            _gatsbyLink2.default,
	            { className: className, to: '/' },
	            ':-)'
	          );
	        },
	        titles: ['slides', 'profile'],
	        baseUrl: 'https://9renpoto.github.io'
	      }),
	      children()
	    );
	  };
	
	  return Template;
	}(_react.PureComponent);
	
	exports.default = Template;
	module.exports = exports['default'];

/***/ })

});
//# sourceMappingURL=component---src-layouts-index-jsx-bcd07b6e3812f5ea0c76.js.map