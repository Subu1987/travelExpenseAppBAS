sap.ui.define([
    "sembcorp/com/approvertravelexpense/controller/BaseController"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (BaseController) {
        "use strict";

        return BaseController.extend("sembcorp.com.approvertravelexpense.controller.Home", {
            onInit: function () {
                // get User ID from logged user
                this.getUserIdFromLoggedInUser();

            },
            getUserIdFromLoggedInUser: function () {
                let that = this;
                let userId = "2";

                this.onGlobalUserIdSet(userId);
                this.getApproverMasterData();
            },
            onGlobalUserIdSet: function (oUserId) {
                let oGlobalModel = this.getOwnerComponent().getModel("globalData");
                let oGlobalData = oGlobalModel.getData();

                // create the userId property 
                oGlobalData.userId = oGlobalData.userId === undefined ? "" : oGlobalData.userId;
                oGlobalData.userId = oUserId;
                oGlobalModel.setData(oGlobalData);
            },
            getApproverMasterData: function () {
                let that = this;
                let oModel = this.getOwnerComponent().getModel();
                let oGlobalData = this.getOwnerComponent().getModel("globalData").getData();
                // let sFilter = new Filter("empID", sap.ui.model.FilterOperator.EQ, oGlobalData.userId);
                let sPath = "/managerMaster(" + oGlobalData.userId + ")";

                let oContextBinding = oModel.bindContext(sPath);
                oContextBinding.requestObject().then(function (oData) {
                    console.log(oData);

                    let oApproverMasterModel = that.getOwnerComponent().getModel("approverMasterData");
                    oApproverMasterModel.setData(oData);

                    console.log(oApproverMasterModel);
                }).catch(function (oError) {
                    console.log(oError);
                });
            },


        });
    });
