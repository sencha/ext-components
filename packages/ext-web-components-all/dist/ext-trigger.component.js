import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_trigger_Trigger from './Ext/field/trigger/Trigger.js';
import HTMLParsedElement from './HTMLParsedElement.js';
export var ExtTriggerComponent =
/*#__PURE__*/
function (_Ext_field_trigger_Tr) {
  _inheritsLoose(ExtTriggerComponent, _Ext_field_trigger_Tr);

  function ExtTriggerComponent() {
    var _this;

    _this = _Ext_field_trigger_Tr.call(this, [], []) || this;
    _this.xtype = 'trigger';
    return _this;
  }

  return ExtTriggerComponent;
}(Ext_field_trigger_Trigger); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-trigger', ExtTriggerComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-trigger', HTMLParsedElement.withParsedCallback(ExtTriggerComponent));