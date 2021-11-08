function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var PropTypes = require('prop-types');
var PropTypes__default = _interopDefault(PropTypes);
var draftJs = require('draft-js');
var Divider = _interopDefault(require('@material-ui/core/Divider'));
var IconButton = _interopDefault(require('@material-ui/core/IconButton'));
var Tooltip = _interopDefault(require('@material-ui/core/Tooltip'));
var Badge = _interopDefault(require('@material-ui/core/Badge'));
var reactIs = require('react-is');
var reactIs__default = _interopDefault(reactIs);
var UndoIcon = _interopDefault(require('@material-ui/icons/Undo'));
var RedoIcon = _interopDefault(require('@material-ui/icons/Redo'));
var FormatBoldIcon = _interopDefault(require('@material-ui/icons/FormatBold'));
var FormatItalicIcon = _interopDefault(require('@material-ui/icons/FormatItalic'));
var FormatUnderlinedIcon = _interopDefault(require('@material-ui/icons/FormatUnderlined'));
var FormatStrikethroughIcon = _interopDefault(require('@material-ui/icons/FormatStrikethrough'));
var LinkIcon = _interopDefault(require('@material-ui/icons/Link'));
var Dialog = _interopDefault(require('@material-ui/core/Dialog'));
var DialogContent = _interopDefault(require('@material-ui/core/DialogContent'));
var TextField = _interopDefault(require('@material-ui/core/TextField'));
var DialogActions = _interopDefault(require('@material-ui/core/DialogActions'));
var Button = _interopDefault(require('@material-ui/core/Button'));
var Link = _interopDefault(require('@material-ui/core/Link'));
var Popover = _interopDefault(require('@material-ui/core/Popover'));
var ButtonGroup = _interopDefault(require('@material-ui/core/ButtonGroup'));
var LaunchIcon = _interopDefault(require('@material-ui/icons/Launch'));
var LinkOffIcon = _interopDefault(require('@material-ui/icons/LinkOff'));
var Select = _interopDefault(require('@material-ui/core/Select'));
var MenuItem = _interopDefault(require('@material-ui/core/MenuItem'));
var FormatListBulletedIcon = _interopDefault(require('@material-ui/icons/FormatListBulleted'));
var FormatListNumberedIcon = _interopDefault(require('@material-ui/icons/FormatListNumbered'));
var FormatAlignLeftIcon = _interopDefault(require('@material-ui/icons/FormatAlignLeft'));
var FormatAlignCenterIcon = _interopDefault(require('@material-ui/icons/FormatAlignCenter'));
var FormatAlignRightIcon = _interopDefault(require('@material-ui/icons/FormatAlignRight'));
var FormatAlignJustifyIcon = _interopDefault(require('@material-ui/icons/FormatAlignJustify'));
var FormatColorTextIcon = _interopDefault(require('@material-ui/icons/FormatColorText'));
var FormatColorResetIcon = _interopDefault(require('@material-ui/icons/FormatColorReset'));
var CheckIcon = _interopDefault(require('@material-ui/icons/Check'));
var BorderColorIcon = _interopDefault(require('@material-ui/icons/BorderColor'));
var ImageIcon = _interopDefault(require('@material-ui/icons/Image'));
var List = _interopDefault(require('@material-ui/core/List'));
var ListItem = _interopDefault(require('@material-ui/core/ListItem'));
var ListItemIcon = _interopDefault(require('@material-ui/core/ListItemIcon'));
var ListItemText = _interopDefault(require('@material-ui/core/ListItemText'));
var PublishIcon = _interopDefault(require('@material-ui/icons/Publish'));
var Grid = _interopDefault(require('@material-ui/core/Grid'));
var CircularProgress = _interopDefault(require('@material-ui/core/CircularProgress'));
var Typography = _interopDefault(require('@material-ui/core/Typography'));
var LockOpenIcon = _interopDefault(require('@material-ui/icons/LockOpen'));
var LockIcon = _interopDefault(require('@material-ui/icons/Lock'));
var ArrowLeftIcon = _interopDefault(require('@material-ui/icons/ArrowLeft'));
var ArrowRightIcon = _interopDefault(require('@material-ui/icons/ArrowRight'));
var PhotoSizeSelectLargeIcon = _interopDefault(require('@material-ui/icons/PhotoSizeSelectLarge'));
var DeleteIcon = _interopDefault(require('@material-ui/icons/Delete'));
var Paper = _interopDefault(require('@material-ui/core/Paper'));
require('draft-js/dist/Draft.css');

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      return function () {
        if (i >= o.length) return {
          done: true
        };
        return {
          done: false,
          value: o[i++]
        };
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  it = o[Symbol.iterator]();
  return it.next.bind(it);
}

function DividerControl() {
  return /*#__PURE__*/React.createElement(Divider, {
    orientation: "vertical",
    flexItem: true
  });
}

function useEditor() {
  return React.useContext(EditorContext);
}

function useEditorFocus() {
  var editor = useEditor();

  var _React$useState = React.useState(0),
      changesCount = _React$useState[0],
      setChangesCount = _React$useState[1];

  React.useEffect(function () {
    if (changesCount > 0) editor.ref.focus();
  }, [changesCount, editor.ref]);
  return function () {
    setChangesCount(function (currentChangesCount) {
      return currentChangesCount + 1;
    });
  };
}

function _extends$1() {
  _extends$1 = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends$1.apply(this, arguments);
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function isPlainObject(item) {
  return item && _typeof(item) === 'object' && item.constructor === Object;
}
function deepmerge(target, source) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    clone: true
  };
  var output = options.clone ? _extends$1({}, target) : target;

  if (isPlainObject(target) && isPlainObject(source)) {
    Object.keys(source).forEach(function (key) {
      if (key === '__proto__') {
        return;
      }

      if (isPlainObject(source[key]) && key in target) {
        output[key] = deepmerge(target[key], source[key], options);
      } else {
        output[key] = source[key];
      }
    });
  }

  return output;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var specialProperty = "exact-prop: \u200B";
function exactProp(propTypes) {
  if (process.env.NODE_ENV === 'production') {
    return propTypes;
  }

  return _extends$1({}, propTypes, _defineProperty({}, specialProperty, function (props) {
    var unsupportedProps = Object.keys(props).filter(function (prop) {
      return !propTypes.hasOwnProperty(prop);
    });

    if (unsupportedProps.length > 0) {
      return new Error("The following props are not supported: ".concat(unsupportedProps.map(function (prop) {
        return "`".concat(prop, "`");
      }).join(', '), ". Please remove them."));
    }

    return null;
  }));
}

var fnNameMatchRegex = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function getFunctionName(fn) {
  var match = "".concat(fn).match(fnNameMatchRegex);
  var name = match && match[1];
  return name || '';
}

function getFunctionComponentName(Component) {
  var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return Component.displayName || Component.name || getFunctionName(Component) || fallback;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = getFunctionComponentName(innerType);
  return outerType.displayName || (functionName !== '' ? "".concat(wrapperName, "(").concat(functionName, ")") : wrapperName);
}

function getDisplayName(Component) {
  if (Component == null) {
    return undefined;
  }

  if (typeof Component === 'string') {
    return Component;
  }

  if (typeof Component === 'function') {
    return getFunctionComponentName(Component, 'Component');
  }

  if (_typeof(Component) === 'object') {
    switch (Component.$$typeof) {
      case reactIs.ForwardRef:
        return getWrappedName(Component, Component.render, 'ForwardRef');

      case reactIs.Memo:
        return getWrappedName(Component, Component.type, 'memo');

      default:
        return undefined;
    }
  }

  return undefined;
}

var hasSymbol = typeof Symbol === 'function' && Symbol["for"];
var nested = hasSymbol ? Symbol["for"]('mui.nested') : '__THEME_NESTED__';

var pseudoClasses = ['checked', 'disabled', 'error', 'focused', 'focusVisible', 'required', 'expanded', 'selected'];
function createGenerateClassName() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _options$disableGloba = options.disableGlobal,
      disableGlobal = _options$disableGloba === void 0 ? false : _options$disableGloba,
      _options$productionPr = options.productionPrefix,
      productionPrefix = _options$productionPr === void 0 ? 'jss' : _options$productionPr,
      _options$seed = options.seed,
      seed = _options$seed === void 0 ? '' : _options$seed;
  var seedPrefix = seed === '' ? '' : "".concat(seed, "-");
  var ruleCounter = 0;

  var getNextCounterId = function getNextCounterId() {
    ruleCounter += 1;

    if (process.env.NODE_ENV !== 'production') {
      if (ruleCounter >= 1e10) {
        console.warn(['Material-UI: You might have a memory leak.', 'The ruleCounter is not supposed to grow that much.'].join(''));
      }
    }

    return ruleCounter;
  };

  return function (rule, styleSheet) {
    var name = styleSheet.options.name;

    if (name && name.indexOf('Mui') === 0 && !styleSheet.options.link && !disableGlobal) {
      if (pseudoClasses.indexOf(rule.key) !== -1) {
        return "Mui-".concat(rule.key);
      }

      var prefix = "".concat(seedPrefix).concat(name, "-").concat(rule.key);

      if (!styleSheet.options.theme[nested] || seed !== '') {
        return prefix;
      }

      return "".concat(prefix, "-").concat(getNextCounterId());
    }

    if (process.env.NODE_ENV === 'production') {
      return "".concat(seedPrefix).concat(productionPrefix).concat(getNextCounterId());
    }

    var suffix = "".concat(rule.key, "-").concat(getNextCounterId());

    if (styleSheet.options.classNamePrefix) {
      return "".concat(seedPrefix).concat(styleSheet.options.classNamePrefix, "-").concat(suffix);
    }

    return "".concat(seedPrefix).concat(suffix);
  };
}

var isProduction = process.env.NODE_ENV === 'production';

function warning(condition, message) {
  if (!isProduction) {
    if (condition) {
      return;
    }

    var text = "Warning: " + message;

    if (typeof console !== 'undefined') {
      console.warn(text);
    }

    try {
      throw Error(text);
    } catch (x) {}
  }
}

