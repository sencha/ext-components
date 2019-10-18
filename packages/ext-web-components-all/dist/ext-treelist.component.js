import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_list_Tree from './Ext/list/Tree.js';
import HTMLParsedElement from './HTMLParsedElement.js';
export var ExtTreelistComponent =
/*#__PURE__*/
function (_Ext_list_Tree) {
  _inheritsLoose(ExtTreelistComponent, _Ext_list_Tree);

  function ExtTreelistComponent() {
    var _this;

    _this = _Ext_list_Tree.call(this, [], []) || this;
    _this.xtype = 'treelist';
    return _this;
  }

  return ExtTreelistComponent;
}(Ext_list_Tree); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-treelist', ExtTreelistComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-treelist', HTMLParsedElement.withParsedCallback(ExtTreelistComponent));