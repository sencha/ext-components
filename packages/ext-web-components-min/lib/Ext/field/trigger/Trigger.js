import Ext_field_trigger_Base_Component from '../../../Ext/field/trigger/Base';

export default class Ext_field_trigger_Trigger_Component extends Ext_field_trigger_Base_Component {
//events
//configs

static XTYPE() {return 'trigger'}
static PROPERTIESOBJECT() { return {
"focusOnTap":["boolean"],
"handler":["function","string"],
"iconCls":["string"],
"repeat":["boolean","object"],
"scope":["object"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

constructor() {
    super (
        Ext_field_trigger_Trigger_Component.METHODS(),
        Ext_field_trigger_Trigger_Component.XTYPE(),
        Ext_field_trigger_Trigger_Component.PROPERTIESOBJECT(),
        Ext_field_trigger_Trigger_Component.EVENTS()
    )
    this.XTYPE = Ext_field_trigger_Trigger_Component.XTYPE()
    this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_field_trigger_Trigger_Component.PROPERTIESOBJECT());
    this.METHODS = this.extendArray(this.METHODS, Ext_field_trigger_Trigger_Component.METHODS());
    this.EVENTS = this.extendArray(this.EVENTS, Ext_field_trigger_Trigger_Component.EVENTS());
  }

connectedCallback() {
    super.connectedCallback()
}

attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
}

}
(function () {
  Ext.onReady(function() {
    window.customElements.define('ext-trigger', Ext_field_trigger_Trigger_Component);
  });
})();
