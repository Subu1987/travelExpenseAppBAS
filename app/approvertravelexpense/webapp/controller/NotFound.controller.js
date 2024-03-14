sap.ui.define([
	"sembcorp/com/approvertravelexpense/controller/BaseController"
], function(BaseController) {
	"use strict";

	return BaseController.extend("sembcorp.com.approvertravelexpense.controller.NotFound", {

		/**
		 * Navigates to the worklist when the link is pressed
		 * @public
		 */
		onLinkPressed: function() {
			this.getRouter().navTo("home");
		}

	});

});