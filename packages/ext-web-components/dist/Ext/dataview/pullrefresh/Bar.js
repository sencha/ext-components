import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_dataview_pullrefresh_Item_Component from '../../../Ext/dataview/pullrefresh/Item';

var Ext_dataview_pullrefresh_Bar_Component =
/*#__PURE__*/
function (_Ext_dataview_pullref) {
  _inheritsLoose(Ext_dataview_pullrefresh_Bar_Component, _Ext_dataview_pullref);

  //events
  //configs
  Ext_dataview_pullrefresh_Bar_Component.XTYPE = function XTYPE() {
    return 'pullrefreshbar';
  };

  Ext_dataview_pullrefresh_Bar_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "lastUpdatedDateFormat": ["string"],
      "lastUpdatedText": ["string"],
      "loadedText": ["string"],
      "loadingText": ["string"],
      "mode": ["'message'", "'spinner'"],
      "pullText": ["string"],
      "releaseText": ["string"]
    };
  };

  Ext_dataview_pullrefresh_Bar_Component.EVENTS = function EVENTS() {
    return [];
  };

  Ext_dataview_pullrefresh_Bar_Component.METHODS = function METHODS() {
    return [];
  };

  _createClass(Ext_dataview_pullrefresh_Bar_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_dataview_pullref.observedAttributes;

      for (var property in Ext_dataview_pullrefresh_Bar_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_dataview_pullrefresh_Bar_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_dataview_pullrefresh_Bar_Component(propertiesobject, methods, events) {
    return _Ext_dataview_pullref.call(this, Object.assign(propertiesobject, Ext_dataview_pullrefresh_Bar_Component.PROPERTIESOBJECT()), //{propertiesobject, Ext_dataview_pullrefresh_Bar_Component.PROPERTIESOBJECT()},
    methods.concat(Ext_dataview_pullrefresh_Bar_Component.METHODS()), events.concat(Ext_dataview_pullrefresh_Bar_Component.EVENTS())) || this; //this.XTYPE = Ext_dataview_pullrefresh_Bar_Component.XTYPE()
    //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_dataview_pullrefresh_Bar_Component.PROPERTIESOBJECT());
    //this.methods = this.extendArray(this.methods, Ext_dataview_pullrefresh_Bar_Component.METHODS());
    //this.events = this.extendArray(this.events, Ext_dataview_pullrefresh_Bar_Component.EVENTS());
  }

  var _proto = Ext_dataview_pullrefresh_Bar_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_dataview_pullref.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_dataview_pullref.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_dataview_pullrefresh_Bar_Component;
}(Ext_dataview_pullrefresh_Item_Component);

export { Ext_dataview_pullrefresh_Bar_Component as default };