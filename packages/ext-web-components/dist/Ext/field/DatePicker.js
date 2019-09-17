import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_Picker_Component from '../../Ext/field/Picker';

var Ext_field_DatePicker_Component =
/*#__PURE__*/
function (_Ext_field_Picker_Com) {
  _inheritsLoose(Ext_field_DatePicker_Component, _Ext_field_Picker_Com);

  //configs
  Ext_field_DatePicker_Component.XTYPE = function XTYPE() {
    return 'datefield';
  };

  Ext_field_DatePicker_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "altFormats": ["string", "string[]"],
      "dateFormat": ["string"],
      "destroyPickerOnHide": ["boolean"],
      "maxDate": ["date", "string"],
      "minDate": ["date", "string"],
      "value": ["object", "date"]
    };
  };

  Ext_field_DatePicker_Component.EVENTS = function EVENTS() {
    return [{
      name: 'change',
      parameters: 'undefined,newDate,oldDate'
    }];
  };

  Ext_field_DatePicker_Component.METHODS = function METHODS() {
    return [{
      name: 'getFormattedValue',
      "function": function _function(format) {
        return this.ext.getFormattedValue(format);
      }
    }, {
      name: 'onPickerChange',
      "function": function _function(picker, value) {
        return this.ext.onPickerChange(picker, value);
      }
    }, {
      name: 'updateDateFormat',
      "function": function _function() {
        return this.ext.updateDateFormat();
      }
    }];
  };

  _createClass(Ext_field_DatePicker_Component, [{
    key: "onchange",
    //events
    get: function get() {
      return this.getAttribute('onchange');
    },
    set: function set(onchange) {
      this.setAttribute('onchange', onchange);
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_field_Picker_Com.observedAttributes;

      for (var property in Ext_field_DatePicker_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_field_DatePicker_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_field_DatePicker_Component(propertiesobject, methods, events) {
    return _Ext_field_Picker_Com.call(this, Object.assign(propertiesobject, Ext_field_DatePicker_Component.PROPERTIESOBJECT()), //{propertiesobject, Ext_field_DatePicker_Component.PROPERTIESOBJECT()},
    methods.concat(Ext_field_DatePicker_Component.METHODS()), events.concat(Ext_field_DatePicker_Component.EVENTS())) || this; //this.XTYPE = Ext_field_DatePicker_Component.XTYPE()
    //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_field_DatePicker_Component.PROPERTIESOBJECT());
    //this.methods = this.extendArray(this.methods, Ext_field_DatePicker_Component.METHODS());
    //this.events = this.extendArray(this.events, Ext_field_DatePicker_Component.EVENTS());
  }

  var _proto = Ext_field_DatePicker_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_field_Picker_Com.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_field_Picker_Com.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_field_DatePicker_Component;
}(Ext_field_Picker_Component);

export { Ext_field_DatePicker_Component as default };