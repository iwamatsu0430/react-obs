"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

React.observe = {};
React.observe.actions = {};
React.observe.bases = {};

var ReactObs = (function (_React$Component) {
  _inherits(ReactObs, _React$Component);

  function ReactObs(props) {
    _classCallCheck(this, ReactObs);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ReactObs).call(this, props));
  }

  _createClass(ReactObs, [{
    key: "on",
    value: function on(eventName, action, _this) {
      if (!React.observe.actions[eventName]) {
        React.observe.actions[eventName] = [];
        React.observe.bases[eventName] = [];
      }
      React.observe.actions[eventName].push(action);
      React.observe.bases[eventName].push(_this);
    }
  }, {
    key: "off",
    value: function off(eventName, action) {
      if (React.observe.actions[eventName]) {
        var index = React.observe.actions[eventName].indexOf(action);
        if (index > -1) {
          React.observe.actions[eventName].splice(index, 1);
          React.observe.bases[eventName].splice(index, 1);
        }
      }
    }
  }, {
    key: "trigger",
    value: function trigger(eventName) {
      for (var _len = arguments.length, params = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        params[_key - 1] = arguments[_key];
      }

      if (React.observe.actions[eventName]) {
        React.observe.actions[eventName].forEach(function (action) {
          var index = React.observe.actions[eventName].indexOf(action);
          var _this = React.observe.bases[eventName][index];
          var copiedParams = params.concat();
          setTimeout(function () {
            copiedParams.unshift(_this);
            action.apply(window, copiedParams);
          }, 0);
        });
      }
    }
  }]);

  return ReactObs;
})(React.Component);