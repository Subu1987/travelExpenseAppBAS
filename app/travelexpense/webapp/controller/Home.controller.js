sap.ui.define([
    "sembcorp/com/travelexpense/controller/BaseController"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (BaseController) {
        "use strict";

        return BaseController.extend("sembcorp.com.travelexpense.controller.Home", {
            onInit: function () {
                
                this.getEmployeeMasterData();
                this.getCountryNameData();
                this.getActivityNameData();

            },
            getEmployeeMasterData: function(){
                let that = this;

                let oModel = this.getOwnerComponent().getModel();
                let sPath = "/employeeMaster";
                // console.log(oModel);

                let oContextBinding = oModel.bindContext(sPath);
                oContextBinding.requestObject().then(function(oData){
                    console.log(oData.value);
                    
                    let oEmployeeMasterModel = that.getOwnerComponent().getModel("employeeMasterData");
                    oEmployeeMasterModel.setData(oData.value);

                    console.log(oEmployeeMasterModel);
                }).catch(function(oError){
                    console.log(oError);
                })
            },
            getCountryNameData: function(){
                let that = this;
                let oModel = this.getOwnerComponent().getModel();
                let sPath = "/countryMaster";
                // console.log(oModel);

                let oListBinding = oModel.bindList(sPath);
                oListBinding.requestContexts().then(function(aContexts){
                    let aCountryData = aContexts.map(function(oContext) {
                        return oContext.getObject();
                    });
                    console.log(aCountryData);
                    
                    let oCountryNameModel = that.getOwnerComponent().getModel("countryNameData");
                    oCountryNameModel.setData(aCountryData);

                    console.log(oCountryNameModel);
                }).catch(function(oError){
                    console.log(oError);
                })
            },
            getActivityNameData: function(){
                let that = this;
                let oModel = this.getOwnerComponent().getModel();
                let sPath = "/activityMaster";
                // console.log(oModel);

                let oContextBinding = oModel.bindContext(sPath);
                oContextBinding.requestObject().then(function(oData){
                    console.log(oData.value);
                    
                    let oActivityNameModel = that.getOwnerComponent().getModel("activityNameData");
                    oActivityNameModel.setData(oData.value);

                    console.log(oActivityNameModel);
                }).catch(function(oError){
                    console.log(oError);
                })
            },
            onTestData: function(){
                let oData = {
                    "name": "Subrato",
                    "age": 28
                };
                let oModel = this.getOwnerComponent().getModel();
                let oBindList = oModel.bindList("/testData");
                let oContext = oBindList.create(oData);
                console.log(oData);
                
                oContext.created().then(function (data) {
                    console.log("data saved successfully", data);
                }).catch(function (error) {
                    console.log("something wrong", error);
                });
            }

            
        });
    });
