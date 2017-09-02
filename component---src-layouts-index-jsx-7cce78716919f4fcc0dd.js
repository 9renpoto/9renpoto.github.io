webpackJsonp([79611799117203,60335399758886],{

/***/ "./node_modules/json-loader/index.js!./.cache/json/layout-index.json":
/***/ (function(module, exports) {

	module.exports = {"layoutContext":{}}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"presets\":[\"/home/travis/build/9renpoto/entry/node_modules/babel-preset-react/lib/index.js\",\"/home/travis/build/9renpoto/entry/node_modules/babel-preset-env/lib/index.js\",\"/home/travis/build/9renpoto/entry/node_modules/babel-preset-stage-1/lib/index.js\",\"/home/travis/build/9renpoto/entry/node_modules/babel-preset-flow/lib/index.js\",[\"/home/travis/build/9renpoto/entry/node_modules/babel-preset-env/lib/index.js\",{\"loose\":true,\"uglify\":true,\"modules\":\"commonjs\",\"targets\":{\"browsers\":[\"> 1%\",\"last 2 versions\",\"IE >= 9\"]},\"exclude\":[\"transform-regenerator\",\"transform-es2015-typeof-symbol\"]}],\"/home/travis/build/9renpoto/entry/node_modules/babel-preset-stage-0/lib/index.js\",\"/home/travis/build/9renpoto/entry/node_modules/babel-preset-react/lib/index.js\"],\"plugins\":[\"/home/travis/build/9renpoto/entry/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js\",\"/home/travis/build/9renpoto/entry/node_modules/babel-plugin-add-module-exports/lib/index.js\",\"/home/travis/build/9renpoto/entry/node_modules/babel-plugin-add-module-exports/lib/index.js\",\"/home/travis/build/9renpoto/entry/node_modules/babel-plugin-transform-object-assign/lib/index.js\"],\"cacheDirectory\":true}!./.cache/layouts/index.js":
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__("./node_modules/preact-compat/dist/preact-compat.js");
	
	var _react2 = _interopRequireDefault(_react);
	
	var _index = __webpack_require__("./src/layouts/index.jsx");
	
	var _index2 = _interopRequireDefault(_index);
	
	var _layoutIndex = __webpack_require__("./node_modules/json-loader/index.js!./.cache/json/layout-index.json");
	
	var _layoutIndex2 = _interopRequireDefault(_layoutIndex);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (props) {
	  return _react2.default.createElement(_index2.default, _extends({}, props, _layoutIndex2.default));
	};
	
	module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/@9renpoto/style/lib/components/Header.js":
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const React = __webpack_require__("./node_modules/preact-compat/dist/preact-compat.js");
	class Header extends React.Component {
	    render() {
	        const { Logo, titles, baseUrl } = this.props;
	        const logoClassName = 'nav-item title';
	        const items = titles.map((title, index) => React.createElement("a", { className: 'nav-item', href: `${baseUrl}/${title}/`, key: index }, title));
	        return (React.createElement("header", { className: 'nav' },
	            React.createElement("div", { className: 'nav-left' }, Logo(logoClassName)),
	            React.createElement("div", { className: 'nav-right nav-menu' }, items)));
	    }
	}
	exports.Header = Header;
	//# sourceMappingURL=Header.js.map

/***/ }),

/***/ "./node_modules/@9renpoto/style/lib/index.js":
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var Header_1 = __webpack_require__("./node_modules/@9renpoto/style/lib/components/Header.js");
	exports.Header = Header_1.Header;
	//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/prismjs/themes/prism-solarizedlight.css":
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/layouts/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__("./node_modules/preact-compat/dist/preact-compat.js");
	
	var _react2 = _interopRequireDefault(_react);
	
	var _style = __webpack_require__("./node_modules/@9renpoto/style/lib/index.js");
	
	var _gatsbyLink = __webpack_require__("./node_modules/gatsby-link/index.js");
	
	var _gatsbyLink2 = _interopRequireDefault(_gatsbyLink);
	
	__webpack_require__("./node_modules/prismjs/themes/prism-solarizedlight.css");
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Template = function (_Component) {
	  _inherits(Template, _Component);
	
	  function Template() {
	    _classCallCheck(this, Template);
	
	    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
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
	}(_react.Component);
	
	exports.default = Template;
	module.exports = exports['default'];

/***/ })

});
//# sourceMappingURL=component---src-layouts-index-jsx-7cce78716919f4fcc0dd.js.map