var _typeof$1 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var isBrowser = (typeof window === "undefined" ? "undefined" : _typeof$1(window)) === "object" && (typeof document === "undefined" ? "undefined" : _typeof$1(document)) === 'object' && document.nodeType === 9;

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _objectWithoutPropertiesLoose$1(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var plainObjectConstrurctor = {}.constructor;

function cloneStyle(style) {
  if (style == null || typeof style !== 'object') return style;
  if (Array.isArray(style)) return style.map(cloneStyle);
  if (style.constructor !== plainObjectConstrurctor) return style;
  var newStyle = {};

  for (var name in style) {
    newStyle[name] = cloneStyle(style[name]);
  }

  return newStyle;
}

function createRule(name, decl, options) {
  if (name === void 0) {
    name = 'unnamed';
  }

  var jss = options.jss;
  var declCopy = cloneStyle(decl);
  var rule = jss.plugins.onCreateRule(name, declCopy, options);
  if (rule) return rule;

  if (name[0] === '@') {
    process.env.NODE_ENV !== "production" ? warning(false, "[JSS] Unknown rule " + name) : void 0;
  }

  return null;
}

var join = function join(value, by) {
  var result = '';

  for (var i = 0; i < value.length; i++) {
    if (value[i] === '!important') break;
    if (result) result += by;
    result += value[i];
  }

  return result;
};

var toCssValue = function toCssValue(value, ignoreImportant) {
  if (ignoreImportant === void 0) {
    ignoreImportant = false;
  }

  if (!Array.isArray(value)) return value;
  var cssValue = '';

  if (Array.isArray(value[0])) {
    for (var i = 0; i < value.length; i++) {
      if (value[i] === '!important') break;
      if (cssValue) cssValue += ', ';
      cssValue += join(value[i], ' ');
    }
  } else cssValue = join(value, ', ');

  if (!ignoreImportant && value[value.length - 1] === '!important') {
    cssValue += ' !important';
  }

  return cssValue;
};

function indentStr(str, indent) {
  var result = '';

  for (var index = 0; index < indent; index++) {
    result += '  ';
  }

  return result + str;
}

function toCss(selector, style, options) {
  if (options === void 0) {
    options = {};
  }

  var result = '';
  if (!style) return result;
  var _options = options,
      _options$indent = _options.indent,
      indent = _options$indent === void 0 ? 0 : _options$indent;
  var fallbacks = style.fallbacks;
  if (selector) indent++;

  if (fallbacks) {
    if (Array.isArray(fallbacks)) {
      for (var index = 0; index < fallbacks.length; index++) {
        var fallback = fallbacks[index];

        for (var prop in fallback) {
          var value = fallback[prop];

          if (value != null) {
            if (result) result += '\n';
            result += indentStr(prop + ": " + toCssValue(value) + ";", indent);
          }
        }
      }
    } else {
      for (var _prop in fallbacks) {
        var _value = fallbacks[_prop];

        if (_value != null) {
          if (result) result += '\n';
          result += indentStr(_prop + ": " + toCssValue(_value) + ";", indent);
        }
      }
    }
  }

  for (var _prop2 in style) {
    var _value2 = style[_prop2];

    if (_value2 != null && _prop2 !== 'fallbacks') {
      if (result) result += '\n';
      result += indentStr(_prop2 + ": " + toCssValue(_value2) + ";", indent);
    }
  }

  if (!result && !options.allowEmpty) return result;
  if (!selector) return result;
  indent--;
  if (result) result = "\n" + result + "\n";
  return indentStr(selector + " {" + result, indent) + indentStr('}', indent);
}

var escapeRegex = /([[\].#*$><+~=|^:(),"'`\s])/g;
var nativeEscape = typeof CSS !== 'undefined' && CSS.escape;

var escape = function escape(str) {
  return nativeEscape ? nativeEscape(str) : str.replace(escapeRegex, '\\$1');
};

var BaseStyleRule = /*#__PURE__*/function () {
  function BaseStyleRule(key, style, options) {
    this.type = 'style';
    this.key = void 0;
    this.isProcessed = false;
    this.style = void 0;
    this.renderer = void 0;
    this.renderable = void 0;
    this.options = void 0;
    var sheet = options.sheet,
        Renderer = options.Renderer;
    this.key = key;
    this.options = options;
    this.style = style;
    if (sheet) this.renderer = sheet.renderer;else if (Renderer) this.renderer = new Renderer();
  }

  var _proto = BaseStyleRule.prototype;

  _proto.prop = function prop(name, value, options) {
    if (value === undefined) return this.style[name];
    var force = options ? options.force : false;
    if (!force && this.style[name] === value) return this;
    var newValue = value;

    if (!options || options.process !== false) {
      newValue = this.options.jss.plugins.onChangeValue(value, name, this);
    }

    var isEmpty = newValue == null || newValue === false;
    var isDefined = (name in this.style);
    if (isEmpty && !isDefined && !force) return this;
    var remove = isEmpty && isDefined;
    if (remove) delete this.style[name];else this.style[name] = newValue;

    if (this.renderable && this.renderer) {
      if (remove) this.renderer.removeProperty(this.renderable, name);else this.renderer.setProperty(this.renderable, name, newValue);
      return this;
    }

    var sheet = this.options.sheet;

    if (sheet && sheet.attached) {
      process.env.NODE_ENV !== "production" ? warning(false, '[JSS] Rule is not linked. Missing sheet option "link: true".') : void 0;
    }

    return this;
  };

  return BaseStyleRule;
}();

var StyleRule = /*#__PURE__*/function (_BaseStyleRule) {
  _inheritsLoose(StyleRule, _BaseStyleRule);

  function StyleRule(key, style, options) {
    var _this;

    _this = _BaseStyleRule.call(this, key, style, options) || this;
    _this.selectorText = void 0;
    _this.id = void 0;
    _this.renderable = void 0;
    var selector = options.selector,
        scoped = options.scoped,
        sheet = options.sheet,
        generateId = options.generateId;

    if (selector) {
      _this.selectorText = selector;
    } else if (scoped !== false) {
      _this.id = generateId(_assertThisInitialized(_assertThisInitialized(_this)), sheet);
      _this.selectorText = "." + escape(_this.id);
    }

    return _this;
  }

  var _proto2 = StyleRule.prototype;

  _proto2.applyTo = function applyTo(renderable) {
    var renderer = this.renderer;

    if (renderer) {
      var json = this.toJSON();

      for (var prop in json) {
        renderer.setProperty(renderable, prop, json[prop]);
      }
    }

    return this;
  };

  _proto2.toJSON = function toJSON() {
    var json = {};

    for (var prop in this.style) {
      var value = this.style[prop];
      if (typeof value !== 'object') json[prop] = value;else if (Array.isArray(value)) json[prop] = toCssValue(value);
    }

    return json;
  };

  _proto2.toString = function toString(options) {
    var sheet = this.options.sheet;
    var link = sheet ? sheet.options.link : false;
    var opts = link ? _extends$1({}, options, {
      allowEmpty: true
    }) : options;
    return toCss(this.selectorText, this.style, opts);
  };

  _createClass(StyleRule, [{
    key: "selector",
    set: function set(selector) {
      if (selector === this.selectorText) return;
      this.selectorText = selector;
      var renderer = this.renderer,
          renderable = this.renderable;
      if (!renderable || !renderer) return;
      var hasChanged = renderer.setSelector(renderable, selector);

      if (!hasChanged) {
        renderer.replaceRule(renderable, this);
      }
    },
    get: function get() {
      return this.selectorText;
    }
  }]);

  return StyleRule;
}(BaseStyleRule);

var pluginStyleRule = {
  onCreateRule: function onCreateRule(name, style, options) {
    if (name[0] === '@' || options.parent && options.parent.type === 'keyframes') {
      return null;
    }

    return new StyleRule(name, style, options);
  }
};
var defaultToStringOptions = {
  indent: 1,
  children: true
};
var atRegExp = /@([\w-]+)/;

var ConditionalRule = /*#__PURE__*/function () {
  function ConditionalRule(key, styles, options) {
    this.type = 'conditional';
    this.at = void 0;
    this.key = void 0;
    this.query = void 0;
    this.rules = void 0;
    this.options = void 0;
    this.isProcessed = false;
    this.renderable = void 0;
    this.key = key;
    var atMatch = key.match(atRegExp);
    this.at = atMatch ? atMatch[1] : 'unknown';
    this.query = options.name || "@" + this.at;
    this.options = options;
    this.rules = new RuleList(_extends$1({}, options, {
      parent: this
    }));

    for (var name in styles) {
      this.rules.add(name, styles[name]);
    }

    this.rules.process();
  }

  var _proto = ConditionalRule.prototype;

  _proto.getRule = function getRule(name) {
    return this.rules.get(name);
  };

  _proto.indexOf = function indexOf(rule) {
    return this.rules.indexOf(rule);
  };

  _proto.addRule = function addRule(name, style, options) {
    var rule = this.rules.add(name, style, options);
    if (!rule) return null;
    this.options.jss.plugins.onProcessRule(rule);
    return rule;
  };

  _proto.toString = function toString(options) {
    if (options === void 0) {
      options = defaultToStringOptions;
    }

    if (options.indent == null) options.indent = defaultToStringOptions.indent;
    if (options.children == null) options.children = defaultToStringOptions.children;

    if (options.children === false) {
      return this.query + " {}";
    }

    var children = this.rules.toString(options);
    return children ? this.query + " {\n" + children + "\n}" : '';
  };

  return ConditionalRule;
}();

var keyRegExp = /@media|@supports\s+/;
var pluginConditionalRule = {
  onCreateRule: function onCreateRule(key, styles, options) {
    return keyRegExp.test(key) ? new ConditionalRule(key, styles, options) : null;
  }
};
var defaultToStringOptions$1 = {
  indent: 1,
  children: true
};
var nameRegExp = /@keyframes\s+([\w-]+)/;

var KeyframesRule = /*#__PURE__*/function () {
  function KeyframesRule(key, frames, options) {
    this.type = 'keyframes';
    this.at = '@keyframes';
    this.key = void 0;
    this.name = void 0;
    this.id = void 0;
    this.rules = void 0;
    this.options = void 0;
    this.isProcessed = false;
    this.renderable = void 0;
    var nameMatch = key.match(nameRegExp);

    if (nameMatch && nameMatch[1]) {
      this.name = nameMatch[1];
    } else {
      this.name = 'noname';
      process.env.NODE_ENV !== "production" ? warning(false, "[JSS] Bad keyframes name " + key) : void 0;
    }

    this.key = this.type + "-" + this.name;
    this.options = options;
    var scoped = options.scoped,
        sheet = options.sheet,
        generateId = options.generateId;
    this.id = scoped === false ? this.name : escape(generateId(this, sheet));
    this.rules = new RuleList(_extends$1({}, options, {
      parent: this
    }));

    for (var name in frames) {
      this.rules.add(name, frames[name], _extends$1({}, options, {
        parent: this
      }));
    }

    this.rules.process();
  }

  var _proto = KeyframesRule.prototype;

  _proto.toString = function toString(options) {
    if (options === void 0) {
      options = defaultToStringOptions$1;
    }

    if (options.indent == null) options.indent = defaultToStringOptions$1.indent;
    if (options.children == null) options.children = defaultToStringOptions$1.children;

    if (options.children === false) {
      return this.at + " " + this.id + " {}";
    }

    var children = this.rules.toString(options);
    if (children) children = "\n" + children + "\n";
    return this.at + " " + this.id + " {" + children + "}";
  };

  return KeyframesRule;
}();

var keyRegExp$1 = /@keyframes\s+/;
var refRegExp = /\$([\w-]+)/g;

var findReferencedKeyframe = function findReferencedKeyframe(val, keyframes) {
  if (typeof val === 'string') {
    return val.replace(refRegExp, function (match, name) {
      if (name in keyframes) {
        return keyframes[name];
      }

      process.env.NODE_ENV !== "production" ? warning(false, "[JSS] Referenced keyframes rule \"" + name + "\" is not defined.") : void 0;
      return match;
    });
  }

  return val;
};

var replaceRef = function replaceRef(style, prop, keyframes) {
  var value = style[prop];
  var refKeyframe = findReferencedKeyframe(value, keyframes);

  if (refKeyframe !== value) {
    style[prop] = refKeyframe;
  }
};

var plugin = {
  onCreateRule: function onCreateRule(key, frames, options) {
    return typeof key === 'string' && keyRegExp$1.test(key) ? new KeyframesRule(key, frames, options) : null;
  },
  onProcessStyle: function onProcessStyle(style, rule, sheet) {
    if (rule.type !== 'style' || !sheet) return style;
    if ('animation-name' in style) replaceRef(style, 'animation-name', sheet.keyframes);
    if ('animation' in style) replaceRef(style, 'animation', sheet.keyframes);
    return style;
  },
  onChangeValue: function onChangeValue(val, prop, rule) {
    var sheet = rule.options.sheet;

    if (!sheet) {
      return val;
    }

    switch (prop) {
      case 'animation':
        return findReferencedKeyframe(val, sheet.keyframes);

      case 'animation-name':
        return findReferencedKeyframe(val, sheet.keyframes);

      default:
        return val;
    }
  }
};

var KeyframeRule = /*#__PURE__*/function (_BaseStyleRule) {
  _inheritsLoose(KeyframeRule, _BaseStyleRule);

  function KeyframeRule() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _BaseStyleRule.call.apply(_BaseStyleRule, [this].concat(args)) || this;
    _this.renderable = void 0;
    return _this;
  }

  var _proto = KeyframeRule.prototype;

  _proto.toString = function toString(options) {
    var sheet = this.options.sheet;
    var link = sheet ? sheet.options.link : false;
    var opts = link ? _extends$1({}, options, {
      allowEmpty: true
    }) : options;
    return toCss(this.key, this.style, opts);
  };

  return KeyframeRule;
}(BaseStyleRule);

var pluginKeyframeRule = {
  onCreateRule: function onCreateRule(key, style, options) {
    if (options.parent && options.parent.type === 'keyframes') {
      return new KeyframeRule(key, style, options);
    }

    return null;
  }
};

var FontFaceRule = /*#__PURE__*/function () {
  function FontFaceRule(key, style, options) {
    this.type = 'font-face';
    this.at = '@font-face';
    this.key = void 0;
    this.style = void 0;
    this.options = void 0;
    this.isProcessed = false;
    this.renderable = void 0;
    this.key = key;
    this.style = style;
    this.options = options;
  }

  var _proto = FontFaceRule.prototype;

  _proto.toString = function toString(options) {
    if (Array.isArray(this.style)) {
      var str = '';

      for (var index = 0; index < this.style.length; index++) {
        str += toCss(this.at, this.style[index]);
        if (this.style[index + 1]) str += '\n';
      }

      return str;
    }

    return toCss(this.at, this.style, options);
  };

  return FontFaceRule;
}();

var keyRegExp$2 = /@font-face/;
var pluginFontFaceRule = {
  onCreateRule: function onCreateRule(key, style, options) {
    return keyRegExp$2.test(key) ? new FontFaceRule(key, style, options) : null;
  }
};

var ViewportRule = /*#__PURE__*/function () {
  function ViewportRule(key, style, options) {
    this.type = 'viewport';
    this.at = '@viewport';
    this.key = void 0;
    this.style = void 0;
    this.options = void 0;
    this.isProcessed = false;
    this.renderable = void 0;
    this.key = key;
    this.style = style;
    this.options = options;
  }

  var _proto = ViewportRule.prototype;

  _proto.toString = function toString(options) {
    return toCss(this.key, this.style, options);
  };

  return ViewportRule;
}();

var pluginViewportRule = {
  onCreateRule: function onCreateRule(key, style, options) {
    return key === '@viewport' || key === '@-ms-viewport' ? new ViewportRule(key, style, options) : null;
  }
};

var SimpleRule = /*#__PURE__*/function () {
  function SimpleRule(key, value, options) {
    this.type = 'simple';
    this.key = void 0;
    this.value = void 0;
    this.options = void 0;
    this.isProcessed = false;
    this.renderable = void 0;
    this.key = key;
    this.value = value;
    this.options = options;
  }

  var _proto = SimpleRule.prototype;

  _proto.toString = function toString(options) {
    if (Array.isArray(this.value)) {
      var str = '';

      for (var index = 0; index < this.value.length; index++) {
        str += this.key + " " + this.value[index] + ";";
        if (this.value[index + 1]) str += '\n';
      }

      return str;
    }

    return this.key + " " + this.value + ";";
  };

  return SimpleRule;
}();

var keysMap = {
  '@charset': true,
  '@import': true,
  '@namespace': true
};
var pluginSimpleRule = {
  onCreateRule: function onCreateRule(key, value, options) {
    return key in keysMap ? new SimpleRule(key, value, options) : null;
  }
};
var plugins = [pluginStyleRule, pluginConditionalRule, plugin, pluginKeyframeRule, pluginFontFaceRule, pluginViewportRule, pluginSimpleRule];
var defaultUpdateOptions = {
  process: true
};
var forceUpdateOptions = {
  force: true,
  process: true
};

var RuleList = /*#__PURE__*/function () {
  function RuleList(options) {
    this.map = {};
    this.raw = {};
    this.index = [];
    this.counter = 0;
    this.options = void 0;
    this.classes = void 0;
    this.keyframes = void 0;
    this.options = options;
    this.classes = options.classes;
    this.keyframes = options.keyframes;
  }

  var _proto = RuleList.prototype;

  _proto.add = function add(name, decl, ruleOptions) {
    var _this$options = this.options,
        parent = _this$options.parent,
        sheet = _this$options.sheet,
        jss = _this$options.jss,
        Renderer = _this$options.Renderer,
        generateId = _this$options.generateId,
        scoped = _this$options.scoped;

    var options = _extends$1({
      classes: this.classes,
      parent: parent,
      sheet: sheet,
      jss: jss,
      Renderer: Renderer,
      generateId: generateId,
      scoped: scoped,
      name: name,
      keyframes: this.keyframes,
      selector: undefined
    }, ruleOptions);

    var key = name;

    if (name in this.raw) {
      key = name + "-d" + this.counter++;
    }

    this.raw[key] = decl;

    if (key in this.classes) {
      options.selector = "." + escape(this.classes[key]);
    }

    var rule = createRule(key, decl, options);
    if (!rule) return null;
    this.register(rule);
    var index = options.index === undefined ? this.index.length : options.index;
    this.index.splice(index, 0, rule);
    return rule;
  };

  _proto.get = function get(name) {
    return this.map[name];
  };

  _proto.remove = function remove(rule) {
    this.unregister(rule);
    delete this.raw[rule.key];
    this.index.splice(this.index.indexOf(rule), 1);
  };

  _proto.indexOf = function indexOf(rule) {
    return this.index.indexOf(rule);
  };

  _proto.process = function process() {
    var plugins = this.options.jss.plugins;
    this.index.slice(0).forEach(plugins.onProcessRule, plugins);
  };

  _proto.register = function register(rule) {
    this.map[rule.key] = rule;

    if (rule instanceof StyleRule) {
      this.map[rule.selector] = rule;
      if (rule.id) this.classes[rule.key] = rule.id;
    } else if (rule instanceof KeyframesRule && this.keyframes) {
      this.keyframes[rule.name] = rule.id;
    }
  };

  _proto.unregister = function unregister(rule) {
    delete this.map[rule.key];

    if (rule instanceof StyleRule) {
      delete this.map[rule.selector];
      delete this.classes[rule.key];
    } else if (rule instanceof KeyframesRule) {
      delete this.keyframes[rule.name];
    }
  };

  _proto.update = function update() {
    var name;
    var data;
    var options;

    if (typeof (arguments.length <= 0 ? undefined : arguments[0]) === 'string') {
      name = arguments.length <= 0 ? undefined : arguments[0];
      data = arguments.length <= 1 ? undefined : arguments[1];
      options = arguments.length <= 2 ? undefined : arguments[2];
    } else {
      data = arguments.length <= 0 ? undefined : arguments[0];
      options = arguments.length <= 1 ? undefined : arguments[1];
      name = null;
    }

    if (name) {
      this.updateOne(this.map[name], data, options);
    } else {
      for (var index = 0; index < this.index.length; index++) {
        this.updateOne(this.index[index], data, options);
      }
    }
  };

  _proto.updateOne = function updateOne(rule, data, options) {
    if (options === void 0) {
      options = defaultUpdateOptions;
    }

    var _this$options2 = this.options,
        plugins = _this$options2.jss.plugins,
        sheet = _this$options2.sheet;

    if (rule.rules instanceof RuleList) {
      rule.rules.update(data, options);
      return;
    }

    var styleRule = rule;
    var style = styleRule.style;
    plugins.onUpdate(data, rule, sheet, options);

    if (options.process && style && style !== styleRule.style) {
      plugins.onProcessStyle(styleRule.style, styleRule, sheet);

      for (var prop in styleRule.style) {
        var nextValue = styleRule.style[prop];
        var prevValue = style[prop];

        if (nextValue !== prevValue) {
          styleRule.prop(prop, nextValue, forceUpdateOptions);
        }
      }

      for (var _prop in style) {
        var _nextValue = styleRule.style[_prop];
        var _prevValue = style[_prop];

        if (_nextValue == null && _nextValue !== _prevValue) {
          styleRule.prop(_prop, null, forceUpdateOptions);
        }
      }
    }
  };

  _proto.toString = function toString(options) {
    var str = '';
    var sheet = this.options.sheet;
    var link = sheet ? sheet.options.link : false;

    for (var index = 0; index < this.index.length; index++) {
      var rule = this.index[index];
      var css = rule.toString(options);
      if (!css && !link) continue;
      if (str) str += '\n';
      str += css;
    }

    return str;
  };

  return RuleList;
}();

var StyleSheet = /*#__PURE__*/function () {
  function StyleSheet(styles, options) {
    this.options = void 0;
    this.deployed = void 0;
    this.attached = void 0;
    this.rules = void 0;
    this.renderer = void 0;
    this.classes = void 0;
    this.keyframes = void 0;
    this.queue = void 0;
    this.attached = false;
    this.deployed = false;
    this.classes = {};
    this.keyframes = {};
    this.options = _extends$1({}, options, {
      sheet: this,
      parent: this,
      classes: this.classes,
      keyframes: this.keyframes
    });

    if (options.Renderer) {
      this.renderer = new options.Renderer(this);
    }

    this.rules = new RuleList(this.options);

    for (var name in styles) {
      this.rules.add(name, styles[name]);
    }

    this.rules.process();
  }

  var _proto = StyleSheet.prototype;

  _proto.attach = function attach() {
    if (this.attached) return this;
    if (this.renderer) this.renderer.attach();
    this.attached = true;
    if (!this.deployed) this.deploy();
    return this;
  };

  _proto.detach = function detach() {
    if (!this.attached) return this;
    if (this.renderer) this.renderer.detach();
    this.attached = false;
    return this;
  };

  _proto.addRule = function addRule(name, decl, options) {
    var queue = this.queue;
    if (this.attached && !queue) this.queue = [];
    var rule = this.rules.add(name, decl, options);
    if (!rule) return null;
    this.options.jss.plugins.onProcessRule(rule);

    if (this.attached) {
      if (!this.deployed) return rule;
      if (queue) queue.push(rule);else {
        this.insertRule(rule);

        if (this.queue) {
          this.queue.forEach(this.insertRule, this);
          this.queue = undefined;
        }
      }
      return rule;
    }

    this.deployed = false;
    return rule;
  };

  _proto.insertRule = function insertRule(rule) {
    if (this.renderer) {
      this.renderer.insertRule(rule);
    }
  };

  _proto.addRules = function addRules(styles, options) {
    var added = [];

    for (var name in styles) {
      var rule = this.addRule(name, styles[name], options);
      if (rule) added.push(rule);
    }

    return added;
  };

  _proto.getRule = function getRule(name) {
    return this.rules.get(name);
  };

  _proto.deleteRule = function deleteRule(name) {
    var rule = typeof name === 'object' ? name : this.rules.get(name);

    if (!rule || this.attached && !rule.renderable) {
      return false;
    }

    this.rules.remove(rule);

    if (this.attached && rule.renderable && this.renderer) {
      return this.renderer.deleteRule(rule.renderable);
    }

    return true;
  };

  _proto.indexOf = function indexOf(rule) {
    return this.rules.indexOf(rule);
  };

  _proto.deploy = function deploy() {
    if (this.renderer) this.renderer.deploy();
    this.deployed = true;
    return this;
  };

  _proto.update = function update() {
    var _this$rules;

    (_this$rules = this.rules).update.apply(_this$rules, arguments);

    return this;
  };

  _proto.updateOne = function updateOne(rule, data, options) {
    this.rules.updateOne(rule, data, options);
    return this;
  };

  _proto.toString = function toString(options) {
    return this.rules.toString(options);
  };

  return StyleSheet;
}();

var PluginsRegistry = /*#__PURE__*/function () {
  function PluginsRegistry() {
    this.plugins = {
      internal: [],
      external: []
    };
    this.registry = void 0;
  }

  var _proto = PluginsRegistry.prototype;

  _proto.onCreateRule = function onCreateRule(name, decl, options) {
    for (var i = 0; i < this.registry.onCreateRule.length; i++) {
      var rule = this.registry.onCreateRule[i](name, decl, options);
      if (rule) return rule;
    }

    return null;
  };

  _proto.onProcessRule = function onProcessRule(rule) {
    if (rule.isProcessed) return;
    var sheet = rule.options.sheet;

    for (var i = 0; i < this.registry.onProcessRule.length; i++) {
      this.registry.onProcessRule[i](rule, sheet);
    }

    if (rule.style) this.onProcessStyle(rule.style, rule, sheet);
    rule.isProcessed = true;
  };

  _proto.onProcessStyle = function onProcessStyle(style, rule, sheet) {
    for (var i = 0; i < this.registry.onProcessStyle.length; i++) {
      rule.style = this.registry.onProcessStyle[i](rule.style, rule, sheet);
    }
  };

  _proto.onProcessSheet = function onProcessSheet(sheet) {
    for (var i = 0; i < this.registry.onProcessSheet.length; i++) {
      this.registry.onProcessSheet[i](sheet);
    }
  };

  _proto.onUpdate = function onUpdate(data, rule, sheet, options) {
    for (var i = 0; i < this.registry.onUpdate.length; i++) {
      this.registry.onUpdate[i](data, rule, sheet, options);
    }
  };

  _proto.onChangeValue = function onChangeValue(value, prop, rule) {
    var processedValue = value;

    for (var i = 0; i < this.registry.onChangeValue.length; i++) {
      processedValue = this.registry.onChangeValue[i](processedValue, prop, rule);
    }

    return processedValue;
  };

  _proto.use = function use(newPlugin, options) {
    if (options === void 0) {
      options = {
        queue: 'external'
      };
    }

    var plugins = this.plugins[options.queue];

    if (plugins.indexOf(newPlugin) !== -1) {
      return;
    }

    plugins.push(newPlugin);
    this.registry = [].concat(this.plugins.external, this.plugins.internal).reduce(function (registry, plugin) {
      for (var name in plugin) {
        if (name in registry) {
          registry[name].push(plugin[name]);
        } else {
          process.env.NODE_ENV !== "production" ? warning(false, "[JSS] Unknown hook \"" + name + "\".") : void 0;
        }
      }

      return registry;
    }, {
      onCreateRule: [],
      onProcessRule: [],
      onProcessStyle: [],
      onProcessSheet: [],
      onChangeValue: [],
      onUpdate: []
    });
  };

  return PluginsRegistry;
}();

var SheetsRegistry = /*#__PURE__*/function () {
  function SheetsRegistry() {
    this.registry = [];
  }

  var _proto = SheetsRegistry.prototype;

  _proto.add = function add(sheet) {
    var registry = this.registry;
    var index = sheet.options.index;
    if (registry.indexOf(sheet) !== -1) return;

    if (registry.length === 0 || index >= this.index) {
      registry.push(sheet);
      return;
    }

    for (var i = 0; i < registry.length; i++) {
      if (registry[i].options.index > index) {
        registry.splice(i, 0, sheet);
        return;
      }
    }
  };

  _proto.reset = function reset() {
    this.registry = [];
  };

  _proto.remove = function remove(sheet) {
    var index = this.registry.indexOf(sheet);
    this.registry.splice(index, 1);
  };

  _proto.toString = function toString(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        attached = _ref.attached,
        options = _objectWithoutPropertiesLoose$1(_ref, ["attached"]);

    var css = '';

    for (var i = 0; i < this.registry.length; i++) {
      var sheet = this.registry[i];

      if (attached != null && sheet.attached !== attached) {
        continue;
      }

      if (css) css += '\n';
      css += sheet.toString(options);
    }

    return css;
  };

  _createClass(SheetsRegistry, [{
    key: "index",
    get: function get() {
      return this.registry.length === 0 ? 0 : this.registry[this.registry.length - 1].options.index;
    }
  }]);

  return SheetsRegistry;
}();

var registry = new SheetsRegistry();
var globalThis$1 = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' && window.Math === Math ? window : typeof self !== 'undefined' && self.Math === Math ? self : Function('return this')();
var ns = '2f1acc6c3a606b082e5eef5e54414ffb';
if (globalThis$1[ns] == null) globalThis$1[ns] = 0;
var moduleId = globalThis$1[ns]++;
var maxRules = 1e10;

var createGenerateId = function createGenerateId(options) {
  if (options === void 0) {
    options = {};
  }

  var ruleCounter = 0;

  var generateId = function generateId(rule, sheet) {
    ruleCounter += 1;

    if (ruleCounter > maxRules) {
      process.env.NODE_ENV !== "production" ? warning(false, "[JSS] You might have a memory leak. Rule counter is at " + ruleCounter + ".") : void 0;
    }

    var jssId = '';
    var prefix = '';

    if (sheet) {
      if (sheet.options.classNamePrefix) {
        prefix = sheet.options.classNamePrefix;
      }

      if (sheet.options.jss.id != null) {
        jssId = String(sheet.options.jss.id);
      }
    }

    if (options.minify) {
      return "" + (prefix || 'c') + moduleId + jssId + ruleCounter;
    }

    return prefix + rule.key + "-" + moduleId + (jssId ? "-" + jssId : '') + "-" + ruleCounter;
  };

  return generateId;
};

var memoize = function memoize(fn) {
  var value;
  return function () {
    if (!value) value = fn();
    return value;
  };
};

var getPropertyValue = function getPropertyValue(cssRule, prop) {
  try {
    if (cssRule.attributeStyleMap) {
      return cssRule.attributeStyleMap.get(prop);
    }

    return cssRule.style.getPropertyValue(prop);
  } catch (err) {
    return '';
  }
};

var setProperty = function setProperty(cssRule, prop, value) {
  try {
    var cssValue = value;

    if (Array.isArray(value)) {
      cssValue = toCssValue(value, true);

      if (value[value.length - 1] === '!important') {
        cssRule.style.setProperty(prop, cssValue, 'important');
        return true;
      }
    }

    if (cssRule.attributeStyleMap) {
      cssRule.attributeStyleMap.set(prop, cssValue);
    } else {
      cssRule.style.setProperty(prop, cssValue);
    }
  } catch (err) {
    return false;
  }

  return true;
};

var removeProperty = function removeProperty(cssRule, prop) {
  try {
    if (cssRule.attributeStyleMap) {
      cssRule.attributeStyleMap["delete"](prop);
    } else {
      cssRule.style.removeProperty(prop);
    }
  } catch (err) {
    process.env.NODE_ENV !== "production" ? warning(false, "[JSS] DOMException \"" + err.message + "\" was thrown. Tried to remove property \"" + prop + "\".") : void 0;
  }
};

var setSelector = function setSelector(cssRule, selectorText) {
  cssRule.selectorText = selectorText;
  return cssRule.selectorText === selectorText;
};

var getHead = memoize(function () {
  return document.querySelector('head');
});

function findHigherSheet(registry, options) {
  for (var i = 0; i < registry.length; i++) {
    var sheet = registry[i];

    if (sheet.attached && sheet.options.index > options.index && sheet.options.insertionPoint === options.insertionPoint) {
      return sheet;
    }
  }

  return null;
}

function findHighestSheet(registry, options) {
  for (var i = registry.length - 1; i >= 0; i--) {
    var sheet = registry[i];

    if (sheet.attached && sheet.options.insertionPoint === options.insertionPoint) {
      return sheet;
    }
  }

  return null;
}

function findCommentNode(text) {
  var head = getHead();

  for (var i = 0; i < head.childNodes.length; i++) {
    var node = head.childNodes[i];

    if (node.nodeType === 8 && node.nodeValue.trim() === text) {
      return node;
    }
  }

  return null;
}

function findPrevNode(options) {
  var registry$1 = registry.registry;

  if (registry$1.length > 0) {
    var sheet = findHigherSheet(registry$1, options);

    if (sheet && sheet.renderer) {
      return {
        parent: sheet.renderer.element.parentNode,
        node: sheet.renderer.element
      };
    }

    sheet = findHighestSheet(registry$1, options);

    if (sheet && sheet.renderer) {
      return {
        parent: sheet.renderer.element.parentNode,
        node: sheet.renderer.element.nextSibling
      };
    }
  }

  var insertionPoint = options.insertionPoint;

  if (insertionPoint && typeof insertionPoint === 'string') {
    var comment = findCommentNode(insertionPoint);

    if (comment) {
      return {
        parent: comment.parentNode,
        node: comment.nextSibling
      };
    }

    process.env.NODE_ENV !== "production" ? warning(false, "[JSS] Insertion point \"" + insertionPoint + "\" not found.") : void 0;
  }

  return false;
}

function insertStyle(style, options) {
  var insertionPoint = options.insertionPoint;
  var nextNode = findPrevNode(options);

  if (nextNode !== false && nextNode.parent) {
    nextNode.parent.insertBefore(style, nextNode.node);
    return;
  }

  if (insertionPoint && typeof insertionPoint.nodeType === 'number') {
    var insertionPointElement = insertionPoint;
    var parentNode = insertionPointElement.parentNode;
    if (parentNode) parentNode.insertBefore(style, insertionPointElement.nextSibling);else process.env.NODE_ENV !== "production" ? warning(false, '[JSS] Insertion point is not in the DOM.') : void 0;
    return;
  }

  getHead().appendChild(style);
}

var getNonce = memoize(function () {
  var node = document.querySelector('meta[property="csp-nonce"]');
  return node ? node.getAttribute('content') : null;
});

var _insertRule = function insertRule(container, rule, index) {
  try {
    if ('insertRule' in container) {
      var c = container;
      c.insertRule(rule, index);
    } else if ('appendRule' in container) {
        var _c = container;

        _c.appendRule(rule);
      }
  } catch (err) {
    process.env.NODE_ENV !== "production" ? warning(false, "[JSS] " + err.message) : void 0;
    return false;
  }

  return container.cssRules[index];
};

var getValidRuleInsertionIndex = function getValidRuleInsertionIndex(container, index) {
  var maxIndex = container.cssRules.length;

  if (index === undefined || index > maxIndex) {
    return maxIndex;
  }

  return index;
};

var createStyle = function createStyle() {
  var el = document.createElement('style');
  el.textContent = '\n';
  return el;
};

var DomRenderer = /*#__PURE__*/function () {
  function DomRenderer(sheet) {
    this.getPropertyValue = getPropertyValue;
    this.setProperty = setProperty;
    this.removeProperty = removeProperty;
    this.setSelector = setSelector;
    this.element = void 0;
    this.sheet = void 0;
    this.hasInsertedRules = false;
    this.cssRules = [];
    if (sheet) registry.add(sheet);
    this.sheet = sheet;

    var _ref = this.sheet ? this.sheet.options : {},
        media = _ref.media,
        meta = _ref.meta,
        element = _ref.element;

    this.element = element || createStyle();
    this.element.setAttribute('data-jss', '');
    if (media) this.element.setAttribute('media', media);
    if (meta) this.element.setAttribute('data-meta', meta);
    var nonce = getNonce();
    if (nonce) this.element.setAttribute('nonce', nonce);
  }

  var _proto = DomRenderer.prototype;

  _proto.attach = function attach() {
    if (this.element.parentNode || !this.sheet) return;
    insertStyle(this.element, this.sheet.options);
    var deployed = Boolean(this.sheet && this.sheet.deployed);

    if (this.hasInsertedRules && deployed) {
      this.hasInsertedRules = false;
      this.deploy();
    }
  };

  _proto.detach = function detach() {
    if (!this.sheet) return;
    var parentNode = this.element.parentNode;
    if (parentNode) parentNode.removeChild(this.element);

    if (this.sheet.options.link) {
      this.cssRules = [];
      this.element.textContent = '\n';
    }
  };

  _proto.deploy = function deploy() {
    var sheet = this.sheet;
    if (!sheet) return;

    if (sheet.options.link) {
      this.insertRules(sheet.rules);
      return;
    }

    this.element.textContent = "\n" + sheet.toString() + "\n";
  };

  _proto.insertRules = function insertRules(rules, nativeParent) {
    for (var i = 0; i < rules.index.length; i++) {
      this.insertRule(rules.index[i], i, nativeParent);
    }
  };

  _proto.insertRule = function insertRule(rule, index, nativeParent) {
    if (nativeParent === void 0) {
      nativeParent = this.element.sheet;
    }

    if (rule.rules) {
      var parent = rule;
      var latestNativeParent = nativeParent;

      if (rule.type === 'conditional' || rule.type === 'keyframes') {
        var _insertionIndex = getValidRuleInsertionIndex(nativeParent, index);

        latestNativeParent = _insertRule(nativeParent, parent.toString({
          children: false
        }), _insertionIndex);

        if (latestNativeParent === false) {
          return false;
        }

        this.refCssRule(rule, _insertionIndex, latestNativeParent);
      }

      this.insertRules(parent.rules, latestNativeParent);
      return latestNativeParent;
    }

    var ruleStr = rule.toString();
    if (!ruleStr) return false;
    var insertionIndex = getValidRuleInsertionIndex(nativeParent, index);

    var nativeRule = _insertRule(nativeParent, ruleStr, insertionIndex);

    if (nativeRule === false) {
      return false;
    }

    this.hasInsertedRules = true;
    this.refCssRule(rule, insertionIndex, nativeRule);
    return nativeRule;
  };

  _proto.refCssRule = function refCssRule(rule, index, cssRule) {
    rule.renderable = cssRule;

    if (rule.options.parent instanceof StyleSheet) {
      this.cssRules[index] = cssRule;
    }
  };

  _proto.deleteRule = function deleteRule(cssRule) {
    var sheet = this.element.sheet;
    var index = this.indexOf(cssRule);
    if (index === -1) return false;
    sheet.deleteRule(index);
    this.cssRules.splice(index, 1);
    return true;
  };

  _proto.indexOf = function indexOf(cssRule) {
    return this.cssRules.indexOf(cssRule);
  };

  _proto.replaceRule = function replaceRule(cssRule, rule) {
    var index = this.indexOf(cssRule);
    if (index === -1) return false;
    this.element.sheet.deleteRule(index);
    this.cssRules.splice(index, 1);
    return this.insertRule(rule, index);
  };

  _proto.getRules = function getRules() {
    return this.element.sheet.cssRules;
  };

  return DomRenderer;
}();

var instanceCounter = 0;

var Jss = /*#__PURE__*/function () {
  function Jss(options) {
    this.id = instanceCounter++;
    this.version = "10.7.1";
    this.plugins = new PluginsRegistry();
    this.options = {
      id: {
        minify: false
      },
      createGenerateId: createGenerateId,
      Renderer: isBrowser ? DomRenderer : null,
      plugins: []
    };
    this.generateId = createGenerateId({
      minify: false
    });

    for (var i = 0; i < plugins.length; i++) {
      this.plugins.use(plugins[i], {
        queue: 'internal'
      });
    }

    this.setup(options);
  }

  var _proto = Jss.prototype;

  _proto.setup = function setup(options) {
    if (options === void 0) {
      options = {};
    }

    if (options.createGenerateId) {
      this.options.createGenerateId = options.createGenerateId;
    }

    if (options.id) {
      this.options.id = _extends$1({}, this.options.id, options.id);
    }

    if (options.createGenerateId || options.id) {
      this.generateId = this.options.createGenerateId(this.options.id);
    }

    if (options.insertionPoint != null) this.options.insertionPoint = options.insertionPoint;

    if ('Renderer' in options) {
      this.options.Renderer = options.Renderer;
    }

    if (options.plugins) this.use.apply(this, options.plugins);
    return this;
  };

  _proto.createStyleSheet = function createStyleSheet(styles, options) {
    if (options === void 0) {
      options = {};
    }

    var _options = options,
        index = _options.index;

    if (typeof index !== 'number') {
      index = registry.index === 0 ? 0 : registry.index + 1;
    }

    var sheet = new StyleSheet(styles, _extends$1({}, options, {
      jss: this,
      generateId: options.generateId || this.generateId,
      insertionPoint: this.options.insertionPoint,
      Renderer: this.options.Renderer,
      index: index
    }));
    this.plugins.onProcessSheet(sheet);
    return sheet;
  };

  _proto.removeStyleSheet = function removeStyleSheet(sheet) {
    sheet.detach();
    registry.remove(sheet);
    return this;
  };

  _proto.createRule = function createRule$1(name, style, options) {
    if (style === void 0) {
      style = {};
    }

    if (options === void 0) {
      options = {};
    }

    if (typeof name === 'object') {
      return this.createRule(undefined, name, style);
    }

    var ruleOptions = _extends$1({}, options, {
      name: name,
      jss: this,
      Renderer: this.options.Renderer
    });

    if (!ruleOptions.generateId) ruleOptions.generateId = this.generateId;
    if (!ruleOptions.classes) ruleOptions.classes = {};
    if (!ruleOptions.keyframes) ruleOptions.keyframes = {};
    var rule = createRule(name, style, ruleOptions);
    if (rule) this.plugins.onProcessRule(rule);
    return rule;
  };

  _proto.use = function use() {
    var _this = this;

    for (var _len = arguments.length, plugins = new Array(_len), _key = 0; _key < _len; _key++) {
      plugins[_key] = arguments[_key];
    }

    plugins.forEach(function (plugin) {
      _this.plugins.use(plugin);
    });
    return this;
  };

  return Jss;
}();

function getDynamicStyles(styles) {
  var to = null;

  for (var key in styles) {
    var value = styles[key];
    var type = typeof value;

    if (type === 'function') {
      if (!to) to = {};
      to[key] = value;
    } else if (type === 'object' && value !== null && !Array.isArray(value)) {
      var extracted = getDynamicStyles(value);

      if (extracted) {
        if (!to) to = {};
        to[key] = extracted;
      }
    }
  }

  return to;
}

var hasCSSTOMSupport = typeof CSS === 'object' && CSS != null && 'number' in CSS;

var create = function create(options) {
  return new Jss(options);
};

var jss = create();

var now = Date.now();
var fnValuesNs = "fnValues" + now;
var fnRuleNs = "fnStyle" + ++now;

var functionPlugin = function functionPlugin() {
  return {
    onCreateRule: function onCreateRule(name, decl, options) {
      if (typeof decl !== 'function') return null;
      var rule = createRule(name, {}, options);
      rule[fnRuleNs] = decl;
      return rule;
    },
    onProcessStyle: function onProcessStyle(style, rule) {
      if (fnValuesNs in rule || fnRuleNs in rule) return style;
      var fnValues = {};

      for (var prop in style) {
        var value = style[prop];
        if (typeof value !== 'function') continue;
        delete style[prop];
        fnValues[prop] = value;
      }

      rule[fnValuesNs] = fnValues;
      return style;
    },
    onUpdate: function onUpdate(data, rule, sheet, options) {
      var styleRule = rule;
      var fnRule = styleRule[fnRuleNs];

      if (fnRule) {
        styleRule.style = fnRule(data) || {};

        if (process.env.NODE_ENV === 'development') {
          for (var prop in styleRule.style) {
            if (typeof styleRule.style[prop] === 'function') {
              process.env.NODE_ENV !== "production" ? warning(false, '[JSS] Function values inside function rules are not supported.') : void 0;
              break;
            }
          }
        }
      }

      var fnValues = styleRule[fnValuesNs];

      if (fnValues) {
        for (var _prop in fnValues) {
          styleRule.prop(_prop, fnValues[_prop](data), options);
        }
      }
    }
  };
};

var at = '@global';
var atPrefix = '@global ';

var GlobalContainerRule = /*#__PURE__*/function () {
  function GlobalContainerRule(key, styles, options) {
    this.type = 'global';
    this.at = at;
    this.rules = void 0;
    this.options = void 0;
    this.key = void 0;
    this.isProcessed = false;
    this.key = key;
    this.options = options;
    this.rules = new RuleList(_extends$1({}, options, {
      parent: this
    }));

    for (var selector in styles) {
      this.rules.add(selector, styles[selector]);
    }

    this.rules.process();
  }

  var _proto = GlobalContainerRule.prototype;

  _proto.getRule = function getRule(name) {
    return this.rules.get(name);
  };

  _proto.addRule = function addRule(name, style, options) {
    var rule = this.rules.add(name, style, options);
    if (rule) this.options.jss.plugins.onProcessRule(rule);
    return rule;
  };

  _proto.indexOf = function indexOf(rule) {
    return this.rules.indexOf(rule);
  };

  _proto.toString = function toString() {
    return this.rules.toString();
  };

  return GlobalContainerRule;
}();

var GlobalPrefixedRule = /*#__PURE__*/function () {
  function GlobalPrefixedRule(key, style, options) {
    this.type = 'global';
    this.at = at;
    this.options = void 0;
    this.rule = void 0;
    this.isProcessed = false;
    this.key = void 0;
    this.key = key;
    this.options = options;
    var selector = key.substr(atPrefix.length);
    this.rule = options.jss.createRule(selector, style, _extends$1({}, options, {
      parent: this
    }));
  }

  var _proto2 = GlobalPrefixedRule.prototype;

  _proto2.toString = function toString(options) {
    return this.rule ? this.rule.toString(options) : '';
  };

  return GlobalPrefixedRule;
}();

var separatorRegExp = /\s*,\s*/g;

function addScope(selector, scope) {
  var parts = selector.split(separatorRegExp);
  var scoped = '';

  for (var i = 0; i < parts.length; i++) {
    scoped += scope + " " + parts[i].trim();
    if (parts[i + 1]) scoped += ', ';
  }

  return scoped;
}

function handleNestedGlobalContainerRule(rule, sheet) {
  var options = rule.options,
      style = rule.style;
  var rules = style ? style[at] : null;
  if (!rules) return;

  for (var name in rules) {
    sheet.addRule(name, rules[name], _extends$1({}, options, {
      selector: addScope(name, rule.selector)
    }));
  }

  delete style[at];
}

function handlePrefixedGlobalRule(rule, sheet) {
  var options = rule.options,
      style = rule.style;

  for (var prop in style) {
    if (prop[0] !== '@' || prop.substr(0, at.length) !== at) continue;
    var selector = addScope(prop.substr(at.length), rule.selector);
    sheet.addRule(selector, style[prop], _extends$1({}, options, {
      selector: selector
    }));
    delete style[prop];
  }
}

function jssGlobal() {
  function onCreateRule(name, styles, options) {
    if (!name) return null;

    if (name === at) {
      return new GlobalContainerRule(name, styles, options);
    }

    if (name[0] === '@' && name.substr(0, atPrefix.length) === atPrefix) {
      return new GlobalPrefixedRule(name, styles, options);
    }

    var parent = options.parent;

    if (parent) {
      if (parent.type === 'global' || parent.options.parent && parent.options.parent.type === 'global') {
        options.scoped = false;
      }
    }

    if (options.scoped === false) {
      options.selector = name;
    }

    return null;
  }

  function onProcessRule(rule, sheet) {
    if (rule.type !== 'style' || !sheet) return;
    handleNestedGlobalContainerRule(rule, sheet);
    handlePrefixedGlobalRule(rule, sheet);
  }

  return {
    onCreateRule: onCreateRule,
    onProcessRule: onProcessRule
  };
}

var separatorRegExp$1 = /\s*,\s*/g;
var parentRegExp = /&/g;
var refRegExp$1 = /\$([\w-]+)/g;

function jssNested() {
  function getReplaceRef(container, sheet) {
    return function (match, key) {
      var rule = container.getRule(key) || sheet && sheet.getRule(key);

      if (rule) {
        rule = rule;
        return rule.selector;
      }

      process.env.NODE_ENV !== "production" ? warning(false, "[JSS] Could not find the referenced rule \"" + key + "\" in \"" + (container.options.meta || container.toString()) + "\".") : void 0;
      return key;
    };
  }

  function replaceParentRefs(nestedProp, parentProp) {
    var parentSelectors = parentProp.split(separatorRegExp$1);
    var nestedSelectors = nestedProp.split(separatorRegExp$1);
    var result = '';

    for (var i = 0; i < parentSelectors.length; i++) {
      var parent = parentSelectors[i];

      for (var j = 0; j < nestedSelectors.length; j++) {
        var nested = nestedSelectors[j];
        if (result) result += ', ';
        result += nested.indexOf('&') !== -1 ? nested.replace(parentRegExp, parent) : parent + " " + nested;
      }
    }

    return result;
  }

  function getOptions(rule, container, prevOptions) {
    if (prevOptions) return _extends$1({}, prevOptions, {
      index: prevOptions.index + 1
    });
    var nestingLevel = rule.options.nestingLevel;
    nestingLevel = nestingLevel === undefined ? 1 : nestingLevel + 1;

    var options = _extends$1({}, rule.options, {
      nestingLevel: nestingLevel,
      index: container.indexOf(rule) + 1
    });

    delete options.name;
    return options;
  }

  function onProcessStyle(style, rule, sheet) {
    if (rule.type !== 'style') return style;
    var styleRule = rule;
    var container = styleRule.options.parent;
    var options;
    var replaceRef;

    for (var prop in style) {
      var isNested = prop.indexOf('&') !== -1;
      var isNestedConditional = prop[0] === '@';
      if (!isNested && !isNestedConditional) continue;
      options = getOptions(styleRule, container, options);

      if (isNested) {
        var selector = replaceParentRefs(prop, styleRule.selector);
        if (!replaceRef) replaceRef = getReplaceRef(container, sheet);
        selector = selector.replace(refRegExp$1, replaceRef);
        container.addRule(selector, style[prop], _extends$1({}, options, {
          selector: selector
        }));
      } else if (isNestedConditional) {
        container.addRule(prop, {}, options).addRule(styleRule.key, style[prop], {
          selector: styleRule.selector
        });
      }

      delete style[prop];
    }

    return style;
  }

  return {
    onProcessStyle: onProcessStyle
  };
}

var uppercasePattern = /[A-Z]/g;
var msPattern = /^ms-/;
var cache = {};

function toHyphenLower(match) {
  return '-' + match.toLowerCase();
}

function hyphenateStyleName(name) {
  if (cache.hasOwnProperty(name)) {
    return cache[name];
  }

  var hName = name.replace(uppercasePattern, toHyphenLower);
  return cache[name] = msPattern.test(hName) ? '-' + hName : hName;
}

function convertCase(style) {
  var converted = {};

  for (var prop in style) {
    var key = prop.indexOf('--') === 0 ? prop : hyphenateStyleName(prop);
    converted[key] = style[prop];
  }

  if (style.fallbacks) {
    if (Array.isArray(style.fallbacks)) converted.fallbacks = style.fallbacks.map(convertCase);else converted.fallbacks = convertCase(style.fallbacks);
  }

  return converted;
}

function camelCase() {
  function onProcessStyle(style) {
    if (Array.isArray(style)) {
      for (var index = 0; index < style.length; index++) {
        style[index] = convertCase(style[index]);
      }

      return style;
    }

    return convertCase(style);
  }

  function onChangeValue(value, prop, rule) {
    if (prop.indexOf('--') === 0) {
      return value;
    }

    var hyphenatedProp = hyphenateStyleName(prop);
    if (prop === hyphenatedProp) return value;
    rule.prop(hyphenatedProp, value);
    return null;
  }

  return {
    onProcessStyle: onProcessStyle,
    onChangeValue: onChangeValue
  };
}

var px = hasCSSTOMSupport && CSS ? CSS.px : 'px';
var ms = hasCSSTOMSupport && CSS ? CSS.ms : 'ms';
var percent = hasCSSTOMSupport && CSS ? CSS.percent : '%';
var defaultUnits = {
  'animation-delay': ms,
  'animation-duration': ms,
  'background-position': px,
  'background-position-x': px,
  'background-position-y': px,
  'background-size': px,
  border: px,
  'border-bottom': px,
  'border-bottom-left-radius': px,
  'border-bottom-right-radius': px,
  'border-bottom-width': px,
  'border-left': px,
  'border-left-width': px,
  'border-radius': px,
  'border-right': px,
  'border-right-width': px,
  'border-top': px,
  'border-top-left-radius': px,
  'border-top-right-radius': px,
  'border-top-width': px,
  'border-width': px,
  'border-block': px,
  'border-block-end': px,
  'border-block-end-width': px,
  'border-block-start': px,
  'border-block-start-width': px,
  'border-block-width': px,
  'border-inline': px,
  'border-inline-end': px,
  'border-inline-end-width': px,
  'border-inline-start': px,
  'border-inline-start-width': px,
  'border-inline-width': px,
  'border-start-start-radius': px,
  'border-start-end-radius': px,
  'border-end-start-radius': px,
  'border-end-end-radius': px,
  margin: px,
  'margin-bottom': px,
  'margin-left': px,
  'margin-right': px,
  'margin-top': px,
  'margin-block': px,
  'margin-block-end': px,
  'margin-block-start': px,
  'margin-inline': px,
  'margin-inline-end': px,
  'margin-inline-start': px,
  padding: px,
  'padding-bottom': px,
  'padding-left': px,
  'padding-right': px,
  'padding-top': px,
  'padding-block': px,
  'padding-block-end': px,
  'padding-block-start': px,
  'padding-inline': px,
  'padding-inline-end': px,
  'padding-inline-start': px,
  'mask-position-x': px,
  'mask-position-y': px,
  'mask-size': px,
  height: px,
  width: px,
  'min-height': px,
  'max-height': px,
  'min-width': px,
  'max-width': px,
  bottom: px,
  left: px,
  top: px,
  right: px,
  inset: px,
  'inset-block': px,
  'inset-block-end': px,
  'inset-block-start': px,
  'inset-inline': px,
  'inset-inline-end': px,
  'inset-inline-start': px,
  'box-shadow': px,
  'text-shadow': px,
  'column-gap': px,
  'column-rule': px,
  'column-rule-width': px,
  'column-width': px,
  'font-size': px,
  'font-size-delta': px,
  'letter-spacing': px,
  'text-decoration-thickness': px,
  'text-indent': px,
  'text-stroke': px,
  'text-stroke-width': px,
  'word-spacing': px,
  motion: px,
  'motion-offset': px,
  outline: px,
  'outline-offset': px,
  'outline-width': px,
  perspective: px,
  'perspective-origin-x': percent,
  'perspective-origin-y': percent,
  'transform-origin': percent,
  'transform-origin-x': percent,
  'transform-origin-y': percent,
  'transform-origin-z': percent,
  'transition-delay': ms,
  'transition-duration': ms,
  'vertical-align': px,
  'flex-basis': px,
  'shape-margin': px,
  size: px,
  gap: px,
  grid: px,
  'grid-gap': px,
  'row-gap': px,
  'grid-row-gap': px,
  'grid-column-gap': px,
  'grid-template-rows': px,
  'grid-template-columns': px,
  'grid-auto-rows': px,
  'grid-auto-columns': px,
  'box-shadow-x': px,
  'box-shadow-y': px,
  'box-shadow-blur': px,
  'box-shadow-spread': px,
  'font-line-height': px,
  'text-shadow-x': px,
  'text-shadow-y': px,
  'text-shadow-blur': px
};

function addCamelCasedVersion(obj) {
  var regExp = /(-[a-z])/g;

  var replace = function replace(str) {
    return str[1].toUpperCase();
  };

  var newObj = {};

  for (var _key in obj) {
    newObj[_key] = obj[_key];
    newObj[_key.replace(regExp, replace)] = obj[_key];
  }

  return newObj;
}

var units = addCamelCasedVersion(defaultUnits);

function iterate(prop, value, options) {
  if (value == null) return value;

  if (Array.isArray(value)) {
    for (var i = 0; i < value.length; i++) {
      value[i] = iterate(prop, value[i], options);
    }
  } else if (typeof value === 'object') {
    if (prop === 'fallbacks') {
      for (var innerProp in value) {
        value[innerProp] = iterate(innerProp, value[innerProp], options);
      }
    } else {
      for (var _innerProp in value) {
        value[_innerProp] = iterate(prop + "-" + _innerProp, value[_innerProp], options);
      }
    }
  } else if (typeof value === 'number' && isNaN(value) === false) {
    var unit = options[prop] || units[prop];

    if (unit && !(value === 0 && unit === px)) {
      return typeof unit === 'function' ? unit(value).toString() : "" + value + unit;
    }

    return value.toString();
  }

  return value;
}

function defaultUnit(options) {
  if (options === void 0) {
    options = {};
  }

  var camelCasedOptions = addCamelCasedVersion(options);

  function onProcessStyle(style, rule) {
    if (rule.type !== 'style') return style;

    for (var prop in style) {
      style[prop] = iterate(prop, style[prop], camelCasedOptions);
    }

    return style;
  }

  function onChangeValue(value, prop) {
    return iterate(prop, value, camelCasedOptions);
  }

  return {
    onProcessStyle: onProcessStyle,
    onChangeValue: onChangeValue
  };
}

function _arrayLikeToArray$1(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray$1(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _unsupportedIterableToArray$1(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray$1(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray$1(arr) || _nonIterableSpread();
}

var js = '';
var css = '';
var vendor = '';
var browser = '';
var isTouch = isBrowser && 'ontouchstart' in document.documentElement;

if (isBrowser) {
  var jsCssMap = {
    Moz: '-moz-',
    ms: '-ms-',
    O: '-o-',
    Webkit: '-webkit-'
  };

  var _document$createEleme = document.createElement('p'),
      style = _document$createEleme.style;

  var testProp = 'Transform';

  for (var key in jsCssMap) {
    if (key + testProp in style) {
      js = key;
      css = jsCssMap[key];
      break;
    }
  }

  if (js === 'Webkit' && 'msHyphens' in style) {
    js = 'ms';
    css = jsCssMap.ms;
    browser = 'edge';
  }

  if (js === 'Webkit' && '-apple-trailing-word' in style) {
    vendor = 'apple';
  }
}

var prefix = {
  js: js,
  css: css,
  vendor: vendor,
  browser: browser,
  isTouch: isTouch
};

function supportedKeyframes(key) {
  if (key[1] === '-') return key;
  if (prefix.js === 'ms') return key;
  return "@" + prefix.css + "keyframes" + key.substr(10);
}

var appearence = {
  noPrefill: ['appearance'],
  supportedProperty: function supportedProperty(prop) {
    if (prop !== 'appearance') return false;
    if (prefix.js === 'ms') return "-webkit-" + prop;
    return prefix.css + prop;
  }
};
var colorAdjust = {
  noPrefill: ['color-adjust'],
  supportedProperty: function supportedProperty(prop) {
    if (prop !== 'color-adjust') return false;
    if (prefix.js === 'Webkit') return prefix.css + "print-" + prop;
    return prop;
  }
};
var regExp = /[-\s]+(.)?/g;

function toUpper(match, c) {
  return c ? c.toUpperCase() : '';
}

function camelize(str) {
  return str.replace(regExp, toUpper);
}

function pascalize(str) {
  return camelize("-" + str);
}

var mask = {
  noPrefill: ['mask'],
  supportedProperty: function supportedProperty(prop, style) {
    if (!/^mask/.test(prop)) return false;

    if (prefix.js === 'Webkit') {
      var longhand = 'mask-image';

      if (camelize(longhand) in style) {
        return prop;
      }

      if (prefix.js + pascalize(longhand) in style) {
        return prefix.css + prop;
      }
    }

    return prop;
  }
};
var textOrientation = {
  noPrefill: ['text-orientation'],
  supportedProperty: function supportedProperty(prop) {
    if (prop !== 'text-orientation') return false;

    if (prefix.vendor === 'apple' && !prefix.isTouch) {
      return prefix.css + prop;
    }

    return prop;
  }
};
var transform = {
  noPrefill: ['transform'],
  supportedProperty: function supportedProperty(prop, style, options) {
    if (prop !== 'transform') return false;

    if (options.transform) {
      return prop;
    }

    return prefix.css + prop;
  }
};
var transition = {
  noPrefill: ['transition'],
  supportedProperty: function supportedProperty(prop, style, options) {
    if (prop !== 'transition') return false;

    if (options.transition) {
      return prop;
    }

    return prefix.css + prop;
  }
};
var writingMode = {
  noPrefill: ['writing-mode'],
  supportedProperty: function supportedProperty(prop) {
    if (prop !== 'writing-mode') return false;

    if (prefix.js === 'Webkit' || prefix.js === 'ms' && prefix.browser !== 'edge') {
      return prefix.css + prop;
    }

    return prop;
  }
};
var userSelect = {
  noPrefill: ['user-select'],
  supportedProperty: function supportedProperty(prop) {
    if (prop !== 'user-select') return false;

    if (prefix.js === 'Moz' || prefix.js === 'ms' || prefix.vendor === 'apple') {
      return prefix.css + prop;
    }

    return prop;
  }
};
var breakPropsOld = {
  supportedProperty: function supportedProperty(prop, style) {
    if (!/^break-/.test(prop)) return false;

    if (prefix.js === 'Webkit') {
      var jsProp = "WebkitColumn" + pascalize(prop);
      return jsProp in style ? prefix.css + "column-" + prop : false;
    }

    if (prefix.js === 'Moz') {
      var _jsProp = "page" + pascalize(prop);

      return _jsProp in style ? "page-" + prop : false;
    }

    return false;
  }
};
var inlineLogicalOld = {
  supportedProperty: function supportedProperty(prop, style) {
    if (!/^(border|margin|padding)-inline/.test(prop)) return false;
    if (prefix.js === 'Moz') return prop;
    var newProp = prop.replace('-inline', '');
    return prefix.js + pascalize(newProp) in style ? prefix.css + newProp : false;
  }
};
var unprefixed = {
  supportedProperty: function supportedProperty(prop, style) {
    return camelize(prop) in style ? prop : false;
  }
};
var prefixed = {
  supportedProperty: function supportedProperty(prop, style) {
    var pascalized = pascalize(prop);
    if (prop[0] === '-') return prop;
    if (prop[0] === '-' && prop[1] === '-') return prop;
    if (prefix.js + pascalized in style) return prefix.css + prop;
    if (prefix.js !== 'Webkit' && "Webkit" + pascalized in style) return "-webkit-" + prop;
    return false;
  }
};
var scrollSnap = {
  supportedProperty: function supportedProperty(prop) {
    if (prop.substring(0, 11) !== 'scroll-snap') return false;

    if (prefix.js === 'ms') {
      return "" + prefix.css + prop;
    }

    return prop;
  }
};
var overscrollBehavior = {
  supportedProperty: function supportedProperty(prop) {
    if (prop !== 'overscroll-behavior') return false;

    if (prefix.js === 'ms') {
      return prefix.css + "scroll-chaining";
    }

    return prop;
  }
};
var propMap = {
  'flex-grow': 'flex-positive',
  'flex-shrink': 'flex-negative',
  'flex-basis': 'flex-preferred-size',
  'justify-content': 'flex-pack',
  order: 'flex-order',
  'align-items': 'flex-align',
  'align-content': 'flex-line-pack'
};
var flex2012 = {
  supportedProperty: function supportedProperty(prop, style) {
    var newProp = propMap[prop];
    if (!newProp) return false;
    return prefix.js + pascalize(newProp) in style ? prefix.css + newProp : false;
  }
};
var propMap$1 = {
  flex: 'box-flex',
  'flex-grow': 'box-flex',
  'flex-direction': ['box-orient', 'box-direction'],
  order: 'box-ordinal-group',
  'align-items': 'box-align',
  'flex-flow': ['box-orient', 'box-direction'],
  'justify-content': 'box-pack'
};
var propKeys = Object.keys(propMap$1);

var prefixCss = function prefixCss(p) {
  return prefix.css + p;
};

var flex2009 = {
  supportedProperty: function supportedProperty(prop, style, _ref) {
    var multiple = _ref.multiple;

    if (propKeys.indexOf(prop) > -1) {
      var newProp = propMap$1[prop];

      if (!Array.isArray(newProp)) {
        return prefix.js + pascalize(newProp) in style ? prefix.css + newProp : false;
      }

      if (!multiple) return false;

      for (var i = 0; i < newProp.length; i++) {
        if (!(prefix.js + pascalize(newProp[0]) in style)) {
          return false;
        }
      }

      return newProp.map(prefixCss);
    }

    return false;
  }
};
var plugins$1 = [appearence, colorAdjust, mask, textOrientation, transform, transition, writingMode, userSelect, breakPropsOld, inlineLogicalOld, unprefixed, prefixed, scrollSnap, overscrollBehavior, flex2012, flex2009];
var propertyDetectors = plugins$1.filter(function (p) {
  return p.supportedProperty;
}).map(function (p) {
  return p.supportedProperty;
});
var noPrefill = plugins$1.filter(function (p) {
  return p.noPrefill;
}).reduce(function (a, p) {
  a.push.apply(a, _toConsumableArray(p.noPrefill));
  return a;
}, []);
var el;
var cache$1 = {};

if (isBrowser) {
  el = document.createElement('p');
  var computed = window.getComputedStyle(document.documentElement, '');

  for (var key$1 in computed) {
    if (!isNaN(key$1)) cache$1[computed[key$1]] = computed[key$1];
  }

  noPrefill.forEach(function (x) {
    return delete cache$1[x];
  });
}

function supportedProperty(prop, options) {
  if (options === void 0) {
    options = {};
  }

  if (!el) return prop;

  if (process.env.NODE_ENV !== 'benchmark' && cache$1[prop] != null) {
    return cache$1[prop];
  }

  if (prop === 'transition' || prop === 'transform') {
    options[prop] = prop in el.style;
  }

  for (var i = 0; i < propertyDetectors.length; i++) {
    cache$1[prop] = propertyDetectors[i](prop, el.style, options);
    if (cache$1[prop]) break;
  }

  try {
    el.style[prop] = '';
  } catch (err) {
    return false;
  }

  return cache$1[prop];
}

var cache$1$1 = {};
var transitionProperties = {
  transition: 1,
  'transition-property': 1,
  '-webkit-transition': 1,
  '-webkit-transition-property': 1
};
var transPropsRegExp = /(^\s*[\w-]+)|, (\s*[\w-]+)(?![^()]*\))/g;
var el$1;

function prefixTransitionCallback(match, p1, p2) {
  if (p1 === 'var') return 'var';
  if (p1 === 'all') return 'all';
  if (p2 === 'all') return ', all';
  var prefixedValue = p1 ? supportedProperty(p1) : ", " + supportedProperty(p2);
  if (!prefixedValue) return p1 || p2;
  return prefixedValue;
}

if (isBrowser) el$1 = document.createElement('p');

function supportedValue(property, value) {
  var prefixedValue = value;
  if (!el$1 || property === 'content') return value;

  if (typeof prefixedValue !== 'string' || !isNaN(parseInt(prefixedValue, 10))) {
    return prefixedValue;
  }

  var cacheKey = property + prefixedValue;

  if (process.env.NODE_ENV !== 'benchmark' && cache$1$1[cacheKey] != null) {
    return cache$1$1[cacheKey];
  }

  try {
    el$1.style[property] = prefixedValue;
  } catch (err) {
    cache$1$1[cacheKey] = false;
    return false;
  }

  if (transitionProperties[property]) {
    prefixedValue = prefixedValue.replace(transPropsRegExp, prefixTransitionCallback);
  } else if (el$1.style[property] === '') {
    prefixedValue = prefix.css + prefixedValue;
    if (prefixedValue === '-ms-flex') el$1.style[property] = '-ms-flexbox';
    el$1.style[property] = prefixedValue;

    if (el$1.style[property] === '') {
      cache$1$1[cacheKey] = false;
      return false;
    }
  }

  el$1.style[property] = '';
  cache$1$1[cacheKey] = prefixedValue;
  return cache$1$1[cacheKey];
}

function jssVendorPrefixer() {
  function onProcessRule(rule) {
    if (rule.type === 'keyframes') {
      var atRule = rule;
      atRule.at = supportedKeyframes(atRule.at);
    }
  }

  function prefixStyle(style) {
    for (var prop in style) {
      var value = style[prop];

      if (prop === 'fallbacks' && Array.isArray(value)) {
        style[prop] = value.map(prefixStyle);
        continue;
      }

      var changeProp = false;
      var supportedProp = supportedProperty(prop);
      if (supportedProp && supportedProp !== prop) changeProp = true;
      var changeValue = false;
      var supportedValue$1 = supportedValue(supportedProp, toCssValue(value));
      if (supportedValue$1 && supportedValue$1 !== value) changeValue = true;

      if (changeProp || changeValue) {
        if (changeProp) delete style[prop];
        style[supportedProp || prop] = supportedValue$1 || value;
      }
    }

    return style;
  }

  function onProcessStyle(style, rule) {
    if (rule.type !== 'style') return style;
    return prefixStyle(style);
  }

  function onChangeValue(value, prop) {
    return supportedValue(prop, toCssValue(value)) || value;
  }

  return {
    onProcessRule: onProcessRule,
    onProcessStyle: onProcessStyle,
    onChangeValue: onChangeValue
  };
}

function jssPropsSort() {
  var sort = function sort(prop0, prop1) {
    if (prop0.length === prop1.length) {
      return prop0 > prop1 ? 1 : -1;
    }

    return prop0.length - prop1.length;
  };

  return {
    onProcessStyle: function onProcessStyle(style, rule) {
      if (rule.type !== 'style') return style;
      var newStyle = {};
      var props = Object.keys(style).sort(sort);

      for (var i = 0; i < props.length; i++) {
        newStyle[props[i]] = style[props[i]];
      }

      return newStyle;
    }
  };
}

function jssPreset() {
  return {
    plugins: [functionPlugin(), jssGlobal(), jssNested(), camelCase(), defaultUnit(), typeof window === 'undefined' ? null : jssVendorPrefixer(), jssPropsSort()]
  };
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$1(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function mergeClasses() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var baseClasses = options.baseClasses,
      newClasses = options.newClasses,
      Component = options.Component;

  if (!newClasses) {
    return baseClasses;
  }

  var nextClasses = _extends$1({}, baseClasses);

  if (process.env.NODE_ENV !== 'production') {
    if (typeof newClasses === 'string') {
      console.error(["Material-UI: The value `".concat(newClasses, "` ") + "provided to the classes prop of ".concat(getDisplayName(Component), " is incorrect."), 'You might want to use the className prop instead.'].join('\n'));
      return baseClasses;
    }
  }

  Object.keys(newClasses).forEach(function (key) {
    if (process.env.NODE_ENV !== 'production') {
      if (!baseClasses[key] && newClasses[key]) {
        console.error(["Material-UI: The key `".concat(key, "` ") + "provided to the classes prop is not implemented in ".concat(getDisplayName(Component), "."), "You can only override one of the following: ".concat(Object.keys(baseClasses).join(','), ".")].join('\n'));
      }

      if (newClasses[key] && typeof newClasses[key] !== 'string') {
        console.error(["Material-UI: The key `".concat(key, "` ") + "provided to the classes prop is not valid for ".concat(getDisplayName(Component), "."), "You need to provide a non empty string instead of: ".concat(newClasses[key], ".")].join('\n'));
      }
    }

    if (newClasses[key]) {
      nextClasses[key] = "".concat(baseClasses[key], " ").concat(newClasses[key]);
    }
  });
  return nextClasses;
}

var multiKeyStore = {
  set: function set(cache, key1, key2, value) {
    var subCache = cache.get(key1);

    if (!subCache) {
      subCache = new Map();
      cache.set(key1, subCache);
    }

    subCache.set(key2, value);
  },
  get: function get(cache, key1, key2) {
    var subCache = cache.get(key1);
    return subCache ? subCache.get(key2) : undefined;
  },
  "delete": function _delete(cache, key1, key2) {
    var subCache = cache.get(key1);
    subCache["delete"](key2);
  }
};

var ThemeContext = React.createContext(null);

if (process.env.NODE_ENV !== 'production') {
  ThemeContext.displayName = 'ThemeContext';
}

function useTheme() {
  var theme = React.useContext(ThemeContext);

  if (process.env.NODE_ENV !== 'production') {
    React.useDebugValue(theme);
  }

  return theme;
}

var jss$1 = create(jssPreset());
var generateClassName = createGenerateClassName();
var sheetsManager = new Map();
var defaultOptions = {
  disableGeneration: false,
  generateClassName: generateClassName,
  jss: jss$1,
  sheetsCache: null,
  sheetsManager: sheetsManager,
  sheetsRegistry: null
};
var StylesContext = React.createContext(defaultOptions);

if (process.env.NODE_ENV !== 'production') {
  StylesContext.displayName = 'StylesContext';
}

var injectFirstNode;
function StylesProvider(props) {
  var children = props.children,
      _props$injectFirst = props.injectFirst,
      injectFirst = _props$injectFirst === void 0 ? false : _props$injectFirst,
      _props$disableGenerat = props.disableGeneration,
      disableGeneration = _props$disableGenerat === void 0 ? false : _props$disableGenerat,
      localOptions = _objectWithoutProperties(props, ["children", "injectFirst", "disableGeneration"]);

  var outerOptions = React.useContext(StylesContext);

  var context = _extends$1({}, outerOptions, {
    disableGeneration: disableGeneration
  }, localOptions);

  if (process.env.NODE_ENV !== 'production') {
    if (typeof window === 'undefined' && !context.sheetsManager) {
      console.error('Material-UI: You need to use the ServerStyleSheets API when rendering on the server.');
    }
  }

  if (process.env.NODE_ENV !== 'production') {
    if (context.jss.options.insertionPoint && injectFirst) {
      console.error('Material-UI: You cannot use a custom insertionPoint and <StylesContext injectFirst> at the same time.');
    }
  }

  if (process.env.NODE_ENV !== 'production') {
    if (injectFirst && localOptions.jss) {
      console.error('Material-UI: You cannot use the jss and injectFirst props at the same time.');
    }
  }

  if (!context.jss.options.insertionPoint && injectFirst && typeof window !== 'undefined') {
    if (!injectFirstNode) {
      var head = document.head;
      injectFirstNode = document.createComment('mui-inject-first');
      head.insertBefore(injectFirstNode, head.firstChild);
    }

    context.jss = create({
      plugins: jssPreset().plugins,
      insertionPoint: injectFirstNode
    });
  }

  return /*#__PURE__*/React.createElement(StylesContext.Provider, {
    value: context
  }, children);
}
process.env.NODE_ENV !== "production" ? StylesProvider.propTypes = {
  children: PropTypes__default.node.isRequired,
  disableGeneration: PropTypes__default.bool,
  generateClassName: PropTypes__default.func,
  injectFirst: PropTypes__default.bool,
  jss: PropTypes__default.object,
  serverGenerateClassName: PropTypes__default.func,
  sheetsCache: PropTypes__default.object,
  sheetsManager: PropTypes__default.object,
  sheetsRegistry: PropTypes__default.object
} : void 0;

if (process.env.NODE_ENV !== 'production') {
  process.env.NODE_ENV !== "production" ? StylesProvider.propTypes = exactProp(StylesProvider.propTypes) : void 0;
}

var indexCounter = -1e9;
function increment() {
  indexCounter += 1;

  if (process.env.NODE_ENV !== 'production') {
    if (indexCounter >= 0) {
      console.warn(['Material-UI: You might have a memory leak.', 'The indexCounter is not supposed to grow that much.'].join('\n'));
    }
  }

  return indexCounter;
}

var noopTheme = {};

function getStylesCreator(stylesOrCreator) {
  var themingEnabled = typeof stylesOrCreator === 'function';

  if (process.env.NODE_ENV !== 'production') {
    if (_typeof(stylesOrCreator) !== 'object' && !themingEnabled) {
      console.error(['Material-UI: The `styles` argument provided is invalid.', 'You need to provide a function generating the styles or a styles object.'].join('\n'));
    }
  }

  return {
    create: function create(theme, name) {
      var styles;

      try {
        styles = themingEnabled ? stylesOrCreator(theme) : stylesOrCreator;
      } catch (err) {
        if (process.env.NODE_ENV !== 'production') {
          if (themingEnabled === true && theme === noopTheme) {
            console.error(['Material-UI: The `styles` argument provided is invalid.', 'You are providing a function without a theme in the context.', 'One of the parent elements needs to use a ThemeProvider.'].join('\n'));
          }
        }

        throw err;
      }

      if (!name || !theme.overrides || !theme.overrides[name]) {
        return styles;
      }

      var overrides = theme.overrides[name];

      var stylesWithOverrides = _extends$1({}, styles);

      Object.keys(overrides).forEach(function (key) {
        if (process.env.NODE_ENV !== 'production') {
          if (!stylesWithOverrides[key]) {
            console.warn(['Material-UI: You are trying to override a style that does not exist.', "Fix the `".concat(key, "` key of `theme.overrides.").concat(name, "`.")].join('\n'));
          }
        }

        stylesWithOverrides[key] = deepmerge(stylesWithOverrides[key], overrides[key]);
      });
      return stylesWithOverrides;
    },
    options: {}
  };
}

function getClasses(_ref, classes, Component) {
  var state = _ref.state,
      stylesOptions = _ref.stylesOptions;

  if (stylesOptions.disableGeneration) {
    return classes || {};
  }

  if (!state.cacheClasses) {
    state.cacheClasses = {
      value: null,
      lastProp: null,
      lastJSS: {}
    };
  }

  var generate = false;

  if (state.classes !== state.cacheClasses.lastJSS) {
    state.cacheClasses.lastJSS = state.classes;
    generate = true;
  }

  if (classes !== state.cacheClasses.lastProp) {
    state.cacheClasses.lastProp = classes;
    generate = true;
  }

  if (generate) {
    state.cacheClasses.value = mergeClasses({
      baseClasses: state.cacheClasses.lastJSS,
      newClasses: classes,
      Component: Component
    });
  }

  return state.cacheClasses.value;
}

function attach(_ref2, props) {
  var state = _ref2.state,
      theme = _ref2.theme,
      stylesOptions = _ref2.stylesOptions,
      stylesCreator = _ref2.stylesCreator,
      name = _ref2.name;

  if (stylesOptions.disableGeneration) {
    return;
  }

  var sheetManager = multiKeyStore.get(stylesOptions.sheetsManager, stylesCreator, theme);

  if (!sheetManager) {
    sheetManager = {
      refs: 0,
      staticSheet: null,
      dynamicStyles: null
    };
    multiKeyStore.set(stylesOptions.sheetsManager, stylesCreator, theme, sheetManager);
  }

  var options = _extends$1({}, stylesCreator.options, stylesOptions, {
    theme: theme,
    flip: typeof stylesOptions.flip === 'boolean' ? stylesOptions.flip : theme.direction === 'rtl'
  });

  options.generateId = options.serverGenerateClassName || options.generateClassName;
  var sheetsRegistry = stylesOptions.sheetsRegistry;

  if (sheetManager.refs === 0) {
    var staticSheet;

    if (stylesOptions.sheetsCache) {
      staticSheet = multiKeyStore.get(stylesOptions.sheetsCache, stylesCreator, theme);
    }

    var styles = stylesCreator.create(theme, name);

    if (!staticSheet) {
      staticSheet = stylesOptions.jss.createStyleSheet(styles, _extends$1({
        link: false
      }, options));
      staticSheet.attach();

      if (stylesOptions.sheetsCache) {
        multiKeyStore.set(stylesOptions.sheetsCache, stylesCreator, theme, staticSheet);
      }
    }

    if (sheetsRegistry) {
      sheetsRegistry.add(staticSheet);
    }

    sheetManager.staticSheet = staticSheet;
    sheetManager.dynamicStyles = getDynamicStyles(styles);
  }

  if (sheetManager.dynamicStyles) {
    var dynamicSheet = stylesOptions.jss.createStyleSheet(sheetManager.dynamicStyles, _extends$1({
      link: true
    }, options));
    dynamicSheet.update(props);
    dynamicSheet.attach();
    state.dynamicSheet = dynamicSheet;
    state.classes = mergeClasses({
      baseClasses: sheetManager.staticSheet.classes,
      newClasses: dynamicSheet.classes
    });

    if (sheetsRegistry) {
      sheetsRegistry.add(dynamicSheet);
    }
  } else {
    state.classes = sheetManager.staticSheet.classes;
  }

  sheetManager.refs += 1;
}

function update(_ref3, props) {
  var state = _ref3.state;

  if (state.dynamicSheet) {
    state.dynamicSheet.update(props);
  }
}

function detach(_ref4) {
  var state = _ref4.state,
      theme = _ref4.theme,
      stylesOptions = _ref4.stylesOptions,
      stylesCreator = _ref4.stylesCreator;

  if (stylesOptions.disableGeneration) {
    return;
  }

  var sheetManager = multiKeyStore.get(stylesOptions.sheetsManager, stylesCreator, theme);
  sheetManager.refs -= 1;
  var sheetsRegistry = stylesOptions.sheetsRegistry;

  if (sheetManager.refs === 0) {
    multiKeyStore["delete"](stylesOptions.sheetsManager, stylesCreator, theme);
    stylesOptions.jss.removeStyleSheet(sheetManager.staticSheet);

    if (sheetsRegistry) {
      sheetsRegistry.remove(sheetManager.staticSheet);
    }
  }

  if (state.dynamicSheet) {
    stylesOptions.jss.removeStyleSheet(state.dynamicSheet);

    if (sheetsRegistry) {
      sheetsRegistry.remove(state.dynamicSheet);
    }
  }
}

function useSynchronousEffect(func, values) {
  var key = React.useRef([]);
  var output;
  var currentKey = React.useMemo(function () {
    return {};
  }, values);

  if (key.current !== currentKey) {
    key.current = currentKey;
    output = func();
  }

  React.useEffect(function () {
    return function () {
      if (output) {
        output();
      }
    };
  }, [currentKey]);
}

function makeStyles(stylesOrCreator) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var name = options.name,
      classNamePrefixOption = options.classNamePrefix,
      Component = options.Component,
      _options$defaultTheme = options.defaultTheme,
      defaultTheme = _options$defaultTheme === void 0 ? noopTheme : _options$defaultTheme,
      stylesOptions2 = _objectWithoutProperties(options, ["name", "classNamePrefix", "Component", "defaultTheme"]);

  var stylesCreator = getStylesCreator(stylesOrCreator);
  var classNamePrefix = name || classNamePrefixOption || 'makeStyles';
  stylesCreator.options = {
    index: increment(),
    name: name,
    meta: classNamePrefix,
    classNamePrefix: classNamePrefix
  };

  var useStyles = function useStyles() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var theme = useTheme() || defaultTheme;

    var stylesOptions = _extends$1({}, React.useContext(StylesContext), stylesOptions2);

    var instance = React.useRef();
    var shouldUpdate = React.useRef();
    useSynchronousEffect(function () {
      var current = {
        name: name,
        state: {},
        stylesCreator: stylesCreator,
        stylesOptions: stylesOptions,
        theme: theme
      };
      attach(current, props);
      shouldUpdate.current = false;
      instance.current = current;
      return function () {
        detach(current);
      };
    }, [theme, stylesCreator]);
    React.useEffect(function () {
      if (shouldUpdate.current) {
        update(instance.current, props);
      }

      shouldUpdate.current = true;
    });
    var classes = getClasses(instance.current, props.classes, Component);

    if (process.env.NODE_ENV !== 'production') {
      React.useDebugValue(classes);
    }

    return classes;
  };

  return useStyles;
}

var useStyles = makeStyles({
  badge: function badge(props) {
    return {
      background: props.badgeColor
    };
  }
});

function ButtonControl(_ref) {
  var children = _ref.children,
      onClick = _ref.onClick,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      _ref$active = _ref.active,
      active = _ref$active === void 0 ? false : _ref$active,
      _ref$text = _ref.text,
      text = _ref$text === void 0 ? '' : _ref$text,
      _ref$badgeColor = _ref.badgeColor,
      badgeColor = _ref$badgeColor === void 0 ? null : _ref$badgeColor,
      rest = _objectWithoutPropertiesLoose(_ref, ["children", "onClick", "disabled", "active", "text", "badgeColor"]);

  var classes = useStyles({
    badgeColor: badgeColor
  });
  return /*#__PURE__*/React.createElement(Tooltip, {
    title: text,
    "aria-disabled": disabled
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(IconButton, _extends({
    onClick: onClick,
    disabled: disabled,
    color: active ? 'primary' : 'default'
  }, rest), /*#__PURE__*/React.createElement(Badge, {
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'left'
    },
    classes: {
      badge: classes.badge
    },
    overlap: "circle",
    badgeContent: " ",
    invisible: badgeColor === null,
    variant: "dot"
  }, children))));
}

ButtonControl.propTypes = {
  children: PropTypes__default.any.isRequired,
  onClick: PropTypes__default.func.isRequired,
  disabled: PropTypes__default.bool,
  text: PropTypes__default.any,
  badgeColor: PropTypes__default.any,
  active: PropTypes__default.bool
};

function UndoControl() {
  var editor = useEditor();
  var editorFocus = useEditorFocus();

  var onClick = function onClick() {
    editor.onChange(draftJs.EditorState.undo(editor.editorState));
    editorFocus();
  };

  return /*#__PURE__*/React.createElement(ButtonControl, {
    onClick: onClick,
    text: editor.translate('controls.undo.title')
  }, /*#__PURE__*/React.createElement(UndoIcon, null));
}

function RedoControl() {
  var editor = useEditor();
  var editorFocus = useEditorFocus();

  var onClick = function onClick() {
    editor.onChange(draftJs.EditorState.redo(editor.editorState));
    editorFocus();
  };

  return /*#__PURE__*/React.createElement(ButtonControl, {
    onClick: onClick,
    text: editor.translate('controls.redo.title')
  }, /*#__PURE__*/React.createElement(RedoIcon, null));
}

var toggleMappedInlineStyle = function toggleMappedInlineStyle(editorState, styleKeys, newInlineStyle) {
  var selection = editorState.getSelection();
  var newContentState = styleKeys.reduce(function (contentState, inlineStyle) {
    return draftJs.Modifier.removeInlineStyle(contentState, selection, inlineStyle);
  }, editorState.getCurrentContent());
  var newEditorState = draftJs.EditorState.push(editorState, newContentState, 'change-inline-style');
  var currentStyle = editorState.getCurrentInlineStyle();

  if (selection.isCollapsed()) {
    newEditorState = currentStyle.reduce(function (state, inlineStyle) {
      return draftJs.RichUtils.toggleInlineStyle(state, inlineStyle);
    }, newEditorState);
  }

  if (!currentStyle.has(newInlineStyle)) {
    newEditorState = draftJs.RichUtils.toggleInlineStyle(newEditorState, newInlineStyle);
  }

  return newEditorState;
};
var getCurrentMappedInlineStyle = function getCurrentMappedInlineStyle(editorState, styleKeys, defaultInlineStyle) {
  if (defaultInlineStyle === void 0) {
    defaultInlineStyle = null;
  }

  var currentStyle = editorState.getCurrentInlineStyle();
  return currentStyle.find(function (inlineStyle) {
    return styleKeys.includes(inlineStyle);
  }) || defaultInlineStyle;
};
var hasAllSelectionTheInlineStyle = function hasAllSelectionTheInlineStyle(editorState, inlineStyle) {
  var selection = editorState.getSelection();
  var startKey = selection.getStartKey();
  var startOffset = selection.getStartOffset();
  var endKey = selection.getEndKey();
  var endOffset = selection.getEndOffset();
  var currentContent = editorState.getCurrentContent();
  var block = currentContent.getBlockForKey(startKey);
  var allHasTheInlineStyle = true;

  var styleRangesCallback = function styleRangesCallback(block) {
    return function (start, end) {
      var expectedStart = block.getKey() === startKey ? startOffset : 0;
      var expectedEnd = block.getKey() === endKey ? endOffset : block.getLength() - 1;
      allHasTheInlineStyle = start <= expectedStart && end >= expectedEnd;
    };
  };

  while (block && allHasTheInlineStyle) {
    allHasTheInlineStyle = false;
    block.findStyleRanges(function (character) {
      return character.hasStyle(inlineStyle);
    }, styleRangesCallback(block));
    if (block.getKey() !== endKey) break;
    block = currentContent.getBlockAfter(block.getKey());
  }

  return allHasTheInlineStyle;
};
var getCurrentBlockType = function getCurrentBlockType(editorState, availableBlockTypes) {
  var blockType = draftJs.RichUtils.getCurrentBlockType(editorState);
  if (availableBlockTypes.find(function (avBlockType) {
    return avBlockType === blockType;
  })) return blockType;
  return 'default';
};
var applyEntityToCurrentSelection = function applyEntityToCurrentSelection(editorState, entityType, mutability, entityData) {
  var content = editorState.getCurrentContent();
  var contentWithEntity = content.createEntity(entityType, mutability, entityData);
  var entityKey = contentWithEntity.getLastCreatedEntityKey();
  var selection = editorState.getSelection();
  var contentStateWithEntity = draftJs.Modifier.applyEntity(contentWithEntity, selection, entityKey);
  return draftJs.EditorState.push(editorState, contentStateWithEntity, 'apply-entity');
};

ToggleInlineStyleButtonControl.propTypes = {
  inlineStyle: PropTypes__default.string.isRequired,
  children: PropTypes__default.any.isRequired,
  text: PropTypes__default.any
};

function ToggleInlineStyleButtonControl(_ref) {
  var inlineStyle = _ref.inlineStyle,
      children = _ref.children,
      text = _ref.text;
  var editor = useEditor();
  var editorFocus = useEditorFocus();

  var _React$useState = React.useState(false),
      isActive = _React$useState[0],
      setIsActive = _React$useState[1];

  React.useEffect(function () {
    setIsActive(hasAllSelectionTheInlineStyle(editor.editorState, inlineStyle));
  }, [editor.editorState, inlineStyle]);

  var onClick = function onClick() {
    var newEditorState = draftJs.RichUtils.toggleInlineStyle(editor.editorState, inlineStyle);
    editor.onChange(newEditorState);
    editorFocus();
  };

  return /*#__PURE__*/React.createElement(ButtonControl, {
    text: text,
    onClick: onClick,
    active: isActive,
    disabled: editor.editorState.getSelection().isCollapsed()
  }, children);
}

var inlineStyles = {
  BOLD: 'BOLD',
  ITALIC: 'ITALIC',
  UNDERLINE: 'UNDERLINE',
  STRIKETHROUGH: 'STRIKETHROUGH',
  CODE: 'CODE',
  FONT_FAMILY: 'FONT_FAMILY',
  FONT_SIZE: 'FONT_SIZE',
  FONT_COLOR: 'FONT_COLOR',
  FONT_BACKGROUND: 'FONT_BACKGROUND'
};

function BoldControl() {
  var editor = useEditor();
  return /*#__PURE__*/React.createElement(ToggleInlineStyleButtonControl, {
    inlineStyle: inlineStyles.BOLD,
    text: editor.translate('controls.bold.title')
  }, /*#__PURE__*/React.createElement(FormatBoldIcon, null));
}

function ItalicControl() {
  var editor = useEditor();
  return /*#__PURE__*/React.createElement(ToggleInlineStyleButtonControl, {
    inlineStyle: inlineStyles.ITALIC,
    text: editor.translate('controls.italic.title')
  }, /*#__PURE__*/React.createElement(FormatItalicIcon, null));
}

function UnderlineControl() {
  var editor = useEditor();
  return /*#__PURE__*/React.createElement(ToggleInlineStyleButtonControl, {
    inlineStyle: inlineStyles.UNDERLINE,
    text: editor.translate('controls.underline.title')
  }, /*#__PURE__*/React.createElement(FormatUnderlinedIcon, null));
}

function StrikethroughControl() {
  var editor = useEditor();
  return /*#__PURE__*/React.createElement(ToggleInlineStyleButtonControl, {
    inlineStyle: inlineStyles.STRIKETHROUGH,
    text: editor.translate('controls.strikethrough.title')
  }, /*#__PURE__*/React.createElement(FormatStrikethroughIcon, null));
}

var entities = {
  LINK: 'LINK',
  IMAGE: 'IMAGE'
};

function LinkAddControl() {
  var editor = useEditor();
  var editorFocus = useEditorFocus();

  var _React$useState = React.useState(false),
      isDialogOpened = _React$useState[0],
      setIsDialogOpened = _React$useState[1];

  var _React$useState2 = React.useState(''),
      link = _React$useState2[0],
      setLink = _React$useState2[1];

  var formRef = React.createRef();

  var onClick = function onClick() {
    setLink('');
    setIsDialogOpened(true);
  };

  var handleCloseDialog = function handleCloseDialog() {
    setIsDialogOpened(false);
  };

  var onChangeLink = function onChangeLink(ev) {
    setLink(ev.currentTarget.value);
  };

  var handleSubmit = function handleSubmit(ev) {
    ev.preventDefault();
    if (link === '') return;
    handleCloseDialog();
    editor.onChange(applyEntityToCurrentSelection(editor.editorState, entities.LINK, 'MUTABLE', {
      url: link
    }));
    editorFocus();
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ButtonControl, {
    onClick: onClick,
    text: editor.translate('controls.linkAdd.title'),
    disabled: editor.editorState.getSelection().isCollapsed()
  }, /*#__PURE__*/React.createElement(LinkIcon, null)), /*#__PURE__*/React.createElement(Dialog, {
    open: isDialogOpened,
    onClose: handleCloseDialog
  }, /*#__PURE__*/React.createElement("form", {
    ref: formRef,
    onSubmit: handleSubmit
  }, /*#__PURE__*/React.createElement(DialogContent, null, /*#__PURE__*/React.createElement(TextField, {
    autoFocus: true,
    label: editor.translate('controls.linkAdd.labels.link'),
    value: link,
    onChange: onChangeLink,
    fullWidth: true
  })), /*#__PURE__*/React.createElement(DialogActions, null, /*#__PURE__*/React.createElement(Button, {
    type: "button",
    onClick: handleCloseDialog,
    color: "primary"
  }, editor.translate('controls.linkAdd.actions.cancel')), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    color: "primary",
    disabled: link === ''
  }, editor.translate('controls.linkAdd.actions.add'))))));
}

