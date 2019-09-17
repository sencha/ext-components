import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Component_Component from '../Ext/Component';

var Ext_Spacer_Component =
/*#__PURE__*/
function (_Ext_Component_Compon) {
  _inheritsLoose(Ext_Spacer_Component, _Ext_Component_Compon);

  //events
  //configs
  Ext_Spacer_Component.XTYPE = function XTYPE() {
    return 'spacer';
  };

  Ext_Spacer_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "flex": ["number"],
      "width": ["number"]
    };
  };

  Ext_Spacer_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_Spacer_Component.METHODS = function METHODS() {
    return [{
      name: 'constructor',
      "function": function _function(config) {
        return this.ext.constructor(config);
      }
    }];
  };

  _createClass(Ext_Spacer_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Component_Compon.observedAttributes;

      for (var property in Ext_Spacer_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_Spacer_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_Spacer_Component(propertiesobject, methods, events) {
    return _Ext_Component_Compon.call(this, Object.assign(propertiesobject, Ext_Spacer_Component.PROPERTIESOBJECT()), //{propertiesobject, Ext_Spacer_Component.PROPERTIESOBJECT()},
    methods.concat(Ext_Spacer_Component.METHODS()), events.concat(Ext_Spacer_Component.EVENTS())) || this; //this.XTYPE = Ext_Spacer_Component.XTYPE()
    //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_Spacer_Component.PROPERTIESOBJECT());
    //this.methods = this.extendArray(this.methods, Ext_Spacer_Component.METHODS());
    //this.events = this.extendArray(this.events, Ext_Spacer_Component.EVENTS());
  }

  var _proto = Ext_Spacer_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Component_Compon.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Component_Compon.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_Spacer_Component;
}(Ext_Component_Component);

export { Ext_Spacer_Component as default };