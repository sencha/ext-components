import Ext_Panel_Component from '../../Ext/Panel';

export default class Ext_panel_Accordion_Component extends Ext_Panel_Component {
//events
//configs

static XTYPE() {return 'accordion'}
static PROPERTIESOBJECT() { return {
"defaultPanelUI":["string"],
"expandedFirst":["boolean"],
"openable":["number"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_panel_Accordion_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_panel_Accordion_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            
        )
        this.XTYPE = Ext_panel_Accordion_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_panel_Accordion_Component.PROPERTIESOBJECT());
        this.methods = this.extendArray(this.methods, Ext_panel_Accordion_Component.METHODS());
        this.events = this.extendArray(this.events, Ext_panel_Accordion_Component.EVENTS());

    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
