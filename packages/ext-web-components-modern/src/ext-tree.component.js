import Ext_tree_Tree from './Ext/tree/Tree.js';
import ElementParser from './ElementParser.js';

export default class EWCTree extends Ext_tree_Tree {
  constructor() {
    super ([], []);
    this.xtype = 'tree';
  }
}
window.customElements.define('ext-tree', ElementParser.withParsedCallback(EWCTree));
