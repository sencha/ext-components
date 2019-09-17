import Ext_d3_Component_Component from '../../../Ext/d3/Component';

export default class Ext_d3_svg_Svg_Component extends Ext_d3_Component_Component {
//events
get onsceneresize(){return this.getAttribute('onsceneresize')};set onsceneresize(onsceneresize){this.setAttribute('onsceneresize',onsceneresize)}
get onscenesetup(){return this.getAttribute('onscenesetup')};set onscenesetup(onscenesetup){this.setAttribute('onscenesetup',onscenesetup)}
//configs

static XTYPE() {return 'd3-svg'}
static PROPERTIESOBJECT() { return {
"clipScene":["boolean"],
"padding":["object","string","number"],
"size":["object"],
}}
static EVENTS() { return [
{name:'sceneresize',parameters:'component,scene,size'},
{name:'scenesetup',parameters:'component,scene'},
]}
static METHODS() { return [
{ name:'alignContent',function: function(options,transition) { return this.ext.alignContent(options,transition) } },
{ name:'clearScene',function: function() { return this.ext.clearScene() } },
{ name:'getDefs',function: function() { return this.ext.getDefs() } },
{ name:'getScene',function: function() { return this.ext.getScene() } },
{ name:'resizeHandler',function: function(size) { return this.ext.resizeHandler(size) } },
]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        for (var property in Ext_d3_svg_Svg_Component.PROPERTIESOBJECT()) {
            attrs.push(property)
        }
        Ext_d3_svg_Svg_Component.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor(propertiesobject, methods, events) {
        super (
            Object.assign(propertiesobject, Ext_d3_svg_Svg_Component.PROPERTIESOBJECT()),
            //{propertiesobject, Ext_d3_svg_Svg_Component.PROPERTIESOBJECT()},
            methods.concat(Ext_d3_svg_Svg_Component.METHODS()),
            events.concat(Ext_d3_svg_Svg_Component.EVENTS())



            //events.concat(Ext_d3_svg_Svg_Component.EVENTS()),
            //propertiesobject.concat(Ext_d3_svg_Svg_Component.PROPERTIESOBJECT()),
            //methods.concat(Ext_d3_svg_Svg_Component.METHODS())

            //EwcBaseComponent.extendArray(events, Ext_d3_svg_Svg_Component.EVENTS()),
            //EwcBaseComponent.extendArray(propertiesobject, Ext_d3_svg_Svg_Component.PROPERTIESOBJECT()),
            //EwcBaseComponent.extendArray(methods, Ext_d3_svg_Svg_Component.METHODS())
        )
        //this.XTYPE = Ext_d3_svg_Svg_Component.XTYPE()
        //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_d3_svg_Svg_Component.PROPERTIESOBJECT());
        //this.methods = this.extendArray(this.methods, Ext_d3_svg_Svg_Component.METHODS());
        //this.events = this.extendArray(this.events, Ext_d3_svg_Svg_Component.EVENTS());

    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
