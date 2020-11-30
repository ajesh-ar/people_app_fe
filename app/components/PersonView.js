import Marionette from 'backbone.marionette';
import Backbone from 'backbone';
import template from '../templates/people.jst';
import ApiRoutes from './ApiRoutes'

// Single User Row
// Handles Save Action Against Unsaved Users
var PersonView = Marionette.View.extend({
    template: template,
    tagName: 'tr',
    initialize() {
        this.listenTo(this.collection, 'sync', this.render);
    },
    events: {
    	"click .update_user_details": "updateUser"
    },
    ui: {
    	"f_name": "#f_name",
    	"l_name": "#l_name",
    	"email": "#email",
    	"phone": "#phone"
    },
    updateUser(e) {
    	var button_id = e.target.id
    	var user_id = button_id.split("_")[2]
    	var f_name = this.ui.f_name.val();
    	var l_name = this.ui.l_name.val();
    	var email = this.ui.email.val();
    	var phone = this.ui.phone.val();
    	var data = { 'first_name': f_name, 'last_name': l_name, 'email': email, 'phone': phone, 'pending_id': user_id }
    	var updateUser = new UserUploadCollection();
    	this.collection = updateUser;
	    this.collection.fetch({
            type: "post",
            contentType: "application/json",
            data: JSON.stringify({'person': data}),
        });
    }
});

var User = Backbone.Model.extend();

var UserUploadCollection = Backbone.Collection.extend({
    url: ApiRoutes.update_person,
    model: User,
    parse: function(response) {
    	if (response.status) {
            location.reload();
    	} else {
    	    location.reload();
        }
    	return response
    }
});

var updateUser = new UserUploadCollection();

export default PersonView