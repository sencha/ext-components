import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_column_Template_Component from './Ext/grid/column/Template';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtColumnComponent =
/*#__PURE__*/
function (_Ext_grid_column_Temp) {
  _inheritsLoose(ExtColumnComponent, _Ext_grid_column_Temp);

  function ExtColumnComponent() {
    var _this;

    _this = _Ext_grid_column_Temp.call(this, {}, [], []) || this;
    _this.xtype = 'column';
    return _this;
  }

  return ExtColumnComponent;
}(Ext_grid_column_Template_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-column', ExtColumnComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-column', HTMLParsedElement.withParsedCallback(ExtColumnComponent));