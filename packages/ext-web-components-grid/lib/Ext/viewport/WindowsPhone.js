import Ext_viewport_Default_Component from '../../Ext/viewport/Default';

export default class Ext_viewport_WindowsPhone_Component extends Ext_viewport_Default_Component {
//events
//configs

static XTYPE() {return ''}
static PROPERTIESOBJECT() { return {
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_viewport_WindowsPhone_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_viewport_WindowsPhone_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            
        )
        this.XTYPE = Ext_viewport_WindowsPhone_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_viewport_WindowsPhone_Component.PROPERTIESOBJECT());
        this.methods = this.extendArray(this.methods, Ext_viewport_WindowsPhone_Component.METHODS());
        this.events = this.extendArray(this.events, Ext_viewport_WindowsPhone_Component.EVENTS());

    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
