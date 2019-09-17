import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Editor_Component from '../../Ext/Editor';

var Ext_grid_CellEditor_Component =
/*#__PURE__*/
function (_Ext_Editor_Component) {
  _inheritsLoose(Ext_grid_CellEditor_Component, _Ext_Editor_Component);

  //events
  //configs
  Ext_grid_CellEditor_Component.XTYPE = function XTYPE() {
    return 'celleditor';
  };

  Ext_grid_CellEditor_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "autoPin": ["boolean"]
    };
  };

  Ext_grid_CellEditor_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_grid_CellEditor_Component.METHODS = function METHODS() {
    return [{
      name: 'getLocation',
      "function": function _function() {
        return this.ext.getLocation();
      }
    }, {
      name: 'startEdit',
      "function": function _function(location, value, doFocus) {
        return this.ext.startEdit(location, value, doFocus);
      }
    }];
  };

  _createClass(Ext_grid_CellEditor_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Editor_Component.observedAttributes;

      for (var property in Ext_grid_CellEditor_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_grid_CellEditor_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_grid_CellEditor_Component() {
    var _this;

    _this = _Ext_Editor_Component.call(this) || this;
    _this.XTYPE = Ext_grid_CellEditor_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_grid_CellEditor_Component.PROPERTIESOBJECT());
    _this.methods = _this.extendArray(_this.methods, Ext_grid_CellEditor_Component.METHODS());
    _this.events = _this.extendArray(_this.events, Ext_grid_CellEditor_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_grid_CellEditor_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Editor_Component.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Editor_Component.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_grid_CellEditor_Component;
}(Ext_Editor_Component);

export { Ext_grid_CellEditor_Component as default };