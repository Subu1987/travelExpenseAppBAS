sap.ui.define([
    "sembcorp/com/travelexpense/controller/BaseController",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (BaseController, Filter, FilterOperator) {
        "use strict";

        return BaseController.extend("sembcorp.com.travelexpense.controller.Home", {
            onInit: function () {
                let oElement = this.byId("idIconTabBar");
                console.log(oElement);
                // get User ID from logged user
                this.getUserIdFromLoggedInUser();

                // this.getEmployeeMasterData();
                this.getCountryNameData();
                this.getActivityNameData();

            },
            getUserIdFromLoggedInUser: function () {
                let that = this;
                let userId = "1";

                this.onGlobalUserIdSet(userId);
                this.getEmployeeMasterData();
            },
            onGlobalUserIdSet: function (oUserId) {
                let oGlobalModel = this.getOwnerComponent().getModel("globalData");
                let oGlobalData = oGlobalModel.getData();

                // create the userId property 
                oGlobalData.userId = oGlobalData.userId === undefined ? "" : oGlobalData.userId;
                oGlobalData.userId = oUserId;
                oGlobalModel.setData(oGlobalData);
            },
            getEmployeeMasterData: function () {
                let that = this;
                let oModel = this.getOwnerComponent().getModel();
                let oGlobalData = this.getOwnerComponent().getModel("globalData").getData();
                // let sFilter = new Filter("empID", sap.ui.model.FilterOperator.EQ, oGlobalData.userId);
                let sPath = "/employeeMaster(" + oGlobalData.userId + ")";

                let oContextBinding = oModel.bindContext(sPath);
                oContextBinding.requestObject().then(function (oData) {
                    console.log(oData);

                    let oEmployeeMasterModel = that.getOwnerComponent().getModel("employeeMasterData");
                    oEmployeeMasterModel.setData(oData);

                    console.log(oEmployeeMasterModel);
                }).catch(function (oError) {
                    console.log(oError);
                });
            },
            getCountryNameData: function () {
                let that = this;
                let oModel = this.getOwnerComponent().getModel();
                let sPath = "/countryMaster";
                // console.log(oModel);

                let oListBinding = oModel.bindList(sPath);
                oListBinding.requestContexts().then(function (aContexts) {
                    let aCountryData = aContexts.map(function (oContext) {
                        return oContext.getObject();
                    });
                    console.log(aCountryData);

                    let oCountryNameModel = that.getOwnerComponent().getModel("countryNameData");
                    oCountryNameModel.setData(aCountryData);

                    console.log(oCountryNameModel);
                }).catch(function (oError) {
                    console.log(oError);
                })
            },
            getActivityNameData: function () {
                let that = this;
                let oModel = this.getOwnerComponent().getModel();
                let sPath = "/activityMaster";
                // console.log(oModel);

                let oContextBinding = oModel.bindContext(sPath);
                oContextBinding.requestObject().then(function (oData) {
                    console.log(oData.value);

                    let oActivityNameModel = that.getOwnerComponent().getModel("activityNameData");
                    oActivityNameModel.setData(oData.value);

                    console.log(oActivityNameModel);
                }).catch(function (oError) {
                    console.log(oError);
                })
            }
        });
    });
