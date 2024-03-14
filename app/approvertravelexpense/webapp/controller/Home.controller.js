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
                
                // this.getEmployeeMasterData();

            },
            // getEmployeeMasterData: function(){
            //     let that = this;

            //     let oModel = this.getOwnerComponent().getModel();
            //     let sPath = "/employeeMaster";
            //     // console.log(oModel);

            //     let oContextBinding = oModel.bindContext(sPath);
            //     oContextBinding.requestObject().then(function(oData){
            //         console.log(oData.value);
                    
            //         let oEmployeeMasterModel = that.getOwnerComponent().getModel("employeeMasterData");
            //         oEmployeeMasterModel.setData(oData.value);

            //         console.log(oEmployeeMasterModel);
            //     }).catch(function(oError){
            //         console.log(oError);
            //     })
            // }

            
        });
    });
