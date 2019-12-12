import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_field_ComboBox from '../../../Ext/form/field/ComboBox.js';

var Ext_form_field_Tag =
/*#__PURE__*/
function (_Ext_form_field_Combo) {
  _inheritsLoose(Ext_form_field_Tag, _Ext_form_field_Combo);

  Ext_form_field_Tag.PROPERTIES = function PROPERTIES() {
    return ['activeCounter', 'activeError', 'activeErrorsTpl', 'afterBodyEl', 'afterLabelTextTpl', 'afterLabelTpl', 'afterSubTpl', 'alignOnScroll', 'alignTarget', 'allowBlank', 'allowOnlyWhitespace', 'allQuery', 'alwaysOnTop', 'anchor', 'animateShadow', 'anyMatch', 'ariaAttributes', 'ariaAvailableListLabel', 'ariaDescribedBy', 'ariaDeselectedText', 'ariaErrorText', 'ariaHelp', 'ariaHelpText', 'ariaHelpTextEditable', 'ariaLabel', 'ariaLabelledBy', 'ariaNoneSelectedText', 'ariaSelectedListLabel', 'ariaSelectedText', 'autoEl', 'autoFitErrors', 'autoHideInputMask', 'autoLoadOnValue', 'autoRender', 'autoSelect', 'autoSelectLast', 'autoShow', 'baseBodyCls', 'baseCls', 'beforeBodyEl', 'beforeLabelTextTpl', 'beforeLabelTpl', 'beforeSubTpl', 'bind', 'blankText', 'border', 'caseSensitive', 'checkChangeBuffer', 'checkChangeEvents', 'childEls', 'clearFilterOnBlur', 'clearOnBackspace', 'cls', 'columnWidth', 'componentCls', 'componentLayout', 'constrain', 'constraintInsets', 'constrainTo', 'contentEl', 'controller', 'createNewOnBlur', 'createNewOnEnter', 'data', 'defaultAlign', 'defaultListConfig', 'defaultListenerScope', 'delimiter', 'dirtyCls', 'disabled', 'disabledCls', 'disableKeyFilter', 'displayField', 'displayTpl', 'dock', 'draggable', 'editable', 'emptyCls', 'emptyText', 'enableKeyEvents', 'enableRegEx', 'encodeSubmitValue', 'enforceMaxLength', 'errorMsgCls', 'fieldBodyCls', 'fieldCls', 'fieldLabel', 'fieldStyle', 'fieldSubTpl', 'filterPickList', 'fixed', 'flex', 'floating', 'focusCls', 'focusOnToFront', 'forceSelection', 'formBind', 'formItemCls', 'frame', 'grow', 'growMax', 'growMin', 'growToLongestValue', 'height', 'hidden', 'hiddenDataCls', 'hiddenName', 'hideEmptyLabel', 'hideLabel', 'hideMode', 'hideTrigger', 'html', 'id', 'inputAttrTpl', 'inputId', 'inputMask', 'inputType', 'inputWrapCls', 'invalidCls', 'invalidText', 'isTextInput', 'itemId', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'labelableRenderTpl', 'labelAlign', 'labelAttrTpl', 'labelCls', 'labelClsExtra', 'labelPad', 'labelSeparator', 'labelStyle', 'labelTpl', 'labelWidth', 'liquidLayout', 'listConfig', 'listeners', 'liveDrag', 'loader', 'margin', 'maskDefaults', 'maskElement', 'maskRe', 'matchFieldWidth', 'maxHeight', 'maxLength', 'maxLengthText', 'maxWidth', 'minChars', 'minHeight', 'minLength', 'minLengthText', 'minWidth', 'modal', 'modelValidation', 'msgTarget', 'multiSelect', 'name', 'nameable', 'openCls', 'overCls', 'padding', 'pageSize', 'pickerAlign', 'pickerOffset', 'plugins', 'preventMark', 'publishes', 'queryCaching', 'queryDelay', 'queryMode', 'queryParam', 'readOnly', 'readOnlyCls', 'reference', 'regex', 'regexText', 'region', 'renderConfig', 'renderData', 'renderTo', 'renderTpl', 'repeatTriggerClick', 'requiredCls', 'resizable', 'resizeHandles', 'saveDelay', 'scrollable', 'selection', 'selectOnFocus', 'selectOnTab', 'session', 'shadow', 'shadowOffset', 'shareableName', 'shim', 'shrinkWrap', 'simulatePlaceholder', 'stacked', 'stateEvents', 'stateful', 'stateId', 'store', 'stripCharsRe', 'style', 'submitValue', 'tabIndex', 'tipTpl', 'toFrontOnShow', 'touchAction', 'tpl', 'tplWriteMode', 'transform', 'transformInPlace', 'triggerAction', 'triggerCls', 'triggerOnClick', 'triggers', 'triggerWrapCls', 'twoWayBindable', 'typeAhead', 'typeAheadDelay', 'ui', 'uiCls', 'userCls', 'validateBlank', 'validateOnBlur', 'validateOnChange', 'validateOnFocusLeave', 'validation', 'validationField', 'validator', 'value', 'valueField', 'valueNotFoundText', 'valueParam', 'valuePublishEvent', 'viewModel', 'vtype', 'vtypeText', 'weight', 'width', 'xtype'];
  };

  Ext_form_field_Tag.EVENTS = function EVENTS() {
    return [{
      name: 'activate',
      parameters: 'sender'
    }, {
      name: 'added',
      parameters: 'sender,container,pos'
    }, {
      name: 'afterlayoutanimation',
      parameters: 'sender'
    }, {
      name: 'afterrender',
      parameters: 'sender'
    }, {
      name: 'autosize',
      parameters: 'sender,height'
    }, {
      name: 'beforeactivate',
      parameters: 'sender'
    }, {
      name: 'beforedeactivate',
      parameters: 'sender'
    }, {
      name: 'beforedeselect',
      parameters: 'combo,record,index'
    }, {
      name: 'beforedestroy',
      parameters: 'sender'
    }, {
      name: 'beforehide',
      parameters: 'sender'
    }, {
      name: 'beforequery',
      parameters: 'queryPlan'
    }, {
      name: 'beforerender',
      parameters: 'sender'
    }, {
      name: 'beforeselect',
      parameters: 'combo,record,index'
    }, {
      name: 'beforeshow',
      parameters: 'sender'
    }, {
      name: 'beforestaterestore',
      parameters: 'sender,state'
    }, {
      name: 'beforestatesave',
      parameters: 'sender,state'
    }, {
      name: 'blur',
      parameters: 'sender,event'
    }, {
      name: 'boxready',
      parameters: 'sender,width,height'
    }, {
      name: 'change',
      parameters: 'sender,newValue,oldValue'
    }, {
      name: 'collapse',
      parameters: 'field'
    }, {
      name: 'deactivate',
      parameters: 'sender'
    }, {
      name: 'destroy',
      parameters: 'sender'
    }, {
      name: 'dirtychange',
      parameters: 'sender,isDirty'
    }, {
      name: 'disable',
      parameters: 'sender'
    }, {
      name: 'enable',
      parameters: 'sender'
    }, {
      name: 'errorchange',
      parameters: 'sender,error'
    }, {
      name: 'expand',
      parameters: 'field'
    }, {
      name: 'focus',
      parameters: 'sender,event'
    }, {
      name: 'focusenter',
      parameters: 'sender,event'
    }, {
      name: 'focusleave',
      parameters: 'sender,event'
    }, {
      name: 'hide',
      parameters: 'sender'
    }, {
      name: 'keydown',
      parameters: 'sender,e'
    }, {
      name: 'keypress',
      parameters: 'sender,e'
    }, {
      name: 'keyup',
      parameters: 'sender,e'
    }, {
      name: 'move',
      parameters: 'sender,x,y'
    }, {
      name: 'paste',
      parameters: 'sender,e'
    }, {
      name: 'removed',
      parameters: 'sender,ownerCt'
    }, {
      name: 'render',
      parameters: 'sender'
    }, {
      name: 'resize',
      parameters: 'sender,width,height,oldWidth,oldHeight'
    }, {
      name: 'select',
      parameters: 'combo,record'
    }, {
      name: 'show',
      parameters: 'sender'
    }, {
      name: 'specialkey',
      parameters: 'sender,e'
    }, {
      name: 'staterestore',
      parameters: 'sender,state'
    }, {
      name: 'statesave',
      parameters: 'sender,state'
    }, {
      name: 'validitychange',
      parameters: 'sender,isValid'
    }, {
      name: 'writeablechange',
      parameters: 'sender,Read'
    }, {
      name: 'ready',
      parameters: 'cmd,cmdAll'
    }];
  };

  Ext_form_field_Tag.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_form_field_Tag.PROPERTIES());
    return Ext_form_field_ComboBox.getProperties(properties);
  };

  Ext_form_field_Tag.getEvents = function getEvents(events) {
    events = events.concat(Ext_form_field_Tag.EVENTS());
    return Ext_form_field_ComboBox.getEvents(events);
  } //events
  ////configs
  //
  //static XTYPE() {return ''}
  //static PROPERTIESOBJECT() { return {
  //}}
  //static METHODS() { return [
  //]}
  ;

  _createClass(Ext_form_field_Tag, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_form_field_Combo.observedAttributes; //for (var property in Ext_form_field_Tag.PROPERTIESOBJECT()) {
      //    attrs.push(property)
      //}

      Ext_form_field_Tag.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_form_field_Tag.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_form_field_Tag(properties, events) {
    return _Ext_form_field_Combo.call(this, properties.concat(Ext_form_field_Tag.PROPERTIES()), events.concat(Ext_form_field_Tag.EVENTS())) || this;
  }

  var _proto = Ext_form_field_Tag.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_form_field_Combo.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_form_field_Combo.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_form_field_Tag;
}(Ext_form_field_ComboBox);

export { Ext_form_field_Tag as default };