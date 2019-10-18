import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_pivot_plugin_configurator_Settings from './Ext/pivot/plugin/configurator/Settings.js';
import HTMLParsedElement from './HTMLParsedElement.js';
export var ExtPivotsettingsComponent =
/*#__PURE__*/
function (_Ext_pivot_plugin_con) {
  _inheritsLoose(ExtPivotsettingsComponent, _Ext_pivot_plugin_con);

  function ExtPivotsettingsComponent() {
    var _this;

    _this = _Ext_pivot_plugin_con.call(this, [], []) || this;
    _this.xtype = 'pivotsettings';
    return _this;
  }

  return ExtPivotsettingsComponent;
}(Ext_pivot_plugin_configurator_Settings); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-pivotsettings', ExtPivotsettingsComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-pivotsettings', HTMLParsedElement.withParsedCallback(ExtPivotsettingsComponent));