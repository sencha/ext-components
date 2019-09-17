import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_trigger_Expand_Component from '../../../Ext/field/trigger/Expand';

var Ext_field_trigger_Time_Component =
/*#__PURE__*/
function (_Ext_field_trigger_Ex) {
  _inheritsLoose(Ext_field_trigger_Time_Component, _Ext_field_trigger_Ex);

  //events
  //configs
  Ext_field_trigger_Time_Component.XTYPE = function XTYPE() {
    return 'timetrigger';
  };

  Ext_field_trigger_Time_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {};
  };

  Ext_field_trigger_Time_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_field_trigger_Time_Component.METHODS = function METHODS() {
    return [];
  };

  _createClass(Ext_field_trigger_Time_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_field_trigger_Ex.observedAttributes;

      for (var property in Ext_field_trigger_Time_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_field_trigger_Time_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_field_trigger_Time_Component(propertiesobject, methods, events) {
    return _Ext_field_trigger_Ex.call(this, Object.assign(propertiesobject, Ext_field_trigger_Time_Component.PROPERTIESOBJECT()), //{propertiesobject, Ext_field_trigger_Time_Component.PROPERTIESOBJECT()},
    methods.concat(Ext_field_trigger_Time_Component.METHODS()), events.concat(Ext_field_trigger_Time_Component.EVENTS())) || this; //this.XTYPE = Ext_field_trigger_Time_Component.XTYPE()
    //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_field_trigger_Time_Component.PROPERTIESOBJECT());
    //this.methods = this.extendArray(this.methods, Ext_field_trigger_Time_Component.METHODS());
    //this.events = this.extendArray(this.events, Ext_field_trigger_Time_Component.EVENTS());
  }

  var _proto = Ext_field_trigger_Time_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_field_trigger_Ex.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_field_trigger_Ex.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_field_trigger_Time_Component;
}(Ext_field_trigger_Expand_Component);

export { Ext_field_trigger_Time_Component as default };