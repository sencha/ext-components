//import Ext_dataview_component_DataItem from '@sencha/ext-runtime-base/dist/./Ext/dataview/component/DataItem.js';
import Ext_dataview_component_DataItem from './Ext/dataview/component/DataItem.js';
import ElementParser from './ElementParser.js';

export default class EWCDataitem extends Ext_dataview_component_DataItem {
    constructor() {
        super ([], []);
        this.xtype = 'dataitem';
    }

}
window.customElements.define('ext-dataitem', ElementParser.withParsedCallback(EWCDataitem));
