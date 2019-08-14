import Ext_d3_hierarchy_Hierarchy_Component from '../../../Ext/d3/hierarchy/Hierarchy';

export default class Ext_d3_hierarchy_TreeMap_Component extends Ext_d3_hierarchy_Hierarchy_Component {
//events
//configs

static XTYPE() {return 'd3-treemap'}
static PROPERTIESOBJECT() { return {
"busyLayoutText":["string"],
"leafTile":["object"],
"parentTile":["object"],
"scaleLabels":["boolean"],
"tiling":["function"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
{ name:'createLabelQuantizer',function: function() { return this.ext.createLabelQuantizer() } },
{ name:'getContentRect',function: function() { return this.ext.getContentRect() } },
{ name:'getLabelSize',function: function(node,element) { return this.ext.getLabelSize(node,element) } },
{ name:'labelSizer',function: function(node,element) { return this.ext.labelSizer(node,element) } },
{ name:'nodeSizeFn',function: function(selection) { return this.ext.nodeSizeFn(selection) } },
{ name:'textVisibilityFn',function: function(selection) { return this.ext.textVisibilityFn(selection) } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_d3_hierarchy_TreeMap_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_d3_hierarchy_TreeMap_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor() {
        super (
            Ext_d3_hierarchy_TreeMap_Component.METHODS(),
            Ext_d3_hierarchy_TreeMap_Component.XTYPE(),
            Ext_d3_hierarchy_TreeMap_Component.PROPERTIESOBJECT(),
            Ext_d3_hierarchy_TreeMap_Component.EVENTS()
        )
        this.XTYPE = Ext_d3_hierarchy_TreeMap_Component.XTYPE()
        this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_d3_hierarchy_TreeMap_Component.PROPERTIESOBJECT());
        this.METHODS = this.extendArray(this.METHODS, Ext_d3_hierarchy_TreeMap_Component.METHODS());
        this.EVENTS = this.extendArray(this.EVENTS, Ext_d3_hierarchy_TreeMap_Component.EVENTS());
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}