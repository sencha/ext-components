//import Ext_calendar_view_Multi from '@sencha/ext-runtime-base/dist/./Ext/calendar/view/Multi.js';
import Ext_calendar_view_Multi from './Ext/calendar/view/Multi.js';
import ElementParser from './ElementParser.js';

export default class EWCCalendar_multiview extends Ext_calendar_view_Multi {
    constructor() {
        super ([], []);
        this.xtype = 'calendar-multiview';
    }

}
window.customElements.define('ext-calendar-multiview', ElementParser.withParsedCallback(EWCCalendar_multiview));