var linkStrategy = function linkStrategy(contentBlock, callback, contentState) {
  contentBlock.findEntityRanges(function (character) {
    var entityKey = character.getEntity();
    return entityKey !== null && contentState.getEntity(entityKey).getType() === entities.LINK;
  }, callback);
};

var EditorLink = function EditorLink(_ref) {
  var contentState = _ref.contentState,
      entityKey = _ref.entityKey,
      blockKey = _ref.blockKey,
      start = _ref.start,
      end = _ref.end,
      children = _ref.children;

  var _React$useState = React.useState(null),
      anchorEl = _React$useState[0],
      setAnchorEl = _React$useState[1];

  var editor = useEditor();
  var editorFocus = useEditorFocus();

  var _contentState$getEnti = contentState.getEntity(entityKey).getData(),
      url = _contentState$getEnti.url;

  var showOptions = function showOptions(ev) {
    setAnchorEl(ev.currentTarget);
  };

  var hideOptions = function hideOptions() {
    setAnchorEl(null);
  };

  var openLink = function openLink(ev) {
    ev.preventDefault();
    ev.stopPropagation();
    window.open(url, '_blank');
  };

  var removeLink = function removeLink(ev) {
    ev.preventDefault();
    ev.stopPropagation();
    var linkSelection = draftJs.SelectionState.createEmpty(blockKey).merge({
      anchorKey: blockKey,
      anchorOffset: start,
      focusKey: blockKey,
      focusOffset: end
    });
    editor.onChange(draftJs.RichUtils.toggleLink(editor.editorState, linkSelection, null));
    editorFocus();
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Link, {
    href: url,
    rel: "noopener noreferrer",
    target: "_blank",
    "aria-label": url,
    onClick: showOptions
  }, children), /*#__PURE__*/React.createElement(Popover, {
    open: Boolean(anchorEl),
    onClose: hideOptions,
    anchorEl: anchorEl,
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'center'
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'center'
    }
  }, /*#__PURE__*/React.createElement(ButtonGroup, {
    size: "small",
    "aria-label": "Link options"
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: openLink,
    title: "Open " + url
  }, /*#__PURE__*/React.createElement(LaunchIcon, null)), /*#__PURE__*/React.createElement(Button, {
    onClick: removeLink,
    title: "Remove link"
  }, /*#__PURE__*/React.createElement(LinkOffIcon, null)))));
};

