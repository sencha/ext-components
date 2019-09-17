import Ext_Component_Component from '../Ext/Component';

export default class Ext_Title_Component extends Ext_Component_Component {
//events
//configs

static XTYPE() {return 'title'}
static PROPERTIESOBJECT() { return {
"title":["string"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
{ name:'updateTitle',function: function(newTitle) { return this.ext.updateTitle(newTitle) } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_Title_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_Title_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor(propertiesobject, methods, events) {
        super (
            Object.assign(propertiesobject, Ext_Title_Component.PROPERTIESOBJECT()),
            //{propertiesobject, Ext_Title_Component.PROPERTIESOBJECT()},
            methods.concat(Ext_Title_Component.METHODS()),
            events.concat(Ext_Title_Component.EVENTS())



            //events.concat(Ext_Title_Component.EVENTS()),
            //propertiesobject.concat(Ext_Title_Component.PROPERTIESOBJECT()),
            //methods.concat(Ext_Title_Component.METHODS())

            //EwcBaseComponent.extendArray(events, Ext_Title_Component.EVENTS()),
            //EwcBaseComponent.extendArray(propertiesobject, Ext_Title_Component.PROPERTIESOBJECT()),
            //EwcBaseComponent.extendArray(methods, Ext_Title_Component.METHODS())
        )
        //this.XTYPE = Ext_Title_Component.XTYPE()
        //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_Title_Component.PROPERTIESOBJECT());
        //this.methods = this.extendArray(this.methods, Ext_Title_Component.METHODS());
        //this.events = this.extendArray(this.events, Ext_Title_Component.EVENTS());

    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
