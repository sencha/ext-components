import Ext_chart_legend_LegendBase_Component from '../../../Ext/chart/legend/LegendBase';

export default class Ext_chart_legend_Legend_Component extends Ext_chart_legend_LegendBase_Component {
//events
//configs

static XTYPE() {return 'legend'}
static PROPERTIESOBJECT() { return {
"rect":["array"],
"store":["Ext.chart.legend.store.Store"],
"toggleable":["boolean"],
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

constructor() {
    super (
        Ext_chart_legend_Legend_Component.METHODS(),
        Ext_chart_legend_Legend_Component.XTYPE(),
        Ext_chart_legend_Legend_Component.PROPERTIESOBJECT(),
        Ext_chart_legend_Legend_Component.EVENTS()
    )
    this.XTYPE = Ext_chart_legend_Legend_Component.XTYPE()
    this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_chart_legend_Legend_Component.PROPERTIESOBJECT());
    this.METHODS = this.extendArray(this.METHODS, Ext_chart_legend_Legend_Component.METHODS());
    this.EVENTS = this.extendArray(this.EVENTS, Ext_chart_legend_Legend_Component.EVENTS());
  }

connectedCallback() {
    super.connectedCallback()
}

attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
}

}
(function () {
  Ext.onReady(function() {
    window.customElements.define('ext-legend', Ext_chart_legend_Legend_Component);
  });
})();
