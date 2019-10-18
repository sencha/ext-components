import Ext_form_field_ComboBox from './Ext/form/field/ComboBox'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtComboboxComponent extends Ext_form_field_ComboBox {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'combobox'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-combobox', ExtComboboxComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-combobox', HTMLParsedElement.withParsedCallback(ExtComboboxComponent))