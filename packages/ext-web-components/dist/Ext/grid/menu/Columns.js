import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_menu_Shared_Component from '../../../Ext/grid/menu/Shared';

var Ext_grid_menu_Columns_Component =
/*#__PURE__*/
function (_Ext_grid_menu_Shared) {
  _inheritsLoose(Ext_grid_menu_Columns_Component, _Ext_grid_menu_Shared);

  //events
  //configs
  Ext_grid_menu_Columns_Component.XTYPE = function XTYPE() {
    return 'gridcolumnsmenu';
  };

  Ext_grid_menu_Columns_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "text": ["string"]
    };
  };

  Ext_grid_menu_Columns_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_grid_menu_Columns_Component.METHODS = function METHODS() {
    return [];
  };

  _createClass(Ext_grid_menu_Columns_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_grid_menu_Shared.observedAttributes;

      for (var property in Ext_grid_menu_Columns_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_grid_menu_Columns_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_grid_menu_Columns_Component() {
    var _this;

    _this = _Ext_grid_menu_Shared.call(this, Ext_grid_menu_Columns_Component.METHODS(), Ext_grid_menu_Columns_Component.XTYPE(), Ext_grid_menu_Columns_Component.PROPERTIESOBJECT(), Ext_grid_menu_Columns_Component.EVENTS()) || this;
    _this.XTYPE = Ext_grid_menu_Columns_Component.XTYPE();
    _this.PROPERTIESOBJECT = _this.extendObject(_this.PROPERTIESOBJECT, Ext_grid_menu_Columns_Component.PROPERTIESOBJECT());
    _this.METHODS = _this.extendArray(_this.METHODS, Ext_grid_menu_Columns_Component.METHODS());
    _this.EVENTS = _this.extendArray(_this.EVENTS, Ext_grid_menu_Columns_Component.EVENTS());
    return _this;
  }

  var _proto = Ext_grid_menu_Columns_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_grid_menu_Shared.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_grid_menu_Shared.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_grid_menu_Columns_Component;
}(Ext_grid_menu_Shared_Component);

export { Ext_grid_menu_Columns_Component as default };