EditorLink.propTypes = {
  contentState: PropTypes__default.object.isRequired,
  entityKey: PropTypes__default.string.isRequired,
  blockKey: PropTypes__default.string.isRequired,
  start: PropTypes__default.number.isRequired,
  end: PropTypes__default.number.isRequired,
  children: PropTypes__default.any
};

var linkAddPlugin = function linkAddPlugin() {
  return {
    decorators: [{
      strategy: linkStrategy,
      component: EditorLink
    }]
  };
};

function LinkRemoveControl() {
  var editor = useEditor();

  var onClick = function onClick() {
    var selection = editor.editorState.getSelection();
    editor.onChange(draftJs.RichUtils.toggleLink(editor.editorState, selection, null));
  };

  return /*#__PURE__*/React.createElement(ButtonControl, {
    onClick: onClick,
    text: editor.translate('controls.linkRemove.title'),
    disabled: editor.editorState.getSelection().isCollapsed()
  }, /*#__PURE__*/React.createElement(LinkOffIcon, null));
}

var LANG_PREFIX = 'lang::';

var translateLiteralWithPrefix = function translateLiteralWithPrefix(literal, translateFn) {
  return (typeof literal === 'string' || literal instanceof String) && literal.substr(0, LANG_PREFIX.length) === LANG_PREFIX ? translateFn(literal.substr(LANG_PREFIX.length)) : literal;
};

