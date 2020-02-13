import Ext_Mixin from '../../Ext/Mixin.js';

export default class Ext_mixin_FocusableContainer extends Ext_Mixin {
  static PROPERTIES() { return [
    'activeChildTabIndex',
    'allowFocusingDisabledChildren',
    'focusableContainer',
    'inactiveChildTabIndex',
    'resetFocusPosition',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmd,cmdAll'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_mixin_FocusableContainer.PROPERTIES());
    return Ext_Mixin.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_mixin_FocusableContainer.EVENTS());
    return Ext_Mixin.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_mixin_FocusableContainer.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_mixin_FocusableContainer.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_mixin_FocusableContainer.PROPERTIES()),
      events.concat(Ext_mixin_FocusableContainer.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}