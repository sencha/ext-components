import Ext_panel_Tool from './Ext/panel/Tool.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtToolComponent extends Ext_panel_Tool {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'tool'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-tool', ExtToolComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-tool', HTMLParsedElement.withParsedCallback(ExtToolComponent))