var useStyles$1 = makeStyles(function (theme) {
  return {
    selectControl: {
      margin: 1
    }
  };
});

function DropdownControl(_ref) {
  var value = _ref.value,
      _onChange = _ref.onChange,
      options = _ref.options,
      _ref$minWidth = _ref.minWidth,
      minWidth = _ref$minWidth === void 0 ? 120 : _ref$minWidth,
      rest = _objectWithoutPropertiesLoose(_ref, ["value", "onChange", "options", "minWidth"]);

  var classes = useStyles$1();
  var editor = useEditor();
  return /*#__PURE__*/React.createElement(Select, _extends({
    value: value,
    onChange: function onChange(ev) {
      return _onChange(ev.target.value);
    },
    className: classes.selectControl,
    style: {
      minWidth: minWidth
    }
  }, rest), options.map(function (option) {
    return /*#__PURE__*/React.createElement(MenuItem, {
      key: option.value || 'empty',
      value: option.value
    }, option.text ? translateLiteralWithPrefix(option.text, editor.translate) : '');
  }));
}

DropdownControl.propTypes = {
  value: PropTypes__default.string.isRequired,
  onChange: PropTypes__default.func.isRequired,
  options: PropTypes__default.array.isRequired,
  minWidth: PropTypes__default.number
};

function BlockTypeControl(_ref) {
  var configuration = _ref.configuration,
      defaultConfiguration = _ref.defaultConfiguration;
  var editor = useEditor();
  var editorFocus = useEditorFocus();
  var options = configuration.options || defaultConfiguration.options;

  var _React$useState = React.useState('default'),
      value = _React$useState[0],
      setValue = _React$useState[1];

  React.useEffect(function () {
    setValue(getCurrentBlockType(editor.editorState, options.map(function (option) {
      return option.value;
    })));
  }, [editor, options]);

  var handleChange = function handleChange(newValue) {
    setValue(newValue);
    var newEditorState = draftJs.RichUtils.toggleBlockType(editor.editorState, newValue === 'normal' ? '' : newValue);
    editor.onChange(newEditorState);
    editorFocus();
  };

  return /*#__PURE__*/React.createElement(DropdownControl, {
    options: options,
    onChange: handleChange,
    value: value
  });
}

BlockTypeControl.propTypes = {
  configuration: PropTypes__default.any,
  defaultConfiguration: PropTypes__default.any.isRequired
};

ToggleBlockTypeButtonControl.propTypes = {
  blockType: PropTypes__default.string.isRequired,
  children: PropTypes__default.any.isRequired,
  text: PropTypes__default.any
};

function ToggleBlockTypeButtonControl(_ref) {
  var blockType = _ref.blockType,
      children = _ref.children,
      text = _ref.text;
  var editor = useEditor();
  var editorFocus = useEditorFocus();

  var onClick = function onClick() {
    var newEditorState = draftJs.RichUtils.toggleBlockType(editor.editorState, blockType);
    editor.onChange(newEditorState);
    editorFocus();
  };

  return /*#__PURE__*/React.createElement(ButtonControl, {
    text: text,
    onClick: onClick
  }, children);
}

function UnorderedListControl() {
  var editor = useEditor();
  return /*#__PURE__*/React.createElement(ToggleBlockTypeButtonControl, {
    blockType: "unordered-list-item",
    text: editor.translate('controls.unorderedList.title')
  }, /*#__PURE__*/React.createElement(FormatListBulletedIcon, null));
}

var blockStyles = {
  H1: 'header-one',
  H2: 'header-two',
  H3: 'header-three',
  H4: 'header-four',
  H5: 'header-five',
  H6: 'header-six',
  UL: 'unordered-list-item',
  OL: 'ordered-list-item',
  BLOCKQUOTE: 'blockquote',
  CODE_BLOCK: 'code-block',
  UNSTYLED: 'unstyled',
  ATOMIC: 'atomic'
};

function OrderedListControl() {
  var editor = useEditor();
  return /*#__PURE__*/React.createElement(ToggleBlockTypeButtonControl, {
    blockType: blockStyles.OL,
    text: editor.translate('controls.orderedList.title')
  }, /*#__PURE__*/React.createElement(FormatListNumberedIcon, null));
}

function FontFamilyControl(_ref) {
  var pluginData = _ref.pluginData;
  var editor = useEditor();
  var editorFocus = useEditorFocus();

  var _React$useState = React.useState(inlineStyles.FONT_FAMILY + "-default"),
      selectedFontFamilyStyle = _React$useState[0],
      setSelectedFontFamilyStyle = _React$useState[1];

  var styleKeys = Object.keys(pluginData.customStyleMap);
  React.useEffect(function () {
    setSelectedFontFamilyStyle(getCurrentMappedInlineStyle(editor.editorState, styleKeys, inlineStyles.FONT_FAMILY + "-default"));
  }, [editor.editorState, styleKeys]);

  var handleChange = function handleChange(newInlineStyle) {
    setSelectedFontFamilyStyle(newInlineStyle);
    var newEditorState = toggleMappedInlineStyle(editor.editorState, styleKeys, newInlineStyle);
    editor.onChange(newEditorState);
    editorFocus();
  };

  return /*#__PURE__*/React.createElement(DropdownControl, {
    options: styleKeys.map(function (inlineStyle) {
      return {
        value: inlineStyle,
        text: pluginData.customStyleMap[inlineStyle].fontFamily ? /*#__PURE__*/React.createElement("span", {
          style: {
            fontFamily: pluginData.customStyleMap[inlineStyle].fontFamily
          }
        }, pluginData.customStyleMap[inlineStyle].fontFamily) : 'default'
      };
    }),
    onChange: handleChange,
    value: selectedFontFamilyStyle
  });
}

FontFamilyControl.propTypes = {
  pluginData: PropTypes__default.any.isRequired
};

var fontFamilyPlugin = function fontFamilyPlugin(configuration, defaultConfiguration) {
  var fontFamilies = configuration.options || defaultConfiguration.options;
  var customStyleMap = {};

  for (var _iterator = _createForOfIteratorHelperLoose(fontFamilies), _step; !(_step = _iterator()).done;) {
    var fontFamily = _step.value;
    customStyleMap[inlineStyles.FONT_FAMILY + "-" + fontFamily] = fontFamily === 'default' ? {} : {
      fontFamily: fontFamily
    };
  }

  return {
    customStyleMap: customStyleMap
  };
};

function TextAlignControl() {
  var editor = useEditor();
  var editorFocus = useEditorFocus();

  var _React$useState = React.useState(null),
      selectedTextAlign = _React$useState[0],
      setSelectedTextAlign = _React$useState[1];

  React.useEffect(function () {
    var selection = editor.editorState.getSelection();
    var currentBlock = editor.editorState.getCurrentContent().getBlockForKey(selection.getStartKey());
    var blockData = currentBlock.getData();

    if (blockData && blockData.get('textAlign')) {
      setSelectedTextAlign(blockData.get('textAlign'));
    } else {
      setSelectedTextAlign(null);
    }
  }, [editor.editorState]);

  var toggle = function toggle(textAlign) {
    setSelectedTextAlign(textAlign);
    var editorState = editor.editorState;
    var newContentState = draftJs.Modifier.mergeBlockData(editorState.getCurrentContent(), editorState.getSelection(), {
      textAlign: textAlign
    });
    editor.onChange(draftJs.EditorState.push(editorState, newContentState, 'change-block-data'));
    editorFocus();
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ButtonControl, {
    active: selectedTextAlign === 'left',
    onClick: function onClick() {
      return toggle('left');
    },
    text: editor.translate('controls.textAlign.actions.alignLeft')
  }, /*#__PURE__*/React.createElement(FormatAlignLeftIcon, null)), /*#__PURE__*/React.createElement(ButtonControl, {
    active: selectedTextAlign === 'center',
    onClick: function onClick() {
      return toggle('center');
    },
    text: editor.translate('controls.textAlign.actions.alignCenter')
  }, /*#__PURE__*/React.createElement(FormatAlignCenterIcon, null)), /*#__PURE__*/React.createElement(ButtonControl, {
    active: selectedTextAlign === 'right',
    onClick: function onClick() {
      return toggle('right');
    },
    text: editor.translate('controls.textAlign.actions.alignRight')
  }, /*#__PURE__*/React.createElement(FormatAlignRightIcon, null)), /*#__PURE__*/React.createElement(ButtonControl, {
    active: selectedTextAlign === 'justify',
    onClick: function onClick() {
      return toggle('justify');
    },
    text: editor.translate('controls.textAlign.actions.justify')
  }, /*#__PURE__*/React.createElement(FormatAlignJustifyIcon, null)));
}

TextAlignControl.propTypes = {};

var textAlignPlugin = function textAlignPlugin() {
  return {
    blockStyleFn: function blockStyleFn(block) {
      var textAlign = block.getData() ? block.getData().get('textAlign') : null;

      if (textAlign) {
        return "mui-editor-" + textAlign + "-aligned-block";
      }

      return '';
    }
  };
};

FontSizeControl.propTypes = {
  pluginData: PropTypes__default.object.isRequired
};

function FontSizeControl(_ref) {
  var pluginData = _ref.pluginData;
  var editor = useEditor();
  var editorFocus = useEditorFocus();

  var _React$useState = React.useState(inlineStyles.FONT_SIZE + "-default"),
      selectedFontSizeStyle = _React$useState[0],
      setSelectedFontSizeStyle = _React$useState[1];

  var styleKeys = Object.keys(pluginData.customStyleMap);
  React.useEffect(function () {
    setSelectedFontSizeStyle(getCurrentMappedInlineStyle(editor.editorState, styleKeys, inlineStyles.FONT_SIZE + "-default"));
  }, [editor.editorState, styleKeys]);

  var handleChange = function handleChange(newInlineStyle) {
    setSelectedFontSizeStyle(newInlineStyle);
    var newEditorState = toggleMappedInlineStyle(editor.editorState, styleKeys, newInlineStyle);
    editor.onChange(newEditorState);
    editorFocus();
  };

  return /*#__PURE__*/React.createElement(DropdownControl, {
    options: styleKeys.map(function (inlineStyle) {
      return {
        text: pluginData.customStyleMap[inlineStyle].fontSize ? /*#__PURE__*/React.createElement("span", {
          style: {
            fontSize: pluginData.customStyleMap[inlineStyle].fontSize
          }
        }, pluginData.customStyleMap[inlineStyle].fontSize) : 'default',
        value: inlineStyle
      };
    }),
    onChange: handleChange,
    renderValue: function renderValue(style) {
      return pluginData.customStyleMap[style].fontSize || editor.translate('controls.fontSize.labels.default');
    },
    value: selectedFontSizeStyle,
    minWidth: 50
  });
}

var fontSizePlugin = function fontSizePlugin(configuration, defaultConfiguration) {
  var fontSizes = configuration.options || defaultConfiguration.options;
  var customStyleMap = {};

  for (var _iterator = _createForOfIteratorHelperLoose(fontSizes), _step; !(_step = _iterator()).done;) {
    var fontSize = _step.value;
    customStyleMap[inlineStyles.FONT_SIZE + "-" + fontSize] = fontSize === 'default' ? {} : {
      fontSize: fontSize
    };
  }

  return {
    customStyleMap: customStyleMap
  };
};

var isLightOrDark = function isLightOrDark(color) {
  var r, g, b;

  if (color.match(/^rgb/)) {
    color = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);
    r = color[1];
    g = color[2];
    b = color[3];
  } else {
    color = +('0x' + color.slice(1).replace(color.length < 5 && /./g, '$&$&'));
    r = color >> 16;
    g = color >> 8 & 255;
    b = color & 255;
  }

  var hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));

  if (hsp > 127.5) {
    return 'light';
  } else {
    return 'dark';
  }
};

var useStyles$2 = makeStyles({
  colorRow: {
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
    padding: 5
  },
  colorItem: {
    height: 25,
    width: 25,
    borderRadius: '50%',
    margin: 3,
    border: 'solid 1px #c4c4c4',
    cursor: 'pointer',
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center'
  }
});

function ColorSelectorControl(_ref) {
  var selectedColor = _ref.selectedColor,
      onSelectColor = _ref.onSelectColor,
      colors = _ref.colors,
      _ref$colorsPerRow = _ref.colorsPerRow,
      colorsPerRow = _ref$colorsPerRow === void 0 ? 10 : _ref$colorsPerRow,
      children = _ref.children,
      rest = _objectWithoutPropertiesLoose(_ref, ["selectedColor", "onSelectColor", "colors", "colorsPerRow", "children"]);

  var classes = useStyles$2();

  var _React$useState = React.useState(null),
      anchorEl = _React$useState[0],
      setAnchorEl = _React$useState[1];

  var menuId = Math.random().toString(36).substring(8);
  var colorRows = [[]];

  for (var i = 0, rowI = 0; i < colors.length; i++) {
    if (i % colorsPerRow === 0) {
      rowI++;
      colorRows[rowI] = [];
    }

    colorRows[rowI].push(colors[i]);
  }

  var handleOpen = function handleOpen(ev) {
    setAnchorEl(ev.currentTarget);
  };

  var handleClose = function handleClose() {
    setAnchorEl(null);
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ButtonControl, _extends({
    onClick: handleOpen,
    "aria-controls": menuId,
    "aria-haspopup": "true",
    badgeColor: selectedColor ? selectedColor.color : null
  }, rest), children), /*#__PURE__*/React.createElement(Popover, {
    id: menuId,
    anchorEl: anchorEl,
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'left'
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'left'
    },
    keepMounted: true,
    open: Boolean(anchorEl),
    onClose: handleClose
  }, /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
    startIcon: /*#__PURE__*/React.createElement(FormatColorResetIcon, null),
    fullWidth: true,
    color: "secondary",
    onClick: function onClick() {
      handleClose();
      onSelectColor(null);
    }
  }, "None"), colorRows.map(function (colorRow, colorRowI) {
    return /*#__PURE__*/React.createElement("div", {
      key: "color-row-" + colorRowI,
      className: classes.colorRow
    }, colorRow.map(function (colorData) {
      return /*#__PURE__*/React.createElement(Tooltip, {
        key: colorData.value,
        title: colorData.text
      }, /*#__PURE__*/React.createElement("div", {
        onClick: function onClick() {
          handleClose();
          onSelectColor(colorData);
        },
        className: classes.colorItem,
        style: {
          backgroundColor: colorData.color
        }
      }, selectedColor && colorData.value === selectedColor.value ? /*#__PURE__*/React.createElement(CheckIcon, {
        style: {
          color: isLightOrDark(colorData.color) === 'dark' ? '#fff' : '#000'
        }
      }) : null));
    }));
  }))));
}

ColorSelectorControl.propTypes = {
  selectedColor: PropTypes__default.object,
  onSelectColor: PropTypes__default.func.isRequired,
  colors: PropTypes__default.array.isRequired,
  colorsPerRow: PropTypes__default.number,
  children: PropTypes__default.any
};

function ToggleInlineStyleColorSelectorControl(_ref) {
  var configuration = _ref.configuration,
      defaultConfiguration = _ref.defaultConfiguration,
      pluginData = _ref.pluginData,
      colorCssProp = _ref.colorCssProp,
      inlineStyle = _ref.inlineStyle,
      text = _ref.text,
      children = _ref.children;
  var editor = useEditor();
  var editorFocus = useEditorFocus();

  var _React$useState = React.useState(null),
      selectedColor = _React$useState[0],
      setSelectedColor = _React$useState[1];

  var options = configuration.options || defaultConfiguration.options;
  React.useEffect(function () {
    var selectededInlineStyle = getCurrentMappedInlineStyle(editor.editorState, Object.keys(pluginData.customStyleMap), null);
    setSelectedColor(selectededInlineStyle && pluginData.customStyleMap[selectededInlineStyle] ? {
      color: pluginData.customStyleMap[selectededInlineStyle][colorCssProp],
      value: selectededInlineStyle
    } : null);
  }, [editor.editorState, pluginData.customStyleMap, colorCssProp]);

  var handleSelectColor = function handleSelectColor(selectedColorData) {
    setSelectedColor(selectedColorData);
    var newEditorState = toggleMappedInlineStyle(editor.editorState, Object.keys(pluginData.customStyleMap), selectedColorData ? selectedColorData.value : '');
    editor.onChange(newEditorState);
    editorFocus();
  };

  return /*#__PURE__*/React.createElement(ColorSelectorControl, {
    text: text,
    onSelectColor: handleSelectColor,
    selectedColor: selectedColor,
    colorsPerRow: configuration.colorsPerRow || defaultConfiguration.colorsPerRow,
    disabled: editor.editorState.getSelection().isCollapsed(),
    colors: options.map(function (option) {
      return {
        text: option.text,
        color: option.value,
        value: inlineStyle + "-" + option.value
      };
    })
  }, children);
}

