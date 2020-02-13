import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../../Ext/Base.js';

var Ext_mixin_ItemRippler =
/*#__PURE__*/
function (_Ext_Base) {
  _inheritsLoose(Ext_mixin_ItemRippler, _Ext_Base);

  Ext_mixin_ItemRippler.PROPERTIES = function PROPERTIES() {
    return ['itemRipple'];
  };

  Ext_mixin_ItemRippler.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmd,cmdAll'
    }];
  };

  Ext_mixin_ItemRippler.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_mixin_ItemRippler.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_mixin_ItemRippler.getEvents = function getEvents(events) {
    events = events.concat(Ext_mixin_ItemRippler.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_mixin_ItemRippler, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_mixin_ItemRippler.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_mixin_ItemRippler.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_mixin_ItemRippler(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_mixin_ItemRippler.PROPERTIES()), events.concat(Ext_mixin_ItemRippler.EVENTS())) || this;
  }

  var _proto = Ext_mixin_ItemRippler.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_mixin_ItemRippler;
}(Ext_Base);

export { Ext_mixin_ItemRippler as default };