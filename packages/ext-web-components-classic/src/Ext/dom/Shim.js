import Ext_dom_Underlay from '../../Ext/dom/Underlay.js';

export default class Ext_dom_Shim extends Ext_dom_Underlay {
  static PROPERTIES() { return [
    'target',
    'zIndex',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmd,cmdAll'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_dom_Shim.PROPERTIES());
    return Ext_dom_Underlay.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_dom_Shim.EVENTS());
    return Ext_dom_Underlay.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_dom_Shim.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_dom_Shim.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_dom_Shim.PROPERTIES()),
      events.concat(Ext_dom_Shim.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}