ToggleInlineStyleColorSelectorControl.propTypes = {
  configuration: PropTypes__default.object,
  defaultConfiguration: PropTypes__default.object.isRequired,
  pluginData: PropTypes__default.object.isRequired,
  colorCssProp: PropTypes__default.string.isRequired,
  inlineStyle: PropTypes__default.string.isRequired,
  text: PropTypes__default.string,
  children: PropTypes__default.any
};

function FontColorControl(_ref) {
  var configuration = _ref.configuration,
      defaultConfiguration = _ref.defaultConfiguration,
      pluginData = _ref.pluginData;
  var editor = useEditor();
  return /*#__PURE__*/React.createElement(ToggleInlineStyleColorSelectorControl, {
    text: editor.translate('controls.fontColor.title'),
    configuration: configuration,
    defaultConfiguration: defaultConfiguration,
    inlineStyle: inlineStyles.FONT_COLOR,
    pluginData: pluginData,
    colorCssProp: "color"
  }, /*#__PURE__*/React.createElement(FormatColorTextIcon, null));
}

FontColorControl.propTypes = {
  configuration: PropTypes__default.object,
  defaultConfiguration: PropTypes__default.object.isRequired,
  pluginData: PropTypes__default.object.isRequired
};

var fontColorPlugin = function fontColorPlugin(configuration, defaultConfiguration) {
  var fontColors = configuration.options || defaultConfiguration.options;
  var customStyleMap = {};

  for (var _iterator = _createForOfIteratorHelperLoose(fontColors), _step; !(_step = _iterator()).done;) {
    var fontColor = _step.value;
    customStyleMap[inlineStyles.FONT_COLOR + "-" + fontColor.value] = {
      color: fontColor.value
    };
  }

  return {
    customStyleMap: customStyleMap
  };
};

function FontBackgroundColorControl(_ref) {
  var configuration = _ref.configuration,
      defaultConfiguration = _ref.defaultConfiguration,
      pluginData = _ref.pluginData;
  var editor = useEditor();
  return /*#__PURE__*/React.createElement(ToggleInlineStyleColorSelectorControl, {
    text: editor.translate('controls.fontBackgroundColor.title'),
    configuration: configuration,
    defaultConfiguration: defaultConfiguration,
    inlineStyle: inlineStyles.FONT_BACKGROUND,
    pluginData: pluginData,
    colorCssProp: "backgroundColor"
  }, /*#__PURE__*/React.createElement(BorderColorIcon, null));
}

FontBackgroundColorControl.propTypes = {
  configuration: PropTypes__default.object,
  defaultConfiguration: PropTypes__default.object.isRequired,
  pluginData: PropTypes__default.object.isRequired
};

var fontBackgroundColorPlugin = function fontBackgroundColorPlugin(configuration, defaultConfiguration) {
  var fontBgs = configuration.options || defaultConfiguration.options;
  var customStyleMap = {};

  for (var _iterator = _createForOfIteratorHelperLoose(fontBgs), _step; !(_step = _iterator()).done;) {
    var fontBg = _step.value;
    customStyleMap[inlineStyles.FONT_BACKGROUND + "-" + fontBg.value] = {
      backgroundColor: fontBg.value
    };
  }

  return {
    customStyleMap: customStyleMap
  };
};

var useStyles$3 = makeStyles(function (theme) {
  return {
    imgWrapper: {
      maxWidth: '100%',
      maxHeight: 300,
      overflow: 'auto',
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2)
    }
  };
});

function ImageToUpload(_ref) {
  var width = _ref.width,
      height = _ref.height,
      src = _ref.src;
  var classes = useStyles$3();
  return /*#__PURE__*/React.createElement("div", {
    className: classes.imgWrapper
  }, /*#__PURE__*/React.createElement("img", {
    alt: "",
    width: width,
    height: height,
    src: src
  }));
}

ImageToUpload.propTypes = {
  width: PropTypes__default.number.isRequired,
  height: PropTypes__default.number.isRequired,
  src: PropTypes__default.string.isRequired
};

function SizeInputs(_ref) {
  var originalWidth = _ref.originalWidth,
      originalHeight = _ref.originalHeight,
      width = _ref.width,
      height = _ref.height,
      onChangeWidth = _ref.onChangeWidth,
      onChangeHeight = _ref.onChangeHeight;
  var editor = useEditor();

  var _React$useState = React.useState(true),
      maintainAspectRatio = _React$useState[0],
      setMaintainAspectRatio = _React$useState[1];

  var aspectRatio = originalWidth / originalHeight;

  var handleChangeWidth = function handleChangeWidth(ev) {
    ev.stopPropagation();
    var value = ev.currentTarget.value;
    var w = value === '' || isNaN(value) ? 0 : parseInt(value);
    onChangeWidth(w);

    if (maintainAspectRatio) {
      onChangeHeight(Math.round(w / aspectRatio));
    }
  };

  var handleChangeHeight = function handleChangeHeight(ev) {
    ev.stopPropagation();
    var value = ev.currentTarget.value;
    var h = value === '' || isNaN(value) ? 0 : parseInt(value);
    onChangeHeight(h);

    if (maintainAspectRatio) {
      onChangeWidth(Math.round(h * aspectRatio));
    }
  };

  var handleClickAspectRatio = function handleClickAspectRatio() {
    var newMaintainAspectRatio = !maintainAspectRatio;
    setMaintainAspectRatio(newMaintainAspectRatio);

    if (newMaintainAspectRatio) {
      onChangeHeight(Math.round(width / aspectRatio));
    }
  };

  return /*#__PURE__*/React.createElement(Grid, {
    container: true,
    direction: "row",
    justify: "flex-end",
    alignItems: "center",
    spacing: 2
  }, /*#__PURE__*/React.createElement(Grid, {
    item: true
  }, /*#__PURE__*/React.createElement(TextField, {
    type: "number",
    label: editor.translate('controls.image.labels.width'),
    size: "small",
    value: width,
    onChange: handleChangeWidth,
    onClick: function onClick(ev) {
      return ev.stopPropagation();
    },
    style: {
      maxWidth: 90
    }
  })), /*#__PURE__*/React.createElement(Grid, {
    item: true
  }, /*#__PURE__*/React.createElement(IconButton, {
    onClick: handleClickAspectRatio,
    size: "small"
  }, maintainAspectRatio ? /*#__PURE__*/React.createElement(LockIcon, null) : /*#__PURE__*/React.createElement(LockOpenIcon, null))), /*#__PURE__*/React.createElement(Grid, {
    item: true
  }, /*#__PURE__*/React.createElement(TextField, {
    type: "number",
    label: editor.translate('controls.image.labels.height'),
    size: "small",
    value: height,
    onChange: handleChangeHeight,
    onClick: function onClick(ev) {
      return ev.stopPropagation();
    },
    style: {
      maxWidth: 90
    }
  })));
}

SizeInputs.propTypes = {
  originalWidth: PropTypes__default.number.isRequired,
  originalHeight: PropTypes__default.number.isRequired,
  width: PropTypes__default.number.isRequired,
  height: PropTypes__default.number.isRequired,
  onChangeWidth: PropTypes__default.func.isRequired,
  onChangeHeight: PropTypes__default.func.isRequired
};

function ByUrlDialog(_ref) {
  var open = _ref.open,
      onClose = _ref.onClose,
      onSubmit = _ref.onSubmit;
  var editor = useEditor();

  var _React$useState = React.useState(''),
      imageURL = _React$useState[0],
      setImageURL = _React$useState[1];

  var _React$useState2 = React.useState(0),
      imageWidth = _React$useState2[0],
      setImageWidth = _React$useState2[1];

  var _React$useState3 = React.useState(0),
      imageOriginalWidth = _React$useState3[0],
      setImageOriginalWidth = _React$useState3[1];

  var _React$useState4 = React.useState(0),
      imageHeight = _React$useState4[0],
      setImageHeight = _React$useState4[1];

  var _React$useState5 = React.useState(0),
      imageOriginalHeight = _React$useState5[0],
      setImageOriginalHeight = _React$useState5[1];

  var _React$useState6 = React.useState(false),
      isUploading = _React$useState6[0],
      setIsUploading = _React$useState6[1];

  var _React$useState7 = React.useState(false),
      isValidImage = _React$useState7[0],
      setIsValidImage = _React$useState7[1];

  var _React$useState8 = React.useState(false),
      hasError = _React$useState8[0],
      setHasError = _React$useState8[1];

  var _React$useState9 = React.useState(null),
      changeTimeout = _React$useState9[0],
      setChangeTimeout = _React$useState9[1];

  var handleSubmit = function handleSubmit(ev) {
    ev.preventDefault();
    onSubmit({
      imageURL: imageURL,
      imageWidth: imageWidth,
      imageHeight: imageHeight
    });
  };

  var resetForm = function resetForm() {
    setIsValidImage(false);
    setImageURL('');
  };

  var handleURLChange = function handleURLChange(url) {
    setImageURL(url);

    if (changeTimeout) {
      clearTimeout(changeTimeout);
      setChangeTimeout(null);
    }

    if (url === '') {
      setHasError(false);
      setIsValidImage(false);
      return;
    }

    var to = setTimeout(function () {
      setIsUploading(true);
      var image = new Image();

      image.onload = function () {
        setImageWidth(this.width);
        setImageOriginalWidth(this.width);
        setImageHeight(this.height);
        setImageOriginalHeight(this.height);
        setIsUploading(false);
        setIsValidImage(true);
        setHasError(false);
      };

      image.onerror = function () {
        setIsUploading(false);
        setIsValidImage(false);
        setHasError(true);
      };

      image.src = url;
      setChangeTimeout(null);
    }, 1000);
    setChangeTimeout(to);
  };

  var content = null;
  if (isUploading) content = /*#__PURE__*/React.createElement(CircularProgress, null);else if (isValidImage && imageURL) content = /*#__PURE__*/React.createElement(ImageToUpload, {
    src: imageURL,
    height: imageHeight,
    width: imageWidth
  });else if (hasError && !isValidImage && imageURL) content = /*#__PURE__*/React.createElement(Typography, {
    variant: "subtitle1",
    color: "error",
    gutterBottom: true
  }, editor.translate('controls.image.errorMessages.notValidImage'));
  return /*#__PURE__*/React.createElement(Dialog, {
    open: open,
    onClose: onClose,
    onEnter: resetForm
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/React.createElement(DialogContent, null, isValidImage && imageURL !== '' && /*#__PURE__*/React.createElement(SizeInputs, {
    width: imageWidth,
    onChangeHeight: setImageHeight,
    height: imageHeight,
    originalWidth: imageOriginalWidth,
    originalHeight: imageOriginalHeight,
    onChangeWidth: setImageWidth
  }), /*#__PURE__*/React.createElement(Grid, {
    container: true,
    alignItems: "center",
    justify: "center"
  }, content), /*#__PURE__*/React.createElement(TextField, {
    autoFocus: true,
    label: editor.translate('controls.image.labels.url'),
    value: imageURL,
    onChange: function onChange(ev) {
      return handleURLChange(ev.currentTarget.value);
    },
    fullWidth: true
  })), /*#__PURE__*/React.createElement(DialogActions, null, /*#__PURE__*/React.createElement(Button, {
    type: "button",
    onClick: onClose,
    color: "primary"
  }, editor.translate('controls.image.actions.cancel')), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    color: "primary",
    disabled: !isValidImage
  }, editor.translate('controls.image.actions.add')))));
}

ByUrlDialog.propTypes = {
  open: PropTypes__default.bool.isRequired,
  onClose: PropTypes__default.func.isRequired,
  onSubmit: PropTypes__default.func.isRequired
};

// A type of promise-like that resolves synchronously and supports only one observer

const _iteratorSymbol = /*#__PURE__*/ typeof Symbol !== "undefined" ? (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))) : "@@iterator";

const _asyncIteratorSymbol = /*#__PURE__*/ typeof Symbol !== "undefined" ? (Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator"))) : "@@asyncIterator";

// Asynchronously call a function and send errors to recovery continuation
function _catch(body, recover) {
	try {
		var result = body();
	} catch(e) {
		return recover(e);
	}
	if (result && result.then) {
		return result.then(void 0, recover);
	}
	return result;
}

var useStyles$4 = makeStyles(function (theme) {
  return {
    dropArea: function dropArea(_ref) {
      var highlightDropArea = _ref.highlightDropArea;
      return {
        width: 500,
        height: 300,
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 2,
        marginTop: 1,
        marginBottom: 2,
        borderRadius: 4,
        backgroundColor: highlightDropArea ? '#bdbdbd' : '#eeeeee',
        border: highlightDropArea ? 'solid 3px #757575' : 'dashed 3px #bdbdbd',
        color: 'rgba(0, 0, 0, 0.38)',
        cursor: 'pointer'
      };
    }
  };
});

function UploadDialog(_ref2) {
  var open = _ref2.open,
      onClose = _ref2.onClose,
      onSubmit = _ref2.onSubmit,
      uploadCallback = _ref2.uploadCallback;
  var editor = useEditor();

  var _React$useState = React.useState(''),
      imageURL = _React$useState[0],
      setImageURL = _React$useState[1];

  var _React$useState2 = React.useState(0),
      imageWidth = _React$useState2[0],
      setImageWidth = _React$useState2[1];

  var _React$useState3 = React.useState(0),
      imageOriginalWidth = _React$useState3[0],
      setImageOriginalWidth = _React$useState3[1];

  var _React$useState4 = React.useState(0),
      imageHeight = _React$useState4[0],
      setImageHeight = _React$useState4[1];

  var _React$useState5 = React.useState(0),
      imageOriginalHeight = _React$useState5[0],
      setImageOriginalHeight = _React$useState5[1];

  var _React$useState6 = React.useState(false),
      isUploading = _React$useState6[0],
      setIsUploading = _React$useState6[1];

  var _React$useState7 = React.useState(false),
      isValidImage = _React$useState7[0],
      setIsValidImage = _React$useState7[1];

  var _React$useState8 = React.useState(false),
      hasError = _React$useState8[0],
      setHasError = _React$useState8[1];

  var _React$useState9 = React.useState(null),
      errorMessage = _React$useState9[0],
      setErrorMessage = _React$useState9[1];

  var _React$useState10 = React.useState(false),
      highlightDropArea = _React$useState10[0],
      setHighlightDropArea = _React$useState10[1];

  var inputFileRef = React.createRef();
  var classes = useStyles$4({
    highlightDropArea: highlightDropArea
  });

  var handleSubmit = function handleSubmit(ev) {
    ev.preventDefault();
    ev.stopPropagation();
    onSubmit({
      imageURL: imageURL,
      imageWidth: imageWidth,
      imageHeight: imageHeight
    });
  };

  var handleClickDropArea = function handleClickDropArea(ev) {
    ev.preventDefault();
    inputFileRef.current.click();
  };

  var handleDragEnter = function handleDragEnter(ev) {
    ev.preventDefault();
    ev.stopPropagation();
    setHighlightDropArea(true);
  };

  var handleDragLeave = function handleDragLeave(ev) {
    ev.preventDefault();
    ev.stopPropagation();
    setHighlightDropArea(false);
  };

  var handleDragOver = function handleDragOver(ev) {
    ev.preventDefault();
    ev.stopPropagation();
    setHighlightDropArea(true);
  };

  var handleDrop = function handleDrop(ev) {
    try {
      ev.preventDefault();
      ev.stopPropagation();
      var files = ev.dataTransfer.files;

      var _temp2 = function () {
        if (files.length > 0) return Promise.resolve(onSelectFile(files[0])).then(function () {});
      }();

      return Promise.resolve(_temp2 && _temp2.then ? _temp2.then(function () {}) : void 0);
    } catch (e) {
      return Promise.reject(e);
    }
  };

  var handleInputFileChange = function handleInputFileChange() {
    try {
      var files = inputFileRef.current.files;

      var _temp4 = function () {
        if (files.length > 0) return Promise.resolve(onSelectFile(files[0])).then(function () {});
      }();

      return Promise.resolve(_temp4 && _temp4.then ? _temp4.then(function () {}) : void 0);
    } catch (e) {
      return Promise.reject(e);
    }
  };

  var onSelectFile = function onSelectFile(file) {
    try {
      setHighlightDropArea(false);
      setIsUploading(true);

      var _temp6 = _catch(function () {
        return Promise.resolve(uploadCallback(file)).then(function (selectedImageUrl) {
          setImageURL(selectedImageUrl);
          var image = new Image();

          image.onload = function () {
            setImageWidth(this.width);
            setImageOriginalWidth(this.width);
            setImageHeight(this.height);
            setImageOriginalHeight(this.height);
            setIsUploading(false);
            setIsValidImage(true);
            setHasError(false);
          };

          image.onerror = function () {
            setIsUploading(false);
            setIsValidImage(false);
            setHasError(true);
            setErrorMessage(null);
          };

          image.src = selectedImageUrl;
        });
      }, function (e) {
        setIsUploading(false);
        setIsValidImage(false);
        setHasError(true);
        setErrorMessage(e);
      });

      return Promise.resolve(_temp6 && _temp6.then ? _temp6.then(function () {}) : void 0);
    } catch (e) {
      return Promise.reject(e);
    }
  };

  var resetForm = function resetForm() {
    setImageURL('');
    setIsValidImage(false);
    setIsUploading(false);
    setHighlightDropArea(false);
  };

  var dropAreaContent = /*#__PURE__*/React.createElement(Typography, {
    variant: "subtitle1"
  }, editor.translate('controls.image.labels.dropImageHere'));

  if (isUploading) {
    dropAreaContent = /*#__PURE__*/React.createElement(CircularProgress, null);
  } else if (isValidImage && imageURL) {
    dropAreaContent = /*#__PURE__*/React.createElement(ImageToUpload, {
      src: imageURL,
      height: imageHeight,
      width: imageWidth
    });
  }

  return /*#__PURE__*/React.createElement(Dialog, {
    open: open,
    onClose: onClose,
    onEnter: resetForm
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/React.createElement(DialogContent, null, /*#__PURE__*/React.createElement("input", {
    ref: inputFileRef,
    type: "file",
    accept: "image/*",
    onChange: handleInputFileChange,
    style: {
      display: 'none'
    }
  }), isValidImage && imageURL !== '' && /*#__PURE__*/React.createElement(SizeInputs, {
    originalWidth: imageOriginalWidth,
    originalHeight: imageOriginalHeight,
    width: imageWidth,
    height: imageHeight,
    onChangeWidth: setImageWidth,
    onChangeHeight: setImageHeight
  }), hasError && !isValidImage && /*#__PURE__*/React.createElement(Typography, {
    variant: "subtitle1",
    color: "error",
    align: "center",
    gutterBottom: true
  }, errorMessage !== null ? errorMessage : editor.translate('controls.image.errorMessages.notValidImage')), /*#__PURE__*/React.createElement("div", {
    className: classes.dropArea,
    onClick: handleClickDropArea,
    onDragEnter: handleDragEnter,
    onDragLeave: handleDragLeave,
    onDragOver: handleDragOver,
    onDrop: handleDrop
  }, dropAreaContent)), /*#__PURE__*/React.createElement(DialogActions, null, /*#__PURE__*/React.createElement(Button, {
    type: "button",
    onClick: onClose,
    color: "primary"
  }, editor.translate('controls.image.actions.cancel')), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    color: "primary",
    disabled: !isValidImage
  }, editor.translate('controls.image.actions.add')))));
}

UploadDialog.propTypes = {
  open: PropTypes__default.bool.isRequired,
  onClose: PropTypes__default.func.isRequired,
  onSubmit: PropTypes__default.func.isRequired,
  uploadCallback: PropTypes__default.func.isRequired
};

function ResizeImageDialog(_ref) {
  var open = _ref.open,
      onClose = _ref.onClose,
      src = _ref.src,
      originalWidth = _ref.originalWidth,
      originalHeight = _ref.originalHeight,
      onSave = _ref.onSave;

  var _React$useState = React.useState(0),
      width = _React$useState[0],
      setWidth = _React$useState[1];

  var _React$useState2 = React.useState(0),
      height = _React$useState2[0],
      setHeight = _React$useState2[1];

  var editor = useEditor();
  React.useEffect(function () {
    setWidth(originalWidth);
    setHeight(originalHeight);
  }, [originalWidth, originalHeight]);

  var handleSubmit = function handleSubmit(ev) {
    ev.preventDefault();
    onSave(width, height);
  };

  return /*#__PURE__*/React.createElement(Dialog, {
    open: open,
    onClose: onClose
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/React.createElement(DialogContent, null, /*#__PURE__*/React.createElement(SizeInputs, {
    width: width,
    height: height,
    onChangeWidth: setWidth,
    onChangeHeight: setHeight,
    originalWidth: originalWidth,
    originalHeight: originalHeight
  }), /*#__PURE__*/React.createElement(Grid, {
    container: true,
    alignItems: "center",
    justify: "center"
  }, /*#__PURE__*/React.createElement(ImageToUpload, {
    src: src,
    width: width,
    height: height
  }))), /*#__PURE__*/React.createElement(DialogActions, null, /*#__PURE__*/React.createElement(Button, {
    type: "button",
    onClick: function onClick() {
      return onClose();
    }
  }, editor.translate('controls.image.actions.cancel')), /*#__PURE__*/React.createElement(Button, {
    type: "submit"
  }, editor.translate('controls.image.actions.resize')))));
}

ResizeImageDialog.propTypes = {
  open: PropTypes__default.bool.isRequired,
  onClose: PropTypes__default.func.isRequired,
  src: PropTypes__default.string.isRequired,
  originalWidth: PropTypes__default.number.isRequired,
  originalHeight: PropTypes__default.number.isRequired,
  onSave: PropTypes__default.func.isRequired
};

function ImageControl(_ref) {
  var configuration = _ref.configuration,
      defaultConfiguration = _ref.defaultConfiguration;
  var editor = useEditor();
  var editorFocus = useEditorFocus();
  var menuId = Math.random().toString(36).substring(8);

  var _React$useState = React.useState(null),
      anchorEl = _React$useState[0],
      setAnchorEl = _React$useState[1];

  var _React$useState2 = React.useState(false),
      isUploadDialogOpened = _React$useState2[0],
      setIsUploadDialogOpened = _React$useState2[1];

  var _React$useState3 = React.useState(false),
      isUrlDialogOpened = _React$useState3[0],
      setIsUrlDialogOpened = _React$useState3[1];

  var uploadCallback = configuration.uploadCallback || defaultConfiguration.uploadCallback;
  var imageEntityToResize = editor.resizeImageEntityKey ? editor.editorState.getCurrentContent().getEntity(editor.resizeImageEntityKey) : null;

  var handleSubmitImage = function handleSubmitImage(_ref2) {
    var imageURL = _ref2.imageURL,
        imageWidth = _ref2.imageWidth,
        imageHeight = _ref2.imageHeight;
    if (imageURL === '') return;
    setIsUrlDialogOpened(false);
    setIsUploadDialogOpened(false);
    var contentState = editor.editorState.getCurrentContent();
    var contentStateWithEntity = contentState.createEntity(entities.IMAGE, 'IMMUTABLE', {
      src: imageURL,
      width: imageWidth,
      height: imageHeight
    });
    var entityKey = contentStateWithEntity.getLastCreatedEntityKey();
    var newEditorState = draftJs.EditorState.push(editor.editorState, contentStateWithEntity, 'apply-entity');
    editor.onChange(draftJs.AtomicBlockUtils.insertAtomicBlock(newEditorState, entityKey, ' '));
    editorFocus();
  };

  var handleResizeImage = function handleResizeImage(width, height) {
    editor.hideResizeImageDialog();
    var contentState = editor.editorState.getCurrentContent();
    var newEditorState = draftJs.EditorState.push(editor.editorState, contentState.mergeEntityData(editor.resizeImageEntityKey, {
      width: width,
      height: height
    }), 'apply-entity');
    editor.onChange(newEditorState);
    editorFocus();
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ButtonControl, {
    onClick: function onClick(ev) {
      return setAnchorEl(ev.currentTarget);
    },
    text: editor.translate('controls.image.title'),
    "aria-controls": menuId,
    "aria-haspopup": "true"
  }, /*#__PURE__*/React.createElement(ImageIcon, null)), /*#__PURE__*/React.createElement(Popover, {
    id: menuId,
    anchorEl: anchorEl,
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'left'
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'left'
    },
    keepMounted: true,
    open: Boolean(anchorEl),
    onClose: function onClose() {
      return setAnchorEl(null);
    }
  }, /*#__PURE__*/React.createElement(List, {
    component: "nav",
    "aria-label": editor.translate('controls.image.labels.insertOptions')
  }, /*#__PURE__*/React.createElement(ListItem, {
    button: true,
    onClick: function onClick() {
      setIsUploadDialogOpened(true);
      setAnchorEl(null);
    }
  }, /*#__PURE__*/React.createElement(ListItemIcon, null, /*#__PURE__*/React.createElement(PublishIcon, null)), /*#__PURE__*/React.createElement(ListItemText, {
    primary: editor.translate('controls.image.actions.upload')
  })), /*#__PURE__*/React.createElement(ListItem, {
    button: true,
    onClick: function onClick() {
      setIsUrlDialogOpened(true);
      setAnchorEl(null);
    }
  }, /*#__PURE__*/React.createElement(ListItemIcon, null, /*#__PURE__*/React.createElement(LinkIcon, null)), /*#__PURE__*/React.createElement(ListItemText, {
    primary: editor.translate('controls.image.actions.url')
  })))), /*#__PURE__*/React.createElement(ByUrlDialog, {
    onSubmit: handleSubmitImage,
    onClose: function onClose() {
      return setIsUrlDialogOpened(false);
    },
    open: isUrlDialogOpened
  }), /*#__PURE__*/React.createElement(UploadDialog, {
    onSubmit: handleSubmitImage,
    onClose: function onClose() {
      return setIsUploadDialogOpened(false);
    },
    open: isUploadDialogOpened,
    uploadCallback: uploadCallback
  }), /*#__PURE__*/React.createElement(ResizeImageDialog, {
    open: editor.isResizeImageDialogVisible,
    onClose: function onClose() {
      return editor.hideResizeImageDialog();
    },
    src: imageEntityToResize ? imageEntityToResize.getData().src : '',
    originalWidth: imageEntityToResize ? imageEntityToResize.getData().width : 0,
    originalHeight: imageEntityToResize ? imageEntityToResize.getData().height : 0,
    onSave: handleResizeImage
  }));
}

