import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Dialog from '../Ext/Dialog.js';

var Ext_MessageBox =
/*#__PURE__*/
function (_Ext_Dialog) {
  _inheritsLoose(Ext_MessageBox, _Ext_Dialog);

  Ext_MessageBox.PROPERTIES = function PROPERTIES() {
    return ['activeChildTabIndex', 'activeItem', 'alignSelf', 'allowFocusingDisabledChildren', 'alwaysOnTop', 'anchor', 'anchorPosition', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'autoDestroy', 'autoSize', 'axisLock', 'bbar', 'bind', 'bodyBorder', 'bodyCls', 'bodyPadding', 'bodyStyle', 'border', 'bottom', 'buttonAlign', 'buttons', 'buttonToolbar', 'cardSwitchAnimation', 'centered', 'closable', 'closeAction', 'closeToolText', 'cls', 'collapsed', 'collapsible', 'constrainAlign', 'constrainDrag', 'contentEl', 'control', 'controller', 'data', 'defaultFocus', 'defaultListenerScope', 'defaults', 'defaultTextHeight', 'defaultToolWeights', 'defaultType', 'disabled', 'dismissAction', 'dismissHandler', 'displayed', 'docked', 'draggable', 'flex', 'floated', 'focusableContainer', 'focusCls', 'fullscreen', 'header', 'headerPosition', 'height', 'hidden', 'hideAnimation', 'hideMode', 'hideOnMaskTap', 'html', 'icon', 'iconAlign', 'iconCls', 'id', 'inactiveChildTabIndex', 'innerCls', 'instanceCls', 'itemId', 'items', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'layout', 'lbar', 'left', 'listeners', 'manageBorders', 'margin', 'masked', 'maskTapHandler', 'maxHeight', 'maximizable', 'maximizeAnimation', 'maximized', 'maximizeProxy', 'maximizeTool', 'maxWidth', 'message', 'minButtonWidth', 'minHeight', 'minWidth', 'modal', 'modelValidation', 'msg', 'name', 'nameable', 'nameHolder', 'padding', 'plugins', 'prompt', 'publishes', 'rbar', 'record', 'reference', 'referenceHolder', 'relative', 'renderTo', 'resetFocusPosition', 'resizable', 'restorable', 'restoreAnimation', 'restoreTool', 'right', 'ripple', 'scrollable', 'session', 'shadow', 'shareableName', 'shim', 'showAnimation', 'standardButtons', 'stateful', 'statefulDefaults', 'stateId', 'style', 'tabIndex', 'tbar', 'title', 'titleAlign', 'titleCollapse', 'toFrontOnShow', 'toolDefaults', 'tools', 'tooltip', 'top', 'touchAction', 'tpl', 'tplWriteMode', 'translatable', 'twoWayBindable', 'ui', 'userCls', 'userSelectable', 'viewModel', 'weight', 'weighted', 'width', 'x', 'xtype', 'y', 'zIndex', 'platformConfig', 'responsiveConfig', 'fitToParent', 'config'];
  };

  Ext_MessageBox.EVENTS = function EVENTS() {
    return [{
      name: 'activate',
      parameters: 'newActiveItem,messagebox,oldActiveItem'
    }, {
      name: 'activeItemchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'add',
      parameters: 'messagebox,item,index'
    }, {
      name: 'added',
      parameters: 'sender,container,index'
    }, {
      name: 'beforeactiveItemchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforebottomchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforecenteredchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforecollapse',
      parameters: 'messagebox'
    }, {
      name: 'beforedisabledchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforedockedchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforeexpand',
      parameters: 'messagebox'
    }, {
      name: 'beforeheightchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforehiddenchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforehide',
      parameters: 'sender'
    }, {
      name: 'beforeleftchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforemaxHeightchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforemaximize',
      parameters: 'dialog'
    }, {
      name: 'beforemaxWidthchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforeminHeightchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforeminWidthchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforeorientationchange',
      parameters: ''
    }, {
      name: 'beforeresizedragstart',
      parameters: 'messagebox,context'
    }, {
      name: 'beforerestore',
      parameters: 'dialog'
    }, {
      name: 'beforerightchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforescrollablechange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforeshow',
      parameters: 'sender'
    }, {
      name: 'beforetofront',
      parameters: 'messagebox'
    }, {
      name: 'beforetopchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforewidthchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'blur',
      parameters: 'messagebox,event'
    }, {
      name: 'bottomchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'centeredchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'collapse',
      parameters: 'messagebox'
    }, {
      name: 'deactivate',
      parameters: 'oldActiveItem,messagebox,newActiveItem'
    }, {
      name: 'destroy',
      parameters: ''
    }, {
      name: 'disabledchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'dockedchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'drawerhide',
      parameters: 'messagebox'
    }, {
      name: 'drawershow',
      parameters: 'messagebox'
    }, {
      name: 'erased',
      parameters: 'sender'
    }, {
      name: 'expand',
      parameters: 'messagebox'
    }, {
      name: 'floatingchange',
      parameters: 'sender,positioned'
    }, {
      name: 'focus',
      parameters: 'messagebox,event'
    }, {
      name: 'focusenter',
      parameters: 'messagebox,event'
    }, {
      name: 'focusleave',
      parameters: 'messagebox,event'
    }, {
      name: 'fullscreen',
      parameters: 'sender'
    }, {
      name: 'heightchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'hiddenchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'hide',
      parameters: 'sender'
    }, {
      name: 'initialize',
      parameters: 'sender'
    }, {
      name: 'leftchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'maxHeightchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'maximize',
      parameters: 'dialog'
    }, {
      name: 'maxWidthchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'minHeightchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'minWidthchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'move',
      parameters: 'messagebox,item,toIndex,fromIndex'
    }, {
      name: 'moved',
      parameters: 'sender,container,toIndex,fromIndex'
    }, {
      name: 'orientationchange',
      parameters: ''
    }, {
      name: 'painted',
      parameters: 'sender,element'
    }, {
      name: 'positionedchange',
      parameters: 'sender,positioned'
    }, {
      name: 'remove',
      parameters: 'messagebox,item,index'
    }, {
      name: 'removed',
      parameters: 'sender,container,index'
    }, {
      name: 'renderedchange',
      parameters: 'messagebox,item,rendered'
    }, {
      name: 'resize',
      parameters: 'element,info'
    }, {
      name: 'resizedrag',
      parameters: 'messagebox,context'
    }, {
      name: 'resizedragcancel',
      parameters: 'messagebox,context'
    }, {
      name: 'resizedragend',
      parameters: 'messagebox,context'
    }, {
      name: 'resizedragstart',
      parameters: 'messagebox,context'
    }, {
      name: 'restore',
      parameters: 'dialog'
    }, {
      name: 'rightchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'scrollablechange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'show',
      parameters: 'sender'
    }, {
      name: 'tofront',
      parameters: 'messagebox'
    }, {
      name: 'topchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'updatedata',
      parameters: 'sender,newData'
    }, {
      name: 'widthchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'ready',
      parameters: ''
    }];
  };

  Ext_MessageBox.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_MessageBox.PROPERTIES());
    return Ext_Dialog.getProperties(properties);
  };

  Ext_MessageBox.getEvents = function getEvents(events) {
    events = events.concat(Ext_MessageBox.EVENTS());
    return Ext_Dialog.getEvents(events);
  } //events
  ////configs
  //
  //static XTYPE() {return 'messagebox'}
  //static PROPERTIESOBJECT() { return {
  //[object Object]}}
  //static METHODS() { return [
  //]}
  ;

  _createClass(Ext_MessageBox, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Dialog.observedAttributes; //for (var property in Ext_MessageBox.PROPERTIESOBJECT()) {
      //    attrs.push(property)
      //}

      Ext_MessageBox.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_MessageBox.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_MessageBox(properties, events) {
    return _Ext_Dialog.call(this, properties.concat(Ext_MessageBox.PROPERTIES()), events.concat(Ext_MessageBox.EVENTS())) || this;
  }

  var _proto = Ext_MessageBox.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Dialog.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Dialog.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_MessageBox;
}(Ext_Dialog);

export { Ext_MessageBox as default };