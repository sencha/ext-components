import Ext_chart_SpaceFillingChart from './Ext/chart/SpaceFillingChart.js'
import HTMLParsedElement from './HTMLParsedElement.js'

export class ExtSpacefillingComponent extends Ext_chart_SpaceFillingChart {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'spacefilling'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-spacefilling', ExtSpacefillingComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-spacefilling', HTMLParsedElement.withParsedCallback(ExtSpacefillingComponent))