ImageControl.propTypes = {
  configuration: PropTypes__default.object.isRequired,
  defaultConfiguration: PropTypes__default.object.isRequired
};

var EditorMedia = function EditorMedia(_ref) {
  var contentState = _ref.contentState,
      block = _ref.block;
  var entity = contentState.getEntity(block.getEntityAt(0));
  var type = entity.getType();

  if (type === entities.IMAGE) {
    var _entity$getData = entity.getData(),
        src = _entity$getData.src,
        _entity$getData$width = _entity$getData.width,
        width = _entity$getData$width === void 0 ? 'auto' : _entity$getData$width,
        _entity$getData$heigh = _entity$getData.height,
        height = _entity$getData$heigh === void 0 ? 'auto' : _entity$getData$heigh;

    return /*#__PURE__*/React.createElement(EditorImage, {
      src: src,
      width: width,
      height: height,
      block: block,
      contentState: contentState
    });
  }

  return null;
};

EditorMedia.propTypes = {
  contentState: PropTypes__default.object.isRequired,
  block: PropTypes__default.object.isRequired
};
var useStyles$5 = makeStyles(function (theme) {
  return {
    imgInfo: {
      padding: 0.6
    }
  };
});

var EditorImage = function EditorImage(_ref2) {
  var src = _ref2.src,
      width = _ref2.width,
      height = _ref2.height,
      contentState = _ref2.contentState,
      block = _ref2.block;

  var _React$useState = React.useState(null),
      anchorEl = _React$useState[0],
      setAnchorEl = _React$useState[1];

  var _React$useState2 = React.useState(null),
      infoAnchorEl = _React$useState2[0],
      setInfoAnchorEl = _React$useState2[1];

  var editor = useEditor();
  var editorFocus = useEditorFocus();
  var classes = useStyles$5();

  var showOptions = function showOptions(ev) {
    setAnchorEl(ev.currentTarget);
    setInfoAnchorEl(ev.currentTarget);
  };

  var hideOptions = function hideOptions() {
    setAnchorEl(null);
    setInfoAnchorEl(null);
  };

  var imageAlign = function imageAlign(ev, align) {
    ev.preventDefault();
    ev.stopPropagation();
    var imageSelection = draftJs.SelectionState.createEmpty(block.getKey()).merge({
      anchorKey: block.getKey(),
      anchorOffset: 0,
      focusKey: block.getKey(),
      focusOffset: block.getLength()
    });
    var newContentState = draftJs.Modifier.setBlockData(contentState, imageSelection, {
      textAlign: align
    });
    editor.onChange(draftJs.EditorState.push(editor.editorState, newContentState, 'change-block-data'));
    editorFocus();
  };

  var removeImage = function removeImage(ev) {
    ev.preventDefault();
    ev.stopPropagation();
    var imageSelection = draftJs.SelectionState.createEmpty(block.getKey()).merge({
      anchorKey: block.getKey(),
      anchorOffset: 0,
      focusKey: block.getKey(),
      focusOffset: block.getLength()
    });
    var newContentState = draftJs.Modifier.removeRange(contentState, imageSelection, 'forward');
    var blockMap = newContentState.getBlockMap()["delete"](block.getKey());
    var firstBlock = newContentState.getFirstBlock();
    var selectionToStart = draftJs.SelectionState.createEmpty(firstBlock.getKey()).merge({
      anchorKey: firstBlock.getKey(),
      anchorOffset: 0,
      focusKey: firstBlock.getKey(),
      focusOffset: 0
    });
    newContentState = newContentState.merge({
      blockMap: blockMap,
      selectionAfter: selectionToStart
    });
    editor.onChange(draftJs.EditorState.push(editor.editorState, newContentState, 'remove-range'));
    editorFocus();
  };

  if (!src) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("img", {
    alt: src,
    src: src,
    width: width,
    height: height,
    onClick: showOptions
  }), /*#__PURE__*/React.createElement(Popover, {
    open: Boolean(infoAnchorEl),
    onClose: hideOptions,
    anchorEl: infoAnchorEl,
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    transformOrigin: {
      vertical: 'bottom',
      horizontal: 'right'
    }
  }, /*#__PURE__*/React.createElement(Typography, {
    color: "textSecondary",
    variant: "body1",
    className: classes.imgInfo
  }, width, "\xA0x\xA0", height)), /*#__PURE__*/React.createElement(Popover, {
    open: Boolean(anchorEl),
    onClose: hideOptions,
    anchorEl: anchorEl,
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'center'
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'center'
    }
  }, /*#__PURE__*/React.createElement(ButtonGroup, {
    size: "small",
    "aria-label": editor.translate('controls.image.labels.editOptions')
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: function onClick(ev) {
      return imageAlign(ev, 'left');
    },
    title: editor.translate('controls.image.actions.alignLeft')
  }, /*#__PURE__*/React.createElement(ArrowLeftIcon, null), /*#__PURE__*/React.createElement(ImageIcon, null)), /*#__PURE__*/React.createElement(Button, {
    onClick: function onClick(ev) {
      return imageAlign(ev, 'center');
    },
    title: editor.translate('controls.image.actions.alignCenter')
  }, /*#__PURE__*/React.createElement(ArrowLeftIcon, null), /*#__PURE__*/React.createElement(ImageIcon, null), /*#__PURE__*/React.createElement(ArrowRightIcon, null)), /*#__PURE__*/React.createElement(Button, {
    onClick: function onClick(ev) {
      return imageAlign(ev, 'right');
    },
    title: editor.translate('controls.image.actions.alignRight')
  }, /*#__PURE__*/React.createElement(ImageIcon, null), /*#__PURE__*/React.createElement(ArrowRightIcon, null)), /*#__PURE__*/React.createElement(Button, {
    onClick: function onClick() {
      hideOptions();
      editor.showResizeImageDialog(block.getEntityAt(0));
    },
    title: editor.translate('controls.image.actions.resize')
  }, /*#__PURE__*/React.createElement(PhotoSizeSelectLargeIcon, null)), /*#__PURE__*/React.createElement(Button, {
    onClick: removeImage,
    title: editor.translate('controls.image.actions.remove')
  }, /*#__PURE__*/React.createElement(DeleteIcon, null)))));
};

EditorImage.propTypes = {
  src: PropTypes__default.string,
  width: PropTypes__default.oneOfType([PropTypes__default.string, PropTypes__default.number]).isRequired,
  height: PropTypes__default.oneOfType([PropTypes__default.string, PropTypes__default.number]).isRequired,
  contentState: PropTypes__default.object.isRequired,
  block: PropTypes__default.object.isRequired
};

var imagePlugin = function imagePlugin() {
  return {
    blockRendererFn: function blockRendererFn(block) {
      if (block.getType() === blockStyles.ATOMIC) {
        return {
          component: EditorMedia,
          editable: false
        };
      }
    }
  };
};

var fileToBase64 = function fileToBase64(file) {
  return new Promise(function (resolve, reject) {
    var reader = new FileReader();

    reader.onload = function () {
      return resolve(reader.result);
    };

    reader.onerror = function () {
      return reject(reader.error);
    };

    reader.readAsDataURL(file);
  });
};

var toolbarControlTypes = {
  divider: {
    name: 'divider',
    component: DividerControl
  },
  undo: {
    name: 'undo',
    component: UndoControl
  },
  redo: {
    name: 'undo',
    component: RedoControl
  },
  bold: {
    name: 'bold',
    component: BoldControl
  },
  italic: {
    name: 'italic',
    component: ItalicControl
  },
  underline: {
    name: 'underline',
    component: UnderlineControl
  },
  strikethrough: {
    name: 'strikethrough',
    component: StrikethroughControl
  },
  fontColor: {
    name: 'fontColor',
    component: FontColorControl,
    plugin: fontColorPlugin
  },
  fontBackgroundColor: {
    name: 'fontBackgroundColor',
    component: FontBackgroundColorControl,
    plugin: fontBackgroundColorPlugin
  },
  linkAdd: {
    name: 'linkAdd',
    component: LinkAddControl,
    plugin: linkAddPlugin
  },
  linkRemove: {
    name: 'linkRemove',
    component: LinkRemoveControl
  },
  image: {
    name: 'image',
    component: ImageControl,
    plugin: imagePlugin
  },
  blockType: {
    name: 'blockType',
    component: BlockTypeControl
  },
  fontSize: {
    name: 'fontSize',
    component: FontSizeControl,
    plugin: fontSizePlugin
  },
  fontFamily: {
    name: 'fontFamily',
    component: FontFamilyControl,
    plugin: fontFamilyPlugin
  },
  textAlign: {
    name: 'textAlign',
    component: TextAlignControl,
    plugin: textAlignPlugin
  },
  unorderedList: {
    name: 'unorderedList',
    component: UnorderedListControl
  },
  orderedList: {
    name: 'orderedList',
    component: OrderedListControl
  }
};
var defaultToolbarControls = [toolbarControlTypes.undo, toolbarControlTypes.redo, toolbarControlTypes.divider, toolbarControlTypes.bold, toolbarControlTypes.italic, toolbarControlTypes.underline, toolbarControlTypes.strikethrough, toolbarControlTypes.fontColor, toolbarControlTypes.fontBackgroundColor, toolbarControlTypes.divider, toolbarControlTypes.linkAdd, toolbarControlTypes.linkRemove, toolbarControlTypes.image, toolbarControlTypes.divider, toolbarControlTypes.blockType, toolbarControlTypes.fontSize, toolbarControlTypes.fontFamily, toolbarControlTypes.textAlign, toolbarControlTypes.divider, toolbarControlTypes.unorderedList, toolbarControlTypes.orderedList];
var colors = [{
  text: 'black',
  value: 'rgb(0, 0, 0)'
}, {
  text: 'dark grey 4',
  value: 'rgb(67, 67, 67)'
}, {
  text: 'dark grey 3',
  value: 'rgb(102, 102, 102)'
}, {
  text: 'dark grey 2',
  value: 'rgb(153, 153, 153)'
}, {
  text: 'dark grey 1',
  value: 'rgb(183, 183, 183)'
}, {
  text: 'grey',
  value: 'rgb(204, 204, 204)'
}, {
  text: 'light grey 1',
  value: 'rgb(217, 217, 217)'
}, {
  text: 'light grey 2',
  value: 'rgb(239, 239, 239)'
}, {
  text: 'light grey 3',
  value: 'rgb(243, 243, 243)'
}, {
  text: 'white',
  value: 'rgb(255, 255, 255)'
}, {
  text: 'Red berry',
  value: 'rgb(152, 0, 0)'
}, {
  text: 'red',
  value: 'rgb(255, 0, 0)'
}, {
  text: 'orange',
  value: 'rgb(255, 153, 0)'
}, {
  text: 'yellow',
  value: 'rgb(255, 255, 0)'
}, {
  text: 'green',
  value: 'rgb(0, 255, 0)'
}, {
  text: 'cyan',
  value: 'rgb(0, 255, 255)'
}, {
  text: 'cornflower blue',
  value: 'rgb(74, 134, 232)'
}, {
  text: 'blue',
  value: 'rgb(0, 0, 255)'
}, {
  text: 'purple',
  value: 'rgb(153, 0, 255)'
}, {
  text: 'magenta',
  value: 'rgb(255, 0, 255)'
}, {
  text: 'light red berry 3',
  value: 'rgb(230, 184, 175)'
}, {
  text: 'light red 3',
  value: 'rgb(244, 204, 204)'
}, {
  text: 'light orange 3',
  value: 'rgb(252, 229, 205)'
}, {
  text: 'light yellow 3',
  value: 'rgb(255, 242, 204)'
}, {
  text: 'light green 3',
  value: 'rgb(217, 234, 211)'
}, {
  text: 'light cyan 3',
  value: 'rgb(208, 224, 227)'
}, {
  text: 'light cornflower blue 3',
  value: 'rgb(201, 218, 248)'
}, {
  text: 'light blue 3',
  value: 'rgb(207, 226, 243)'
}, {
  text: 'light purple 3',
  value: 'rgb(217, 210, 233)'
}, {
  text: 'light magenta 3',
  value: 'rgb(234, 209, 220)'
}, {
  text: 'light red berry 2',
  value: 'rgb(221, 126, 107)'
}, {
  text: 'light red 2',
  value: 'rgb(234, 153, 153)'
}, {
  text: 'light orange 2',
  value: 'rgb(249, 203, 156)'
}, {
  text: 'light yellow 2',
  value: 'rgb(255, 229, 153)'
}, {
  text: 'light green 2',
  value: 'rgb(182, 215, 168)'
}, {
  text: 'light cyan 2',
  value: 'rgb(162, 196, 201)'
}, {
  text: 'light cornflower blue 2',
  value: 'rgb(164, 194, 244)'
}, {
  text: 'light blue 2',
  value: 'rgb(159, 197, 232)'
}, {
  text: 'light purple 2',
  value: 'rgb(180, 167, 214)'
}, {
  text: 'light magenta 2',
  value: 'rgb(213, 166, 189)'
}, {
  text: 'light red berry 1',
  value: 'rgb(204, 65, 37)'
}, {
  text: 'light red 1',
  value: 'rgb(224, 102, 102)'
}, {
  text: 'light orange 1',
  value: 'rgb(246, 178, 107)'
}, {
  text: 'light yellow 1',
  value: 'rgb(255, 217, 102)'
}, {
  text: 'light green 1',
  value: 'rgb(147, 196, 125)'
}, {
  text: 'light cyan 1',
  value: 'rgb(118, 165, 175)'
}, {
  text: 'light cornflower blue 1',
  value: 'rgb(109, 158, 235)'
}, {
  text: 'light blue 1',
  value: 'rgb(111, 168, 220)'
}, {
  text: 'light purple 1',
  value: 'rgb(142, 124, 195)'
}, {
  text: 'light magenta 1',
  value: 'rgb(194, 123, 160)'
}, {
  text: 'dark red berry 1',
  value: 'rgb(166, 28, 0)'
}, {
  text: 'dark red 1',
  value: 'rgb(204, 0, 0)'
}, {
  text: 'dark orange 1',
  value: 'rgb(230, 145, 56)'
}, {
  text: 'dark yellow 1',
  value: 'rgb(241, 194, 50)'
}, {
  text: 'dark green 1',
  value: 'rgb(106, 168, 79)'
}, {
  text: 'dark cyan 1',
  value: 'rgb(69, 129, 142)'
}, {
  text: 'dark cornflower blue 1',
  value: 'rgb(60, 120, 216)'
}, {
  text: 'dark blue 1',
  value: 'rgb(61, 133, 198)'
}, {
  text: 'dark purple 1',
  value: 'rgb(103, 78, 167)'
}, {
  text: 'dark magenta 1',
  value: 'rgb(166, 77, 121)'
}, {
  text: 'dark red berry 2',
  value: 'rgb(133, 32, 12)'
}, {
  text: 'dark red 2',
  value: 'rgb(153, 0, 0)'
}, {
  text: 'dark orange 2',
  value: 'rgb(180, 95, 6)'
}, {
  text: 'dark yellow 2',
  value: 'rgb(191, 144, 0)'
}, {
  text: 'dark green 2',
  value: 'rgb(56, 118, 29)'
}, {
  text: 'dark cyan 2',
  value: 'rgb(19, 79, 92)'
}, {
  text: 'dark cornflower blue 2',
  value: 'rgb(17, 85, 204)'
}, {
  text: 'dark blue 2',
  value: 'rgb(11, 83, 148)'
}, {
  text: 'dark purple 2',
  value: 'rgb(53, 28, 117)'
}, {
  text: 'dark magenta 2',
  value: 'rgb(116, 27, 71)'
}, {
  text: 'dark red berry 3',
  value: 'rgb(91, 15, 0)'
}, {
  text: 'dark red 3',
  value: 'rgb(102, 0, 0)'
}, {
  text: 'dark orange 3',
  value: 'rgb(120, 63, 4)'
}, {
  text: 'dark yellow 3',
  value: 'rgb(127, 96, 0)'
}, {
  text: 'dark green 3',
  value: 'rgb(39, 78, 19)'
}, {
  text: 'dark cyan 3',
  value: 'rgb(12, 52, 61)'
}, {
  text: 'dark cornflower blue 3',
  value: 'rgb(28, 69, 135)'
}, {
  text: 'dark blue 3',
  value: 'rgb(7, 55, 99)'
}, {
  text: 'dark purple 3',
  value: 'rgb(32, 18, 77)'
}, {
  text: 'dark magenta 3',
  value: 'rgb(76, 17, 48)'
}];
var defaultToolbarControlsConfiguration = {
  blockType: {
    options: [{
      value: 'default',
      text: LANG_PREFIX + 'controls.blockType.labels.normal'
    }, {
      value: 'header-one',
      text: LANG_PREFIX + 'controls.blockType.labels.header1'
    }, {
      value: 'header-two',
      text: LANG_PREFIX + 'controls.blockType.labels.header2'
    }, {
      value: 'header-three',
      text: LANG_PREFIX + 'controls.blockType.labels.header3'
    }, {
      value: 'header-four',
      text: LANG_PREFIX + 'controls.blockType.labels.header4'
    }, {
      value: 'header-five',
      text: LANG_PREFIX + 'controls.blockType.labels.header5'
    }, {
      value: 'header-six',
      text: LANG_PREFIX + 'controls.blockType.labels.header6'
    }]
  },
  image: {
    uploadCallback: fileToBase64
  },
  fontColor: {
    colorsPerRow: 10,
    options: colors
  },
  fontBackgroundColor: {
    colorsPerRow: 10,
    options: colors
  },
  fontSize: {
    options: ['default', '8px', '9px', '10px', '11px', '12px', '14px', '18px', '24px', '30px', '36px', '48px', '60px', '72px', '96px']
  },
  fontFamily: {
    options: ['default', 'Arial', 'Verdana', 'Times New Roman', 'Georgia', 'Courier new', 'Lucida Console']
  }
};

var defaultConfig = {
  lang: 'en',
  translations: {},
  draftEditor: {},
  editor: {
    wrapperElement: Paper,
    className: '',
    style: {}
  },
  toolbar: {
    className: '',
    style: {},
    visible: true,
    position: 'top',
    controls: defaultToolbarControls,
    controlsConfig: defaultToolbarControlsConfiguration
  }
};

function isObject(item) {
  return item && typeof item === 'object' && !Array.isArray(item);
}
function mergeDeep(target) {
  for (var _len = arguments.length, sources = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    sources[_key - 1] = arguments[_key];
  }

  if (!sources.length) return target;
  var source = sources.shift();

  if (isObject(target) && isObject(source)) {
    for (var key in source) {
      if (isObject(source[key])) {
        if (!target[key]) {
          var _Object$assign;

          Object.assign(target, (_Object$assign = {}, _Object$assign[key] = {}, _Object$assign));
        }

        mergeDeep(target[key], source[key]);
      } else {
        var _Object$assign2;

        Object.assign(target, (_Object$assign2 = {}, _Object$assign2[key] = source[key], _Object$assign2));
      }
    }
  }

  return mergeDeep.apply(void 0, [target].concat(sources));
}

var ca = {
  controls: {
    undo: {
      title: 'Desfer'
    },
    redo: {
      title: 'Refer'
    },
    bold: {
      title: 'Negreta'
    },
    italic: {
      title: 'Cursiva'
    },
    underline: {
      title: 'Subratllat'
    },
    strikethrough: {
      title: 'Ratllat'
    },
    code: {
      title: 'Codi'
    },
    fontColor: {
      title: 'Color de font',
      labels: {
        noColor: 'Sense color'
      }
    },
    fontBackgroundColor: {
      title: 'Color de resaltat del text',
      labels: {
        noColor: 'Sense color'
      }
    },
    linkAdd: {
      title: 'Afegir enllaç',
      labels: {
        link: 'Enllaç'
      },
      actions: {
        add: 'Afegir',
        cancel: 'Cancel·lar'
      }
    },
    linkRemove: {
      title: 'Eliminar enllaç'
    },
    image: {
      title: 'Afegir imatge',
      actions: {
        upload: 'Pujar imatge',
        url: 'Des de URL',
        add: 'Afegir',
        cancel: 'Cancel·lar',
        alignLeft: "Alinear a l'esquerra",
        alignCenter: 'Centrar',
        alignRight: 'Alinear a la dreta',
        remove: 'Eliminar imatge',
        resize: 'Redimensionar'
      },
      labels: {
        dropImageHere: 'Arrossega una imatge aquí o fes click per a pujar una',
        width: 'Ample',
        height: 'Alt',
        url: 'URL',
        insertOptions: 'Opcions de afegir imatge',
        editOptions: "Opcions d'imatge"
      },
      errorMessages: {
        notValidImage: 'La imatge no és vàlida'
      }
    },
    blockType: {
      title: 'Format de bloc',
      labels: {
        normal: 'Normal',
        header1: 'Títol 1',
        header2: 'Títol 2',
        header3: 'Títol 3',
        header4: 'Títol 4',
        header5: 'Títol 5',
        header6: 'Títol 6'
      }
    },
    fontSize: {
      title: 'Grandària de font',
      labels: {
        "default": 'Per defecte'
      }
    },
    fontFamily: {
      title: 'Font',
      labels: {
        "default": 'Per defecte'
      }
    },
    textAlign: {
      title: 'Alinear text',
      actions: {
        alignLeft: 'Esquerra',
        alignCenter: 'Centre',
        alignRight: 'Dreta',
        justify: 'Justificar'
      }
    },
    unorderedList: {
      title: 'Vinyetes'
    },
    orderedList: {
      title: 'Numeració'
    }
  }
};

var en = {
  controls: {
    undo: {
      title: 'Undo'
    },
    redo: {
      title: 'Redo'
    },
    bold: {
      title: 'Bold'
    },
    italic: {
      title: 'Italic'
    },
    underline: {
      title: 'Underline'
    },
    strikethrough: {
      title: 'Strike through'
    },
    code: {
      title: 'Code'
    },
    fontColor: {
      title: 'Font color',
      labels: {
        noColor: 'None'
      }
    },
    fontBackgroundColor: {
      title: 'Highlight color',
      labels: {
        noColor: 'None'
      }
    },
    linkAdd: {
      title: 'Add link',
      labels: {
        link: 'Link'
      },
      actions: {
        add: 'Add',
        cancel: 'Cancel'
      }
    },
    linkRemove: {
      title: 'Remove link'
    },
    image: {
      title: 'Insert image',
      actions: {
        upload: 'Upload image',
        url: 'By URL',
        add: 'Add',
        cancel: 'Cancel',
        alignLeft: 'Align left',
        alignCenter: 'Align center',
        alignRight: 'Align right',
        remove: 'Remove image',
        resize: 'Resize'
      },
      labels: {
        dropImageHere: 'Drop image here or click to upload',
        width: 'Width',
        height: 'Height',
        url: 'URL',
        insertOptions: 'Insert image options',
        editOptions: 'Image options'
      },
      errorMessages: {
        notValidImage: 'Not a valid image'
      }
    },
    blockType: {
      title: 'Block format',
      labels: {
        normal: 'Normal',
        header1: 'Header 1',
        header2: 'Header 2',
        header3: 'Header 3',
        header4: 'Header 4',
        header5: 'Header 5',
        header6: 'Header 6'
      }
    },
    fontSize: {
      title: 'Font size',
      labels: {
        "default": 'default'
      }
    },
    fontFamily: {
      title: 'Font type',
      labels: {
        "default": 'default'
      }
    },
    textAlign: {
      title: 'Align text',
      actions: {
        alignLeft: 'Left',
        alignCenter: 'Center',
        alignRight: 'Right',
        justify: 'Justify'
      }
    },
    unorderedList: {
      title: 'Unordered list'
    },
    orderedList: {
      title: 'Ordered list'
    }
  }
};

