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
                
                this.getEmployeeData();
                this.getCountryNameData();

            },
            getEmployeeData: function(){
                let that = this;

                let oModel = this.getOwnerComponent().getModel();
                let sPath = "/employeeMaster";
                // console.log(oModel);

                let oContextBinding = oModel.bindContext(sPath);
                oContextBinding.requestObject().then(function(oData){
                    console.log(oData.value);
                    
                    let oEmployeeModel = that.getOwnerComponent().getModel("employeeData");
                    oEmployeeModel.setData(oData.value);

                    console.log(oEmployeeModel);
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
            onComboBoxChange: function(){
                console.log("working combobox");
            }
        });
    });
