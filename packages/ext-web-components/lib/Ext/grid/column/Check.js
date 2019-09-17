import Ext_grid_column_Column_Component from '../../../Ext/grid/column/Column';

export default class Ext_grid_column_Check_Component extends Ext_grid_column_Column_Component {
//events
get onbeforecheckchange(){return this.getAttribute('onbeforecheckchange')};set onbeforecheckchange(onbeforecheckchange){this.setAttribute('onbeforecheckchange',onbeforecheckchange)}
get oncheckchange(){return this.getAttribute('oncheckchange')};set oncheckchange(oncheckchange){this.setAttribute('oncheckchange',oncheckchange)}
//configs

static XTYPE() {return 'checkcolumn'}
static PROPERTIESOBJECT() { return {
"align":["string"],
"cell":["object"],
"headerCheckbox":["boolean"],
"headerCheckboxAlign":["'top'","'right'","'bottom'","'left'"],
"ignoreExport":["boolean"],
"stopSelection":["boolean"],
"text":["string"],
}}
static EVENTS() { return [
{name:'beforecheckchange',parameters:'undefined,rowIndex,checked,record,e'},
{name:'checkchange',parameters:'undefined,rowIndex,checked,record,e'},
]}
static METHODS() { return [
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_grid_column_Check_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_grid_column_Check_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor(propertiesobject, methods, events) {
        super (
            Object.assign(propertiesobject, Ext_grid_column_Check_Component.PROPERTIESOBJECT()),
            //{propertiesobject, Ext_grid_column_Check_Component.PROPERTIESOBJECT()},
            methods.concat(Ext_grid_column_Check_Component.METHODS()),
            events.concat(Ext_grid_column_Check_Component.EVENTS())



            //events.concat(Ext_grid_column_Check_Component.EVENTS()),
            //propertiesobject.concat(Ext_grid_column_Check_Component.PROPERTIESOBJECT()),
            //methods.concat(Ext_grid_column_Check_Component.METHODS())

            //EwcBaseComponent.extendArray(events, Ext_grid_column_Check_Component.EVENTS()),
            //EwcBaseComponent.extendArray(propertiesobject, Ext_grid_column_Check_Component.PROPERTIESOBJECT()),
            //EwcBaseComponent.extendArray(methods, Ext_grid_column_Check_Component.METHODS())
        )
        //this.XTYPE = Ext_grid_column_Check_Component.XTYPE()
        //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_grid_column_Check_Component.PROPERTIESOBJECT());
        //this.methods = this.extendArray(this.methods, Ext_grid_column_Check_Component.METHODS());
        //this.events = this.extendArray(this.events, Ext_grid_column_Check_Component.EVENTS());

    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
