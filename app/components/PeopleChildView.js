import Marionette from 'backbone.marionette';
import Backbone from 'backbone';
import PersonView from './PersonView';
import ApiRoutes from './ApiRoutes';

// Gets people data and renders it
var PersonItem, PersonItemCollection, PeopleChildView, people;

PeopleChildView = Marionette.CollectionView.extend({
  childView: PersonView,
  tagName: 'tbody',
  initialize: function() {
    this.collection = people;
    this.collection.fetch();
  }
});

PersonItem = Backbone.Model.extend();

// API Response Format
// { data: { people: [{ id: '', ....}, {....}]}}
// Returns people array to loop tr section in table

PersonItemCollection = Backbone.Collection.extend({
  url: ApiRoutes.get_people,
  model: PersonItem,
  parse: function(response) {
    return response.data.people;
  }
});

people = new PersonItemCollection;

export default PeopleChildView
