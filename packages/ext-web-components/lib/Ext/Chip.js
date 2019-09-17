import Ext_Component_Component from '../Ext/Component';

export default class Ext_Chip_Component extends Ext_Component_Component {
//events
//configs

static XTYPE() {return 'chip'}
static PROPERTIESOBJECT() { return {
"closable":["boolean"],
"closeHandler":["function","string"],
"icon":["string"],
"iconCls":["string"],
"scope":["object"],
"text":["string"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_Chip_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_Chip_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor(propertiesobject, methods, events) {
        super (
            Object.assign(propertiesobject, Ext_Chip_Component.PROPERTIESOBJECT()),
            //{propertiesobject, Ext_Chip_Component.PROPERTIESOBJECT()},
            methods.concat(Ext_Chip_Component.METHODS()),
            events.concat(Ext_Chip_Component.EVENTS())



            //events.concat(Ext_Chip_Component.EVENTS()),
            //propertiesobject.concat(Ext_Chip_Component.PROPERTIESOBJECT()),
            //methods.concat(Ext_Chip_Component.METHODS())

            //EwcBaseComponent.extendArray(events, Ext_Chip_Component.EVENTS()),
            //EwcBaseComponent.extendArray(propertiesobject, Ext_Chip_Component.PROPERTIESOBJECT()),
            //EwcBaseComponent.extendArray(methods, Ext_Chip_Component.METHODS())
        )
        //this.XTYPE = Ext_Chip_Component.XTYPE()
        //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_Chip_Component.PROPERTIESOBJECT());
        //this.methods = this.extendArray(this.methods, Ext_Chip_Component.METHODS());
        //this.events = this.extendArray(this.events, Ext_Chip_Component.EVENTS());

    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
