(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@babel/runtime/helpers/typeof", "@babel/runtime/helpers/objectSpread", "@babel/runtime/helpers/classCallCheck", "@babel/runtime/helpers/createClass", "@babel/runtime/helpers/defineProperty", "./util", "../util/is"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@babel/runtime/helpers/typeof"), require("@babel/runtime/helpers/objectSpread"), require("@babel/runtime/helpers/classCallCheck"), require("@babel/runtime/helpers/createClass"), require("@babel/runtime/helpers/defineProperty"), require("./util"), require("../util/is"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global._typeof, global.objectSpread, global.classCallCheck, global.createClass, global.defineProperty, global.util, global.is);
    global.unknown = mod.exports;
  }
})(this, function (_exports, _typeof2, _objectSpread2, _classCallCheck2, _createClass2, _defineProperty2, _util, _is) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _typeof2 = _interopRequireDefault(_typeof2);
  _objectSpread2 = _interopRequireDefault(_objectSpread2);
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _createClass2 = _interopRequireDefault(_createClass2);
  _defineProperty2 = _interopRequireDefault(_defineProperty2);
  var rules = {
    string: function string(value, field, source, schema) {
      var required = schema.required,
          _schema$maxLength = schema.maxLength,
          maxLength = _schema$maxLength === void 0 ? null : _schema$maxLength,
          _schema$minLength = schema.minLength,
          minLength = _schema$minLength === void 0 ? null : _schema$minLength,
          _schema$alphabet = schema.alphabet,
          alphabet = _schema$alphabet === void 0 ? null : _schema$alphabet,
          _schema$singleChar = schema.singleChar,
          singleChar = _schema$singleChar === void 0 ? null : _schema$singleChar,
          _schema$length = schema.length,
          length = _schema$length === void 0 ? null : _schema$length;
      var ret = {};

      if (required) {
        ret.required = !!value;
      }

      if (value === undefined) {
        return ret;
      }

      ret.string = typeof value === 'string';

      if (maxLength !== null) {
        ret.maxLength = value.length <= maxLength;
      }

      if (minLength !== null) {
        ret.minLength = value.length >= minLength;
      }

      if (alphabet !== null) {
        ret.alphabet = /^[a-z]+$/i.test(value);
      }

      if (singleChar !== null) {
        ret.singleChar = value.length === 1;
      }

      if (length !== null) {
        ret.length = value.length === length;
      }

      return ret;
    },
    array: function array(value, field, source, schema) {
      var required = schema.required,
          _schema$maxLength2 = schema.maxLength,
          maxLength = _schema$maxLength2 === void 0 ? null : _schema$maxLength2,
          _schema$minLength2 = schema.minLength,
          minLength = _schema$minLength2 === void 0 ? null : _schema$minLength2;
      var ret = {};

      if (required) {
        ret.required = !!value;
      }

      if (value === undefined) {
        return ret;
      }

      ret.array = Array.isArray(value);

      if (maxLength !== null) {
        ret.maxLength = value.length <= maxLength;
      }

      if (minLength !== null) {
        ret.minLength = value.length >= minLength;
      }

      return ret;
    },
    number: function number(value, field, source, schema) {
      var required = schema.required,
          _schema$max = schema.max,
          max = _schema$max === void 0 ? null : _schema$max,
          _schema$min = schema.min,
          min = _schema$min === void 0 ? null : _schema$min,
          _schema$decimal = schema.decimal,
          decimal = _schema$decimal === void 0 ? null : _schema$decimal;
      var ret = {};

      if (required) {
        ret.required = !!value || value === 0;
      }

      if (value === undefined) {
        return ret;
      }

      ret.number = !!Number(value) || value === '0';

      if (max !== null) {
        ret.max = value <= max;
      }

      if (min !== null) {
        ret.min = value >= min;
      }

      if (decimal !== null) {
        ret.decimal = value.toString().length - value.toString().indexOf('.') <= decimal + 1;
      }

      return ret;
    },
    integer: function integer(value, field, source, schema) {
      var required = schema.required,
          _schema$max2 = schema.max,
          max = _schema$max2 === void 0 ? null : _schema$max2,
          _schema$min2 = schema.min,
          min = _schema$min2 === void 0 ? null : _schema$min2;
      var ret = {};

      if (required) {
        ret.required = !!value || value === 0;
      }

      if (value === undefined) {
        return ret;
      }

      ret.integer = (Number(value) || value === '0') && value.toString().indexOf('.') === -1;

      if (max !== null) {
        ret.max = value <= max;
      }

      if (min !== null) {
        ret.min = value >= min;
      }

      return ret;
    },
    pattern: function pattern(value, field, source, schema) {
      var required = schema.required,
          _schema$pattern = schema.pattern,
          pattern = _schema$pattern === void 0 ? null : _schema$pattern;
      var ret = {};

      if (required) {
        ret.required = !!value || value === 0;
      }

      if (value === undefined) {
        return ret;
      }

      ret.pattern = pattern.test(value);
      return ret;
    },
    email: function email(value, field, source, schema) {
      var emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // eslint-disable-line

      var required = schema.required;
      var ret = {};

      if (required) {
        ret.required = !!value || value === 0;
      }

      if (value === undefined) {
        return ret;
      }

      ret.email = emailPattern.test(value);
      return ret;
    },
    url: function url(value, field, source, schema) {
      var urlPattern = new RegExp("^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$", 'i');
      var required = schema.required;
      var ret = {};

      if (required) {
        ret.required = !!value || value === 0;
      }

      if (value === undefined) {
        return ret;
      }

      ret.url = urlPattern.test(value);
      return ret;
    },
    tel: function tel(value, field, source, schema) {
      var telPattern = /^\d{6,}$/;
      var required = schema.required;
      var ret = {};

      if (required) {
        ret.required = !!value || value === 0;
      }

      if (value === undefined) {
        return ret;
      }

      ret.tel = telPattern.test(value);
      return ret;
    },
    phone: function phone(value, field, source, schema) {
      var phonePattern = /^\d{11}$/;
      var required = schema.required;
      var ret = {};

      if (required) {
        ret.required = !!value || value === 0;
      }

      if (value === undefined) {
        return ret;
      }

      ret.phone = phonePattern.test(value);
      return ret;
    },
    date: function date(value, field, source, schema) {
      var datePattern = /^\d{4}-\d{2}-\d{2}$/;
      var required = schema.required,
          _schema$max3 = schema.max,
          max = _schema$max3 === void 0 ? null : _schema$max3,
          _schema$min3 = schema.min,
          min = _schema$min3 === void 0 ? null : _schema$min3;
      var ret = {};

      if (required) {
        ret.required = !!value || value === 0;
      }

      if (value === undefined) {
        return ret;
      }

      ret.date = datePattern.test(value);

      if (max !== null) {
        ret.max = Math.floor(new Date(value).getTime() / 1000) <= Math.floor(new Date(max).getTime() / 1000);
      }

      if (min !== null) {
        ret.min = Math.floor(new Date(value).getTime() / 1000) >= Math.floor(new Date(min).getTime() / 1000);
      }

      return ret;
    },
    datetime: function datetime(value, field, source, schema) {
      var datePattern = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/;
      var required = schema.required,
          _schema$max4 = schema.max,
          max = _schema$max4 === void 0 ? null : _schema$max4,
          _schema$min4 = schema.min,
          min = _schema$min4 === void 0 ? null : _schema$min4;
      var ret = {};

      if (required) {
        ret.required = !!value || value === 0;
      }

      if (value === undefined) {
        return ret;
      }

      ret.date = datePattern.test(value);

      if (max !== null) {
        ret.max = Math.floor(new Date(value).getTime() / 1000) <= Math.floor(new Date(max).getTime() / 1000);
      }

      if (min !== null) {
        ret.min = Math.floor(new Date(value).getTime() / 1000) >= Math.floor(new Date(min).getTime() / 1000);
      }

      return ret;
    },
    enum: function _enum(value, field, source, schema) {
      var required = schema.required;
      var enums = schema.enum;
      var ret = {};

      if (required) {
        ret.required = !!value || value === 0;
      }

      if (value === undefined) {
        return ret;
      }

      ret.enum = enums.indexOf(value) > -1;
      return ret;
    }
  };

  var Rule =
  /*#__PURE__*/
  function () {
    function Rule(schema) {
      var _this = this;

      (0, _classCallCheck2.default)(this, Rule);
      (0, _defineProperty2.default)(this, "formatValid", function (ret) {
        if ((0, _is.isPromise)(ret)) {
          return ret.then(_this.formatValid);
        } else if (typeof ret === 'boolean') {
          return ret;
        }

        return Object.keys(ret).map(function (key) {
          return {
            type: key,
            hasError: !ret[key]
          };
        }).filter(function (item) {
          return item.hasError;
        });
      });
      (0, _defineProperty2.default)(this, "formatValidate", function (result, value, field) {
        var msg = [];
        var label = _this.schema.label || field;

        if (result === false) {
          return [{
            message: (0, _util.format)(_this.message, (0, _objectSpread2.default)({}, _this.schema, {
              label: label,
              value: value
            }))
          }];
        } else if (result === true) {
          return null;
        }

        result.forEach(function (item) {
          if ((0, _typeof2.default)(_this.message) !== 'object' || !(item.type in _this.message)) {
            throw Error("schema.message must contain [".concat(item.type, "]"));
          }

          msg.push({
            type: item.type,
            message: (0, _util.format)(_this.message[item.type], (0, _objectSpread2.default)({}, _this.schema, {
              label: label,
              value: value
            }))
          });
        });

        if (msg.length === 0) {
          return null;
        }

        return msg;
      });
      this.schema = schema;

      if (schema.validator) {
        this.validator = schema.validator;
      }

      if (schema.message) {
        this.message = schema.message;
      }
    }

    (0, _createClass2.default)(Rule, [{
      key: "valid",
      value: function valid(value, field, source) {
        if (this.validator) {
          var result = this.validator(value, field, source, this.schema);
          return this.formatValid(result);
        } else if (this.pattern && this.schema.type !== 'pattern') {
          return this.pattern.test(value);
        }

        var type = this.schema.type;

        if (!type || !rules[type]) {
          console.warn('rule 不存在', this.schema.type, this.schema);
          return true;
        }

        return this.formatValid(rules[type](value, field, source, this.schema));
      }
    }, {
      key: "test",
      value: function test(value, field, source) {
        var ret = this.valid(value, field, source);
        return typeof ret === 'boolean' ? ret : ret.length === 0;
      }
    }, {
      key: "validate",
      value: function validate(value, field, source) {
        var result = this.valid(value, field, source);

        if ((0, _is.isPromise)(result)) {
          return result.then(this.formatValidate);
        }

        return this.formatValidate(result, value, field, source);
      }
    }]);
    return Rule;
  }();

  _exports.default = Rule;
});