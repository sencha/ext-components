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
            Ext_dataview_pullrefresh_Item_Component.METHODS(),
            Ext_dataview_pullrefresh_Item_Component.XTYPE(),
            Ext_dataview_pullrefresh_Item_Component.PROPERTIESOBJECT(),
            Ext_dataview_pullrefresh_Item_Component.EVENTS()
        )
        this.XTYPE = Ext_dataview_pullrefresh_Item_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_dataview_pullrefresh_Item_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_dataview_pullrefresh_Item_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_dataview_pullrefresh_Item_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}