sap.ui.define([
	"sembcorp/com/approvertravelexpense/controller/BaseController",
	"sap/ui/model/json/JSONModel"
], function (BaseController, JSONModel) {
	"use strict";

	return BaseController.extend("sembcorp.com.approvertravelexpense.controller.components.Master", {
		onInit: function () {
			this.getEmployeeMasterData();
		},
		getEmployeeMasterData: function () {
			let that = this;
			let oModel = this.getOwnerComponent().getModel();
			let oGlobalData = this.getOwnerComponent().getModel("globalData").getData();
			let oEmployeeMasterModel = this.getOwnerComponent().getModel("employeeMasterData");
			// let oEmployeeMasterData = oEmployeeMasterModel.getData();
			let sPath = "/employeeMaster";
			let oContextBinding = oModel.bindContext(sPath);
			oContextBinding.requestObject().then(function (oData) {
				// Filter the data based on employee_empID
				let filteredData = oData.value.filter(function (item) {
					return item.manager_mngrID === parseInt(oGlobalData.userId);
				});

				console.log(filteredData);
				oEmployeeMasterModel.setData(filteredData);
			}).catch(function (oError) {
				console.log(oError);
			})
		}
	});
});