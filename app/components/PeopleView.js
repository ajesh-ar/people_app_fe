import Marionette from 'backbone.marionette';
import template from '../templates/people_table.jst';
import PersonChildView from './PeopleChildView'


var PeopleView = Marionette.View.extend({
  template: template,
  tagName: 'table',
  className: 'table table-hover',
  regions: {
    body: {
      el: 'tbody',
      replaceElement: true
    }
  },
  onRender() {
    this.showChildView('body', new PersonChildView());
  }
});

export default PeopleView
