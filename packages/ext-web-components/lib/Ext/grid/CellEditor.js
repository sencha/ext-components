import Ext_Editor_Component from '../../Ext/Editor';

export default class Ext_grid_CellEditor_Component extends Ext_Editor_Component {
//events
//configs

static XTYPE() {return 'celleditor'}
static PROPERTIESOBJECT() { return {
"autoPin":["boolean"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
{ name:'getLocation',function: function() { return this.ext.getLocation() } },
{ name:'startEdit',function: function(location,value,doFocus) { return this.ext.startEdit(location,value,doFocus) } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_grid_CellEditor_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_grid_CellEditor_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor(propertiesobject, methods, events) {
        super (
            Object.assign(propertiesobject, Ext_grid_CellEditor_Component.PROPERTIESOBJECT()),
            //{propertiesobject, Ext_grid_CellEditor_Component.PROPERTIESOBJECT()},
            methods.concat(Ext_grid_CellEditor_Component.METHODS()),
            events.concat(Ext_grid_CellEditor_Component.EVENTS())



            //events.concat(Ext_grid_CellEditor_Component.EVENTS()),
            //propertiesobject.concat(Ext_grid_CellEditor_Component.PROPERTIESOBJECT()),
            //methods.concat(Ext_grid_CellEditor_Component.METHODS())

            //EwcBaseComponent.extendArray(events, Ext_grid_CellEditor_Component.EVENTS()),
            //EwcBaseComponent.extendArray(propertiesobject, Ext_grid_CellEditor_Component.PROPERTIESOBJECT()),
            //EwcBaseComponent.extendArray(methods, Ext_grid_CellEditor_Component.METHODS())
        )
        //this.XTYPE = Ext_grid_CellEditor_Component.XTYPE()
        //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_grid_CellEditor_Component.PROPERTIESOBJECT());
        //this.methods = this.extendArray(this.methods, Ext_grid_CellEditor_Component.METHODS());
        //this.events = this.extendArray(this.events, Ext_grid_CellEditor_Component.EVENTS());

    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
