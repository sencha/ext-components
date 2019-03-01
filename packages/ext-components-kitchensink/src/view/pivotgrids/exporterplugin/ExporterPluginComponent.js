import './ExporterPluginComponent.css';

export default class ExporterPluginComponent {

  constructor () {
    console.log('in ExporterPluginComponent constructor');
  }

  readyButton1(event) {
    var cmp = event.detail.cmp;
    this.button1Cmp = event.detail.cmp;
  }

  tapButton1(event) {
    this.button1Cmp.setText(new Date())
  }

}