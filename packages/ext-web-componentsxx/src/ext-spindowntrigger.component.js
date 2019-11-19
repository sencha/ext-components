import Ext_field_trigger_SpinDown from './Ext/field/trigger/SpinDown'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtSpindowntriggerComponent extends Ext_field_trigger_SpinDown {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'spindowntrigger'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-spindowntrigger', ExtSpindowntriggerComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-spindowntrigger', HTMLParsedElement.withParsedCallback(ExtSpindowntriggerComponent))