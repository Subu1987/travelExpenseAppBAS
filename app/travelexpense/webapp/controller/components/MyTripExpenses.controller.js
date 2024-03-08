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
                let oTravelMasterModel = this.getOwnerComponent().getModel("travelMasterData");
                // let oTravelMasterData = oTravelMasterModel.getData();
                let sPath = "/travelMaster";
                let oContextBinding = oModel.bindContext(sPath);
                oContextBinding.requestObject().then(function (oData) {
                    console.log(oData.value);
                    oTravelMasterModel.setData(oData.value);
                }).catch(function (oError) {
                    console.log(oError);
                })
            }
        });
    });
