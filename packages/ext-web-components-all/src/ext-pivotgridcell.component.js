import Ext_pivot_cell_Cell from './Ext/pivot/cell/Cell.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtPivotgridcellComponent extends Ext_pivot_cell_Cell {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'pivotgridcell'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-pivotgridcell', ExtPivotgridcellComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-pivotgridcell', HTMLParsedElement.withParsedCallback(ExtPivotgridcellComponent))