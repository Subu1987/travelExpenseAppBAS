sap.ui.define([
    "sembcorp/com/travelexpense/controller/BaseController"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (BaseController) {
        "use strict";

        return BaseController.extend("sembcorp.com.travelexpense.controller.components.MyTripExpenses", {
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
                        return item.employee_empID === parseInt(oGlobalData.userId);  // Filter for employee_empID 1
                    });

                    console.log(filteredData);
                    oTravelMasterModel.setData(filteredData);
                }).catch(function (oError) {
                    console.log(oError);
                })
            }
        });
    });
