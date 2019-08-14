import Ext_Panel_Component from '../../Ext/Panel';

export default class Ext_grid_LockedGrid_Component extends Ext_Panel_Component {
//events
//configs

static XTYPE() {return 'lockedgrid'}
static PROPERTIESOBJECT() { return {
"columnMenu":["object"],
"columns":["Ext.grid.column.Column[]"],
"defaultLockedRegion":["string"],
"enableColumnMove":["boolean"],
"gridDefaults":["object"],
"grouped":["boolean"],
"hideHeaders":["boolean"],
"itemConfig":["object"],
"leftGridDefaults":["object"],
"regions":["object"],
"rightGridDefaults":["object"],
"store":["Ext.data.Store","object","string"],
"variableHeights":["boolean"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

constructor() {
    super (
        Ext_grid_LockedGrid_Component.METHODS(),
        Ext_grid_LockedGrid_Component.XTYPE(),
        Ext_grid_LockedGrid_Component.PROPERTIESOBJECT(),
        Ext_grid_LockedGrid_Component.EVENTS()
    )
    this.XTYPE = Ext_grid_LockedGrid_Component.XTYPE()
    this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_grid_LockedGrid_Component.PROPERTIESOBJECT());
    this.METHODS = this.extendArray(this.METHODS, Ext_grid_LockedGrid_Component.METHODS());
    this.EVENTS = this.extendArray(this.EVENTS, Ext_grid_LockedGrid_Component.EVENTS());
  }

connectedCallback() {
    super.connectedCallback()
}

attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
}

}
