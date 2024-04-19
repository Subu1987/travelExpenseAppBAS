sap.ui.define([
	"sembcorp/com/approvertravelexpense/controller/BaseController",
	"sap/ui/model/json/JSONModel"
], function (BaseController, JSONModel) {
	"use strict";

	return BaseController.extend("sembcorp.com.approvertravelexpense.controller.components.Detail", {
		onInit: function () {
			this.getTravelMasterData();
		},
		getTravelMasterData: function () {
			let that = this;
			let oModel = this.getOwnerComponent().getModel();
			let oGlobalData = this.getOwnerComponent().getModel("globalData").getData();
			let oTravelMasterModel = this.getOwnerComponent().getModel("travelMasterData");
			// let oTravelMasterData = oTravelMasterModel.getData();
			let sPath = "/travelMaster";
			let oContextBinding = oModel.bindContext(sPath);
			oContextBinding.requestObject().then(function (oData) {
				// Filter the data based on employee_empID
				let filteredData = oData.value.filter(function (item) {
					return item.employee_empID === parseInt(oGlobalData.userId);
				});

				console.log(filteredData);
				oEmployeeMasterModel.setData(filteredData);
			}).catch(function (oError) {
				console.log(oError);
			})
		}
	});
});