var es = {
  controls: {
    undo: {
      title: 'Deshacer'
    },
    redo: {
      title: 'Rehacer'
    },
    bold: {
      title: 'Negrita'
    },
    italic: {
      title: 'Cursiva'
    },
    underline: {
      title: 'Subrayado'
    },
    strikethrough: {
      title: 'Tachado'
    },
    code: {
      title: 'Código'
    },
    fontColor: {
      title: 'Color de fuente',
      labels: {
        noColor: 'Sin color'
      }
    },
    fontBackgroundColor: {
      title: 'Color de resaltado de texto',
      labels: {
        noColor: 'Sin color'
      }
    },
    linkAdd: {
      title: 'Añadir enlace',
      labels: {
        link: 'Enlace'
      },
      actions: {
        add: 'Añadir',
        cancel: 'Cancelar'
      }
    },
    linkRemove: {
      title: 'Eliminar enlace'
    },
    image: {
      title: 'Insertar imagen',
      actions: {
        upload: 'Subir imagen',
        url: 'Desde URL',
        add: 'Añadir',
        cancel: 'Cancelar',
        alignLeft: 'Alinear a la izquierda',
        alignCenter: 'Centrar',
        alignRight: 'Alinear a la derecha',
        remove: 'Eliminar imagen',
        resize: 'Redimensionar'
      },
      labels: {
        dropImageHere: 'Arrastra una imagen aquí o haz click para subir una',
        width: 'Ancho',
        height: 'Alto',
        url: 'URL',
        insertOptions: 'Opciones de insertar imagen',
        editOptions: 'Opciones de imagen'
      },
      errorMessages: {
        notValidImage: 'La imagen no es válida'
      }
    },
    blockType: {
      title: 'Formato de bloque',
      labels: {
        normal: 'Normal',
        header1: 'Encabezado 1',
        header2: 'Encabezado 2',
        header3: 'Encabezado 3',
        header4: 'Encabezado 4',
        header5: 'Encabezado 5',
        header6: 'Encabezado 6'
      }
    },
    fontSize: {
      title: 'Tamaño de fuente',
      labels: {
        "default": 'Por defecto'
      }
    },
    fontFamily: {
      title: 'Fuente',
      labels: {
        "default": 'Por defecto'
      }
    },
    textAlign: {
      title: 'Alinear texto',
      actions: {
        alignLeft: 'Izquierda',
        alignCenter: 'Centro',
        alignRight: 'Derecha',
        justify: 'Justificar'
      }
    },
    unorderedList: {
      title: 'Viñetas'
    },
    orderedList: {
      title: 'Numeración'
    }
  }
};

var languages = {
  ca: ca,
  en: en,
  es: es
};

var EditorFactories = /*#__PURE__*/function () {
  function EditorFactories(config) {
    this.config = config || defaultConfig;
  }

  var _proto = EditorFactories.prototype;

  _proto.getCompositeDecorator = function getCompositeDecorator() {
    var decorators = [];

    for (var _iterator = _createForOfIteratorHelperLoose(this.getToolbarControls()), _step; !(_step = _iterator()).done;) {
      var control = _step.value;
      var pluginData = this.getPluginData(control);

      if (pluginData && pluginData.decorators) {
        decorators = decorators.concat(pluginData.decorators);
      }
    }

    return decorators.length > 0 ? new draftJs.CompositeDecorator(decorators) : null;
  };

  _proto.getCustomStyleMap = function getCustomStyleMap() {
    var customStyleMap = {};

    for (var _iterator2 = _createForOfIteratorHelperLoose(this.getToolbarControls()), _step2; !(_step2 = _iterator2()).done;) {
      var control = _step2.value;
      var pluginData = this.getPluginData(control);

      if (pluginData && pluginData.customStyleMap) {
        customStyleMap = _extends({}, customStyleMap, pluginData.customStyleMap);
      }
    }

    return customStyleMap;
  };

  _proto.getBlockRenderMap = function getBlockRenderMap() {
    var renderMap = draftJs.DefaultDraftBlockRenderMap;

    for (var _iterator3 = _createForOfIteratorHelperLoose(this.getToolbarControls()), _step3; !(_step3 = _iterator3()).done;) {
      var control = _step3.value;
      var pluginData = this.getPluginData(control);

      if (pluginData && pluginData.blockRenderMap) {
        renderMap = renderMap.merge(pluginData.blockRenderMap);
      }
    }

    return renderMap;
  };

  _proto.getBlockStyleFn = function getBlockStyleFn() {
    var _this = this;

    return function (contentBlock) {
      var classNames = '';

      for (var _iterator4 = _createForOfIteratorHelperLoose(_this.getToolbarControls()), _step4; !(_step4 = _iterator4()).done;) {
        var control = _step4.value;

        var pluginData = _this.getPluginData(control);

        if (pluginData && pluginData.blockStyleFn) {
          var result = pluginData.blockStyleFn(contentBlock);
          if (result) classNames += ' ' + result;
        }
      }

      return classNames.trim();
    };
  };

  _proto.getBlockRendererFn = function getBlockRendererFn() {
    var _this2 = this;

    return function (contentBlock) {
      for (var _iterator5 = _createForOfIteratorHelperLoose(_this2.getToolbarControls()), _step5; !(_step5 = _iterator5()).done;) {
        var control = _step5.value;

        var pluginData = _this2.getPluginData(control);

        if (!pluginData || !pluginData.blockRendererFn) continue;
        var result = pluginData.blockRendererFn(contentBlock);
        if (result) return result;
      }
    };
  };

  _proto.getToolbarControls = function getToolbarControls() {
    return this.getConfigItem('toolbar', 'controls');
  };

  _proto.getToolbarControlComponents = function getToolbarControlComponents() {
    var _this3 = this;

    var keyCounter = {};
    return this.getToolbarControls().map(function (control) {
      if (!keyCounter[control.name]) keyCounter[control.name] = 0;
      keyCounter[control.name]++;
      return React.createElement(control.component, {
        key: "" + control.name + keyCounter[control.name],
        configuration: _this3.getToolbarControlConfiguration(control.name),
        defaultConfiguration: defaultToolbarControlsConfiguration[control.name],
        pluginData: _this3.getPluginData(control)
      });
    });
  };

  _proto.getToolbarControlConfiguration = function getToolbarControlConfiguration(controlName) {
    if (this.config && this.config.toolbar && this.config.toolbar.controlsConfig && this.config.toolbar.controlsConfig[controlName]) return this.config.toolbar.controlsConfig[controlName];else if (defaultToolbarControlsConfiguration[controlName]) return defaultToolbarControlsConfiguration[controlName];
    return null;
  };

  _proto.getPluginData = function getPluginData(control) {
    if (!control.plugin) return null;
    return control.plugin(this.getToolbarControlConfiguration(control.name), defaultToolbarControlsConfiguration[control.name]);
  };

  _proto.getTranslations = function getTranslations() {
    var lang = this.getConfigItem('lang');
    var langTranslations = languages[lang];
    var customTranslations = this.config.translations || {};
    return mergeDeep(langTranslations, customTranslations);
  };

  _proto.getToolbarPosition = function getToolbarPosition() {
    return this.getConfigItem('toolbar', 'position').toLowerCase();
  };

  _proto.getConfigItem = function getConfigItem() {
    var item = _extends({}, this.config);

    for (var _len = arguments.length, keys = new Array(_len), _key = 0; _key < _len; _key++) {
      keys[_key] = arguments[_key];
    }

    for (var _i = 0, _keys = keys; _i < _keys.length; _i++) {
      var key = _keys[_i];
      item = item[key];
      if (item === undefined) break;
    }

    if (item !== undefined) return item;
    item = _extends({}, defaultConfig);

    for (var _i2 = 0, _keys2 = keys; _i2 < _keys2.length; _i2++) {
      var _key2 = _keys2[_i2];
      item = item[_key2];
    }

    return item;
  };

  return EditorFactories;
}();

function EditorToolbar(_ref) {
  var children = _ref.children,
      _ref$visible = _ref.visible,
      visible = _ref$visible === void 0 ? true : _ref$visible,
      rest = _objectWithoutPropertiesLoose(_ref, ["children", "visible"]);

  return /*#__PURE__*/React.createElement(Paper, _extends({
    hidden: !visible
  }, rest), /*#__PURE__*/React.createElement(Grid, {
    container: true,
    alignItems: "center"
  }, children));
}

EditorToolbar.propTypes = {
  children: PropTypes__default.any,
  visible: PropTypes__default.bool
};

var Translator = /*#__PURE__*/function () {
  function Translator(translations) {
    this.translations = translations;
  }

  var _proto = Translator.prototype;

  _proto.get = function get(id) {
    if (!id) return '';
    var keys = id.split('.');
    var item = this.translations;

    for (var _iterator = _createForOfIteratorHelperLoose(keys), _step; !(_step = _iterator()).done;) {
      var key = _step.value;
      item = item[key];
      if (item === undefined) return '';
    }

    return item || '';
  };

  return Translator;
}();

var _blockHTMLMap;
var blockHTMLMap = (_blockHTMLMap = {}, _blockHTMLMap[blockStyles.H1] = 'h1', _blockHTMLMap[blockStyles.H2] = 'h2', _blockHTMLMap[blockStyles.H3] = 'h3', _blockHTMLMap[blockStyles.H4] = 'h4', _blockHTMLMap[blockStyles.H5] = 'h5', _blockHTMLMap[blockStyles.H6] = 'h6', _blockHTMLMap[blockStyles.BLOCKQUOTE] = 'blockquote', _blockHTMLMap[blockStyles.CODE_BLOCK] = 'code', _blockHTMLMap[blockStyles.UNSTYLED] = 'p', _blockHTMLMap[blockStyles.ATOMIC] = 'figure', _blockHTMLMap[blockStyles.UL] = 'li', _blockHTMLMap[blockStyles.OL] = 'li', _blockHTMLMap);

var _entityHTMLMap;
var entityHTMLMap = (_entityHTMLMap = {}, _entityHTMLMap[entities.LINK] = function (entity) {
  return ["<a href=\"" + entity.getData().url + "\" target=\"_blank\">", '</a>'];
}, _entityHTMLMap[entities.IMAGE] = function (entity) {
  return ["<img src=\"" + entity.data.src + "\" alt=\"\" width=\"" + entity.getData().width + "\" height=\"" + entity.getData().height + "\">", ''];
}, _entityHTMLMap);

var isInlineStyleCollection = function isInlineStyleCollection(inlineStyle, style) {
  return inlineStyle.substr(0, style.length) === style;
};

var getInlineStyleCollectionValue = function getInlineStyleCollectionValue(inlineStyle, style) {
  return inlineStyle.substr(style.length + 1);
};

var getInlineStylesCss = function getInlineStylesCss(inlineStyle) {
  switch (inlineStyle) {
    case inlineStyles.BOLD:
      return 'font-weight: bold;';

    case inlineStyles.ITALIC:
      return 'font-style: italic;';

    case inlineStyles.UNDERLINE:
      return 'text-decoration: underline;';

    case inlineStyles.STRIKETHROUGH:
      return 'text-decoration: line-through;';

    case inlineStyles.CODE:
      return 'font-family: monospace;';

    default:
      if (isInlineStyleCollection(inlineStyle, inlineStyles.FONT_FAMILY)) {
        return "font-family: '" + getInlineStyleCollectionValue(inlineStyle, inlineStyles.FONT_FAMILY) + "';";
      }

      if (isInlineStyleCollection(inlineStyle, inlineStyles.FONT_SIZE)) {
        return "font-size: " + getInlineStyleCollectionValue(inlineStyle, inlineStyles.FONT_SIZE) + ";";
      }

      if (isInlineStyleCollection(inlineStyle, inlineStyles.FONT_COLOR)) {
        return "color: " + getInlineStyleCollectionValue(inlineStyle, inlineStyles.FONT_COLOR) + ";";
      }

      if (isInlineStyleCollection(inlineStyle, inlineStyles.FONT_BACKGROUND)) {
        return "background-color: " + getInlineStyleCollectionValue(inlineStyle, inlineStyles.FONT_BACKGROUND) + ";";
      }

      return '';
  }
};

var toHTML = function toHTML(contentState) {
  var html = '';
  var isListBlock = false;
  var blockMap = contentState.getBlockMap();
  var blockCount = 0;

  for (var _iterator = _createForOfIteratorHelperLoose(blockMap), _step; !(_step = _iterator()).done;) {
    var blockData = _step.value;
    var block = blockData[1];
    var blockTag = blockHTMLMap[block.getType()];
    var blockStyle = block.getData().has('textAlign') ? "text-align:" + block.getData().get('textAlign') + ";" : null;
    var blockOpenTag = blockTag ? "<" + blockTag + (blockStyle ? " style=\"" + blockStyle + "\"" : '') + ">" : '';
    var blockCloseTag = blockTag ? "</" + blockTag + ">" : '';

    if (block.getType() === blockStyles.UL || block.getType() === blockStyles.OL) {
      if (!isListBlock) {
        blockOpenTag = "" + (block.getType() === blockStyles.UL ? '<ul>' : '<ol>') + blockOpenTag;
      }

      if (blockCount === blockMap.length - 1) {
        blockCloseTag = "" + blockCloseTag + (block.getType() === blockStyles.UL ? '</ul>' : '</ol>');
      }

      isListBlock = true;
    } else {
      if (isListBlock) {
        blockOpenTag = "" + (block.getType() === blockStyles.UL ? '</ul>' : '</ol>') + blockOpenTag;
      }

      isListBlock = false;
    }

    if (block.getLength() === 0) {
      html += blockOpenTag + blockCloseTag;
      continue;
    }

    html += blockOpenTag;
    var lastEntityKey = null;
    var currentOpenedStylesMap = {};

    for (var charIndex in block.getText()) {
      var isLastChar = parseInt(charIndex) === block.getLength() - 1;
      var entityOpenTag = '';
      var entityCloseTag = '';
      var currentEntityKey = block.getEntityAt(charIndex);

      if (currentEntityKey !== lastEntityKey) {
        if (lastEntityKey === null) {
          var entity = contentState.getEntity(currentEntityKey);
          entityOpenTag = entityHTMLMap[entity.getType()](entity)[0];
        } else if (currentEntityKey === null) {
          var _entity = contentState.getEntity(lastEntityKey);

          entityCloseTag = entityHTMLMap[_entity.getType()](_entity)[1];
        } else {
          var entityHaveToClose = contentState.getEntity(lastEntityKey);
          var entityHaveToOpen = contentState.getEntity(currentEntityKey);
          entityOpenTag = entityHTMLMap[entityHaveToClose.getType()](entityHaveToClose)[0] + entityHTMLMap[entityHaveToOpen.getType()](entityHaveToOpen)[1];
        }
      } else if (currentEntityKey !== null && isLastChar) {
        var _entity2 = contentState.getEntity(currentEntityKey);

        entityCloseTag = entityHTMLMap[_entity2.getType()](_entity2)[1];
      }

      var charInlineStyles = block.getInlineStyleAt(charIndex);
      var styleCloseTagBeforeList = [];
      var styleOpenTagList = [];
      var styleCloseTagList = [];
      var styleCloseTagOpenIndexList = [];
      var styleCloseTagBeforeOpenIndexList = [];

      for (var _iterator2 = _createForOfIteratorHelperLoose(charInlineStyles), _step2; !(_step2 = _iterator2()).done;) {
        var _inlineStyle3 = _step2.value;

        if (currentOpenedStylesMap[_inlineStyle3] === undefined) {
          styleOpenTagList.push(_inlineStyle3);
          currentOpenedStylesMap[_inlineStyle3] = charIndex;
        } else if (entityOpenTag || entityCloseTag) {
          styleCloseTagBeforeList.push(_inlineStyle3);
          styleCloseTagBeforeOpenIndexList.push(currentOpenedStylesMap[_inlineStyle3]);
          delete currentOpenedStylesMap[_inlineStyle3];
        } else if (isLastChar) {
          styleCloseTagList.push(_inlineStyle3);
          styleCloseTagOpenIndexList.push(currentOpenedStylesMap[_inlineStyle3]);
          delete currentOpenedStylesMap[_inlineStyle3];
        }
      }

      for (var inlineStyle in currentOpenedStylesMap) {
        if (!charInlineStyles.includes(inlineStyle) && !styleCloseTagList.includes(inlineStyle) && !styleCloseTagBeforeList.includes(inlineStyle)) {
          styleCloseTagBeforeList.push(inlineStyle);
          styleCloseTagBeforeOpenIndexList.push(currentOpenedStylesMap[inlineStyle]);
          delete currentOpenedStylesMap[inlineStyle];
        } else if (isLastChar) {
          styleCloseTagList.push(inlineStyle);
          styleCloseTagOpenIndexList.push(currentOpenedStylesMap[inlineStyle]);
          delete currentOpenedStylesMap[inlineStyle];
        }
      }

      for (var _i = 0, _styleCloseTagOpenInd = styleCloseTagOpenIndexList; _i < _styleCloseTagOpenInd.length; _i++) {
        var closedIndex = _styleCloseTagOpenInd[_i];

        for (var _inlineStyle in currentOpenedStylesMap) {
          if (currentOpenedStylesMap[_inlineStyle] > closedIndex) {
            styleCloseTagList.push(_inlineStyle);
            styleCloseTagOpenIndexList.push(currentOpenedStylesMap[_inlineStyle]);
            delete currentOpenedStylesMap[_inlineStyle];
          }
        }
      }

      for (var _i2 = 0, _styleCloseTagBeforeO = styleCloseTagBeforeOpenIndexList; _i2 < _styleCloseTagBeforeO.length; _i2++) {
        var _closedIndex = _styleCloseTagBeforeO[_i2];

        for (var _inlineStyle2 in currentOpenedStylesMap) {
          if (currentOpenedStylesMap[_inlineStyle2] < charIndex && currentOpenedStylesMap[_inlineStyle2] > _closedIndex) {
            styleCloseTagBeforeList.push(_inlineStyle2);
            styleCloseTagBeforeOpenIndexList.push(currentOpenedStylesMap[_inlineStyle2]);
            delete currentOpenedStylesMap[_inlineStyle2];

            if (charInlineStyles.includes(_inlineStyle2)) {
              styleOpenTagList.push(_inlineStyle2);
              currentOpenedStylesMap[_inlineStyle2] = charIndex;
            }
          }
        }
      }

      var j = 0;

      while (j < styleCloseTagBeforeList.length) {
        html += '</span>';
        j++;
      }

      html += entityOpenTag;

      for (var _i3 = 0, _styleOpenTagList = styleOpenTagList; _i3 < _styleOpenTagList.length; _i3++) {
        var style = _styleOpenTagList[_i3];
        html += '<span style="' + getInlineStylesCss(style) + '">';
      }

      html += block.getText()[charIndex];
      var k = 0;

      while (k < styleCloseTagList.length) {
        html += '</span>';
        k++;
      }

      html += entityCloseTag;
      lastEntityKey = currentEntityKey;
    }

    html += blockCloseTag;
    blockCount++;
  }

  return html;
};

var EditorContext = React.createContext({});
var MUIEditorState = {
  createEmpty: function createEmpty(config) {
    var editorFactories = new EditorFactories(config);
    return draftJs.EditorState.createEmpty(editorFactories.getCompositeDecorator());
  },
  createWithContent: function createWithContent(config, contentState) {
    var editorFactories = new EditorFactories(config);
    return draftJs.EditorState.createWithContent(contentState, editorFactories.getCompositeDecorator());
  }
};
var useStyles$6 = makeStyles(function (theme) {
  return {
    '@global': {
      '.mui-editor-left-aligned-block': {
        textAlign: 'left !important',
        '& > div': {
          textAlign: 'left !important'
        }
      },
      '.mui-editor-center-aligned-block': {
        textAlign: 'center !important',
        '& > div': {
          textAlign: 'center !important'
        }
      },
      '.mui-editor-right-aligned-block': {
        textAlign: 'right !important',
        '& > div': {
          textAlign: 'right !important'
        }
      },
      '.mui-editor-justify-aligned-block': {
        textAlign: 'justify !important',
        '& > div': {
          textAlign: 'justify !important'
        }
      }
    },
    editorWrapper: {
      marginTop: 2,
      marginBottom: 2,
      padding: 5
    }
  };
});

function MUIEditor(_ref) {
  var editorState = _ref.editorState,
      onChange = _ref.onChange,
      _ref$onFocus = _ref.onFocus,
      onFocus = _ref$onFocus === void 0 ? null : _ref$onFocus,
      _ref$onBlur = _ref.onBlur,
      onBlur = _ref$onBlur === void 0 ? null : _ref$onBlur,
      _ref$config = _ref.config,
      config = _ref$config === void 0 ? defaultConfig : _ref$config;
  var editorFactories = new EditorFactories(config);
  var editorRef = React.useRef(null);
  var translateRef = React.useRef(function () {});
  var translationsRef = React.useRef(null);
  var toolbarVisibleConfig = editorFactories.getConfigItem('toolbar', 'visible');

  var _React$useState = React.useState(toolbarVisibleConfig),
      isToolbarVisible = _React$useState[0],
      setIsToolbarVisible = _React$useState[1];

  var _React$useState2 = React.useState(false),
      isResizeImageDialogVisible = _React$useState2[0],
      setIsResizeImageDialogVisible = _React$useState2[1];

  var _React$useState3 = React.useState(null),
      resizeImageEntityKey = _React$useState3[0],
      setResizeImageEntityKey = _React$useState3[1];

  translationsRef.current = editorFactories.getTranslations();
  translateRef.current = React.useCallback(function (id) {
    var translator = new Translator(translationsRef.current);
    return translator.get(id);
  }, []);
  var classes = useStyles$6();
  React.useEffect(function () {
    setIsToolbarVisible(toolbarVisibleConfig);
  }, [toolbarVisibleConfig]);
  var toolbar = /*#__PURE__*/React.createElement(EditorToolbar, {
    visible: isToolbarVisible,
    style: editorFactories.getConfigItem('toolbar', 'style'),
    className: editorFactories.getConfigItem('toolbar', 'className')
  }, editorFactories.getToolbarControlComponents());
  var top = editorFactories.getToolbarPosition() === 'top' ? toolbar : null;
  var bottom = editorFactories.getToolbarPosition() === 'bottom' ? toolbar : null;

  var handleKeyCommand = function handleKeyCommand(command) {
    var newState = draftJs.RichUtils.handleKeyCommand(editorState, command);

    if (newState) {
      onChange(newState);
      return 'handled';
    }

    return 'not-handled';
  };

  var handleFocus = function handleFocus(ev) {
    if (onFocus) onFocus(ev);
  };

  var handleBlur = function handleBlur(ev) {
    if (onBlur) onBlur(ev);
  };

  var editorWrapperProps = {
    style: editorFactories.getConfigItem('editor', 'style'),
    className: classes.editorWrapper + " " + editorFactories.getConfigItem('editor', 'className'),
    onClick: function onClick() {
      return editorRef.current.focus();
    }
  };
  var editorWrapperElement = editorFactories.getConfigItem('editor', 'wrapperElement');

  if (editorWrapperElement === Paper) {
    editorWrapperProps.elevation = 3;
  }

  var EditorWrapper = React.createElement(editorWrapperElement, editorWrapperProps, /*#__PURE__*/React.createElement(draftJs.Editor, _extends({}, editorFactories.getConfigItem('draftEditor'), {
    ref: editorRef,
    editorState: editorState,
    onChange: onChange,
    onFocus: function onFocus(ev) {
      return handleFocus(ev);
    },
    onBlur: function onBlur(ev) {
      return handleBlur(ev);
    },
    handleKeyCommand: handleKeyCommand,
    blockStyleFn: editorFactories.getBlockStyleFn(),
    customStyleMap: editorFactories.getCustomStyleMap(),
    blockRenderMap: editorFactories.getBlockRenderMap(),
    blockRendererFn: editorFactories.getBlockRendererFn()
  })));
  return /*#__PURE__*/React.createElement(EditorContext.Provider, {
    value: {
      editorState: editorState,
      onChange: onChange,
      ref: editorRef.current,
      translate: translateRef.current,
      showResizeImageDialog: function showResizeImageDialog(entityKey) {
        setIsResizeImageDialogVisible(true);
        setResizeImageEntityKey(entityKey);
      },
      hideResizeImageDialog: function hideResizeImageDialog() {
        setIsResizeImageDialogVisible(false);
        setResizeImageEntityKey(null);
      },
      isResizeImageDialogVisible: isResizeImageDialogVisible,
      resizeImageEntityKey: resizeImageEntityKey
    }
  }, top, EditorWrapper, bottom);
}

MUIEditor.displayName = 'MUIEditor';
MUIEditor.propTypes = {
  editorState: PropTypes__default.object.isRequired,
  onChange: PropTypes__default.func.isRequired,
  onFocus: PropTypes__default.func,
  onBlur: PropTypes__default.func,
  config: PropTypes__default.object
};
MUIEditor.defaultProps = {
  config: defaultConfig
};

exports.EditorContext = EditorContext;
exports.LANG_PREFIX = LANG_PREFIX;
exports.MUIEditorState = MUIEditorState;
exports.default = MUIEditor;
exports.fileToBase64 = fileToBase64;
exports.toHTML = toHTML;
exports.toolbarControlTypes = toolbarControlTypes;
exports.useEditor = useEditor;
exports.useEditorFocus = useEditorFocus;
//# sourceMappingURL=index.js.map
