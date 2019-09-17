import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_Select_Component from '../../../Ext/field/Select';

var Ext_form_field_ComboBox_Component =
/*#__PURE__*/
function (_Ext_field_Select_Com) {
  _inheritsLoose(Ext_form_field_ComboBox_Component, _Ext_field_Select_Com);

  //configs
  Ext_form_field_ComboBox_Component.XTYPE = function XTYPE() {
    return 'combobox';
  };

  Ext_form_field_ComboBox_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "allQuery": ["string"],
      "anyMatch": ["boolean"],
      "autoSelect": ["boolean"],
      "caseSensitive": ["boolean"],
      "editable": ["boolean"],
      "enableRegEx": ["boolean"],
      "forceSelection": ["boolean"],
      "minChars": ["number"],
      "primaryFilter": ["function", "string", "object", "Ext.util.Filter"],
      "queryCaching": ["boolean"],
      "queryDelay": ["number"],
      "queryMode": ["string"],
      "queryParam": ["string"],
      "triggerAction": ["string"],
      "typeAhead": ["boolean"],
      "typeAheadDelay": ["number"]
    };
  };

  Ext_form_field_ComboBox_Component.EVENTS = function EVENTS() {
    return [{
      name: 'beforepickercreate',
      parameters: 'undefined,newValue'
    }, {
      name: 'beforequery',
      parameters: 'queryPlan'
    }, {
      name: 'change',
      parameters: 'undefined,newValue,oldValue'
    }, {
      name: 'pickercreate',
      parameters: 'undefined,picker'
    }, {
      name: 'select',
      parameters: 'undefined,newValue'
    }];
  };

  Ext_form_field_ComboBox_Component.METHODS = function METHODS() {
    return [{
      name: 'beforeFilter',
      "function": function _function(queryPlan) {
        return this.ext.beforeFilter(queryPlan);
      }
    }, {
      name: 'doFilter',
      "function": function _function(query) {
        return this.ext.doFilter(query);
      }
    }, {
      name: 'doRawFilter',
      "function": function _function() {
        return this.ext.doRawFilter();
      }
    }, {
      name: 'onCollectionAdd',
      "function": function _function(valueCollection, adds) {
        return this.ext.onCollectionAdd(valueCollection, adds);
      }
    }, {
      name: 'onExpandTap',
      "function": function _function() {
        return this.ext.onExpandTap();
      }
    }, {
      name: 'onStoreFilterChange',
      "function": function _function() {
        return this.ext.onStoreFilterChange();
      }
    }, {
      name: 'serializePrimaryFilter',
      "function": function _function(filter) {
        return this.ext.serializePrimaryFilter(filter);
      }
    }];
  };

  _createClass(Ext_form_field_ComboBox_Component, [{
    key: "onbeforepickercreate",
    //events
    get: function get() {
      return this.getAttribute('onbeforepickercreate');
    },
    set: function set(onbeforepickercreate) {
      this.setAttribute('onbeforepickercreate', onbeforepickercreate);
    }
  }, {
    key: "onbeforequery",
    get: function get() {
      return this.getAttribute('onbeforequery');
    },
    set: function set(onbeforequery) {
      this.setAttribute('onbeforequery', onbeforequery);
    }
  }, {
    key: "onchange",
    get: function get() {
      return this.getAttribute('onchange');
    },
    set: function set(onchange) {
      this.setAttribute('onchange', onchange);
    }
  }, {
    key: "onpickercreate",
    get: function get() {
      return this.getAttribute('onpickercreate');
    },
    set: function set(onpickercreate) {
      this.setAttribute('onpickercreate', onpickercreate);
    }
  }, {
    key: "onselect",
    get: function get() {
      return this.getAttribute('onselect');
    },
    set: function set(onselect) {
      this.setAttribute('onselect', onselect);
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_field_Select_Com.observedAttributes;

      for (var property in Ext_form_field_ComboBox_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_form_field_ComboBox_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_form_field_ComboBox_Component(propertiesobject, methods, events) {
    return _Ext_field_Select_Com.call(this, Object.assign(propertiesobject, Ext_form_field_ComboBox_Component.PROPERTIESOBJECT()), //{propertiesobject, Ext_form_field_ComboBox_Component.PROPERTIESOBJECT()},
    methods.concat(Ext_form_field_ComboBox_Component.METHODS()), events.concat(Ext_form_field_ComboBox_Component.EVENTS())) || this; //this.XTYPE = Ext_form_field_ComboBox_Component.XTYPE()
    //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_form_field_ComboBox_Component.PROPERTIESOBJECT());
    //this.methods = this.extendArray(this.methods, Ext_form_field_ComboBox_Component.METHODS());
    //this.events = this.extendArray(this.events, Ext_form_field_ComboBox_Component.EVENTS());
  }

  var _proto = Ext_form_field_ComboBox_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_field_Select_Com.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_field_Select_Com.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_form_field_ComboBox_Component;
}(Ext_field_Select_Component);

export { Ext_form_field_ComboBox_Component as default };