import Ext_Component_Component from '../../../Ext/Component';

export default class Ext_dataview_pullrefresh_Item_Component extends Ext_Component_Component {
//events
//configs

static XTYPE() {return ''}
static PROPERTIESOBJECT() { return {
"lastUpdated":["any"],
"pull":["number"],
"state":["'loading'","'loaded'","'pulling'","'holding'"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_dataview_pullrefresh_Item_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_dataview_pullrefresh_Item_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            
        )
        this.XTYPE = Ext_dataview_pullrefresh_Item_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_dataview_pullrefresh_Item_Component.PROPERTIESOBJECT());
        this.methods = this.extendArray(this.methods, Ext_dataview_pullrefresh_Item_Component.METHODS());
        this.events = this.extendArray(this.events, Ext_dataview_pullrefresh_Item_Component.EVENTS());

    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
