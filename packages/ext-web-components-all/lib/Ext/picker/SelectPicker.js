import Ext_picker_Picker_Component from '../../Ext/picker/Picker';

export default class Ext_picker_SelectPicker_Component extends Ext_picker_Picker_Component {
//events
//configs

static XTYPE() {return 'selectpicker'}
static PROPERTIESOBJECT() { return {
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_picker_SelectPicker_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_picker_SelectPicker_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            
        )
        this.XTYPE = Ext_picker_SelectPicker_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_picker_SelectPicker_Component.PROPERTIESOBJECT());
        this.methods = this.extendArray(this.methods, Ext_picker_SelectPicker_Component.METHODS());
        this.events = this.extendArray(this.events, Ext_picker_SelectPicker_Component.EVENTS());

    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
