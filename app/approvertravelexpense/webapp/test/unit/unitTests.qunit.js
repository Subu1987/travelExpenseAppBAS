/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"sembcorpcom/approvertravelexpense/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
