import Ext_Base from '../../Ext/Base.js';

export default class Ext_slider_Thumb extends Ext_Base {
  static PROPERTIES() { return [
    'constrain',
    'slider',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmd,cmdAll'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_slider_Thumb.PROPERTIES());
    return Ext_Base.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_slider_Thumb.EVENTS());
    return Ext_Base.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_slider_Thumb.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_slider_Thumb.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_slider_Thumb.PROPERTIES()),
      events.concat(Ext_slider_Thumb.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}