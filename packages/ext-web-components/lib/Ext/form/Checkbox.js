import Ext_field_Input_Component from '../../Ext/field/Input';

export default class Ext_form_Checkbox_Component extends Ext_field_Input_Component {
//events
get onchange(){return this.getAttribute('onchange')};set onchange(onchange){this.setAttribute('onchange',onchange)}
get oncheck(){return this.getAttribute('oncheck')};set oncheck(oncheck){this.setAttribute('oncheck',oncheck)}
get onuncheck(){return this.getAttribute('onuncheck')};set onuncheck(onuncheck){this.setAttribute('onuncheck',onuncheck)}
//configs

static XTYPE() {return 'checkbox'}
static PROPERTIESOBJECT() { return {
"checked":["boolean"],
"labelMaskTap":["boolean"],
"publishes":["string","string[]","object"],
"shareableName":["boolean"],
"twoWayBindable":["string","string[]","object"],
"value":["string"],
}}
static EVENTS() { return [
{name:'change',parameters:'undefined,newValue,oldValue'},
{name:'check',parameters:'undefined'},
{name:'uncheck',parameters:'undefined'},
]}
static METHODS() { return [
{ name:'check',function: function() { return this.ext.check() } },
{ name:'getBoxTemplate',function: function() { return this.ext.getBoxTemplate() } },
{ name:'getChecked',function: function() { return this.ext.getChecked() } },
{ name:'getGroupValues',function: function() { return this.ext.getGroupValues() } },
{ name:'getRawValue',function: function() { return this.ext.getRawValue() } },
{ name:'getSameGroupFields',function: function() { return this.ext.getSameGroupFields() } },
{ name:'getSubmitValue',function: function() { return this.ext.getSubmitValue() } },
{ name:'isChecked',function: function() { return this.ext.isChecked() } },
{ name:'resetGroupValues',function: function() { return this.ext.resetGroupValues() } },
{ name:'setGroupValues',function: function(values) { return this.ext.setGroupValues(values) } },
{ name:'uncheck',function: function() { return this.ext.uncheck() } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_form_Checkbox_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_form_Checkbox_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor(propertiesobject, methods, events) {
        super (
            Object.assign(propertiesobject, Ext_form_Checkbox_Component.PROPERTIESOBJECT()),
            //{propertiesobject, Ext_form_Checkbox_Component.PROPERTIESOBJECT()},
            methods.concat(Ext_form_Checkbox_Component.METHODS()),
            events.concat(Ext_form_Checkbox_Component.EVENTS())



            //events.concat(Ext_form_Checkbox_Component.EVENTS()),
            //propertiesobject.concat(Ext_form_Checkbox_Component.PROPERTIESOBJECT()),
            //methods.concat(Ext_form_Checkbox_Component.METHODS())

            //EwcBaseComponent.extendArray(events, Ext_form_Checkbox_Component.EVENTS()),
            //EwcBaseComponent.extendArray(propertiesobject, Ext_form_Checkbox_Component.PROPERTIESOBJECT()),
            //EwcBaseComponent.extendArray(methods, Ext_form_Checkbox_Component.METHODS())
        )
        //this.XTYPE = Ext_form_Checkbox_Component.XTYPE()
        //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_form_Checkbox_Component.PROPERTIESOBJECT());
        //this.methods = this.extendArray(this.methods, Ext_form_Checkbox_Component.METHODS());
        //this.events = this.extendArray(this.events, Ext_form_Checkbox_Component.EVENTS());

    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
