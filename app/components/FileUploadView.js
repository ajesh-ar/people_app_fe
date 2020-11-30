import Marionette from "backbone.marionette";
import Backbone from 'backbone';
import template from "../templates/file_upload.jst";
import PeopleView from "./PeopleView";
import ApiRoutes from './ApiRoutes'

// View holding full table and File Upload Section
// File Upload Action and API Calls are handled in this view
var UploadView = Marionette.View.extend({
    template: template,
    regions: {
    	tableRegion: "#table_content"
    },
    initialize() {
    	// this.listenTo(this.model, 'sync', this.render);
    },
    onRender() {
    	this.showChildView("tableRegion", new PeopleView());
    },
    events: {
    	"submit form": "uploadFile"
    },
    ui: {
    	"form": "form"
    },
    uploadFile(event) {
    	if(event){ event.preventDefault(); }
    	var payload = new FormData(this.ui.form[0]);
    	this.collection = uploadFile;
	    this.collection.fetch({ 
	    	data: payload, 
	    	type:'POST', 
	    	processData: false, 
	    	contentType: false
        });
    }
});

var FileUpload = Backbone.Model.extend();

var FileUploadCollection = Backbone.Collection.extend({
    url: ApiRoutes.upload_file,
    model: FileUpload,
    parse: function(response) {
        console.log("FILE UPLOAD RESPONSE: ");
        console.log(response);

    	if (response.status) {
    	   location.reload();
        } else {
    		$("#error_alert").html(response.message);
    		$("#error_alert").show();
    	}
    	
    	return response
    }
});

var uploadFile = new FileUploadCollection();

export default UploadView