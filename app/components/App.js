import Marionette from 'backbone.marionette';
import FileUploadView from './FileUploadView';

export default Marionette.Application.extend({
  region: '#app',

  onStart() {
    this.showView(new FileUploadView());
  }
});
