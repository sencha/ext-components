import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_exporter_file_ooxml_XmlRels from '../../../../../Ext/exporter/file/ooxml/XmlRels.js';

var Ext_exporter_file_ooxml_excel_PivotCacheRecords = /*#__PURE__*/function (_Ext_exporter_file_oo) {
  _inheritsLoose(Ext_exporter_file_ooxml_excel_PivotCacheRecords, _Ext_exporter_file_oo);

  Ext_exporter_file_ooxml_excel_PivotCacheRecords.PROPERTIES = function PROPERTIES() {
    return ['autoGenerateId', 'autoGenerateKey', 'contentType', 'fileName', 'fileNameTemplate', 'folder', 'id', 'idPrefix', 'index', 'name', 'nameTemplate', 'path', 'relationship', 'tplAttributes', 'tplNonAttributes'];
  };

  Ext_exporter_file_ooxml_excel_PivotCacheRecords.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_exporter_file_ooxml_excel_PivotCacheRecords.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_exporter_file_ooxml_excel_PivotCacheRecords.PROPERTIES());
    return Ext_exporter_file_ooxml_XmlRels.getProperties(properties);
  };

  Ext_exporter_file_ooxml_excel_PivotCacheRecords.getEvents = function getEvents(events) {
    events = events.concat(Ext_exporter_file_ooxml_excel_PivotCacheRecords.EVENTS());
    return Ext_exporter_file_ooxml_XmlRels.getEvents(events);
  };

  _createClass(Ext_exporter_file_ooxml_excel_PivotCacheRecords, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_exporter_file_oo.observedAttributes;
      Ext_exporter_file_ooxml_excel_PivotCacheRecords.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_exporter_file_ooxml_excel_PivotCacheRecords.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_exporter_file_ooxml_excel_PivotCacheRecords(properties, events) {
    return _Ext_exporter_file_oo.call(this, properties.concat(Ext_exporter_file_ooxml_excel_PivotCacheRecords.PROPERTIES()), events.concat(Ext_exporter_file_ooxml_excel_PivotCacheRecords.EVENTS())) || this;
  }

  var _proto = Ext_exporter_file_ooxml_excel_PivotCacheRecords.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_exporter_file_oo.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_exporter_file_oo.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_exporter_file_ooxml_excel_PivotCacheRecords;
}(Ext_exporter_file_ooxml_XmlRels);

export { Ext_exporter_file_ooxml_excel_PivotCacheRecords as default };