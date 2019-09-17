import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Panel_Component from '../Ext/Panel';

var Ext_Window_Component =
/*#__PURE__*/
function (_Ext_Panel_Component) {
  _inheritsLoose(Ext_Window_Component, _Ext_Panel_Component);

  //configs
  Ext_Window_Component.XTYPE = function XTYPE() {
    return 'dialog';
  };

  Ext_Window_Component.PROPERTIESOBJECT = function PROPERTIESOBJECT() {
    return {
      "bodyBorder": ["boolean"],
      "border": ["boolean"],
      "centered": ["boolean"],
      "constrainDrag": ["boolean", "Ext.drag.Constraint"],
      "dismissAction": ["string", "string[]"],
      "dismissHandler": ["string", "function"],
      "draggable": ["boolean", "object", "Ext.drag.Source"],
      "floated": ["boolean"],
      "hideAnimation": ["string", "mixed"],
      "hideMode": ["'clip'", "'display'", "'offsets'", "'opacity'", "'visibility'"],
      "keyMap": ["object"],
      "maskTapHandler": ["string", "function"],
      "maximizable": ["boolean"],
      "maximizeAnimation": ["object"],
      "maximized": ["boolean"],
      "maximizeProxy": ["object", "Ext.Dialog"],
      "maximizeTool": ["object", "Ext.Tool"],
      "modal": ["boolean"],
      "restorable": ["boolean"],
      "restoreAnimation": ["object"],
      "restoreTool": ["object", "Ext.Tool"],
      "shadow": ["boolean"],
      "showAnimation": ["string", "mixed"],
      "tabIndex": ["number"]
    };
  };

  Ext_Window_Component.EVENTS = function EVENTS() {
    return [{
      name: 'beforemaximize',
      parameters: 'dialog'
    }, {
      name: 'beforerestore',
      parameters: 'dialog'
    }, {
      name: 'maximize',
      parameters: 'dialog'
    }, {
      name: 'restore',
      parameters: 'dialog'
    }];
  };

  Ext_Window_Component.METHODS = function METHODS() {
    return [{
      name: 'maximize',
      "function": function _function(animation) {
        return this.ext.maximize(animation);
      }
    }, {
      name: 'restore',
      "function": function _function(animation) {
        return this.ext.restore(animation);
      }
    }];
  };

  _createClass(Ext_Window_Component, [{
    key: "onbeforemaximize",
    //events
    get: function get() {
      return this.getAttribute('onbeforemaximize');
    },
    set: function set(onbeforemaximize) {
      this.setAttribute('onbeforemaximize', onbeforemaximize);
    }
  }, {
    key: "onbeforerestore",
    get: function get() {
      return this.getAttribute('onbeforerestore');
    },
    set: function set(onbeforerestore) {
      this.setAttribute('onbeforerestore', onbeforerestore);
    }
  }, {
    key: "onmaximize",
    get: function get() {
      return this.getAttribute('onmaximize');
    },
    set: function set(onmaximize) {
      this.setAttribute('onmaximize', onmaximize);
    }
  }, {
    key: "onrestore",
    get: function get() {
      return this.getAttribute('onrestore');
    },
    set: function set(onrestore) {
      this.setAttribute('onrestore', onrestore);
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Panel_Component.observedAttributes;

      for (var property in Ext_Window_Component.PROPERTIESOBJECT()) {
        attrs.push(property);
      }

      Ext_Window_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_Window_Component(propertiesobject, methods, events) {
    return _Ext_Panel_Component.call(this, Object.assign(propertiesobject, Ext_Window_Component.PROPERTIESOBJECT()), //{propertiesobject, Ext_Window_Component.PROPERTIESOBJECT()},
    methods.concat(Ext_Window_Component.METHODS()), events.concat(Ext_Window_Component.EVENTS())) || this; //this.XTYPE = Ext_Window_Component.XTYPE()
    //this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_Window_Component.PROPERTIESOBJECT());
    //this.methods = this.extendArray(this.methods, Ext_Window_Component.METHODS());
    //this.events = this.extendArray(this.events, Ext_Window_Component.EVENTS());
  }

  var _proto = Ext_Window_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Panel_Component.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Panel_Component.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_Window_Component;
}(Ext_Panel_Component);

export { Ext_Window_Component as default };