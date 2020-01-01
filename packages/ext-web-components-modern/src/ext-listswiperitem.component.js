import Ext_dataview_listswiper_Item from './Ext/dataview/listswiper/Item.js';
import ElementParser from './ElementParser.js';

export default class EWCListswiperitem extends Ext_dataview_listswiper_Item {
  constructor() {
    super ([], []);
    this.xtype = 'listswiperitem';
  }
}
window.customElements.define('ext-listswiperitem', ElementParser.withParsedCallback(EWCListswiperitem));
