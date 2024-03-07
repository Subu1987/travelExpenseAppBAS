sap.ui.define([
    "sembcorp/com/travelexpense/controller/BaseController"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (BaseController) {
        "use strict";

        return BaseController.extend("sembcorp.com.travelexpense.controller.components.CreateTravelRequest", {
            onInit: function () {

            },
            wizardCompletedHandler: function () {
                let oNavContainer = this.byId("wizardNavContainer");
                oNavContainer.to(this.byId("wizardReviewPage"));
            },
            backToWizardContent: function () {
                let oNavContainer = this.byId("wizardNavContainer");
                oNavContainer.backToPage(this.byId("wizardContentPage"));
            },
            saveTrip: function () {
                let tripEdit = this.byId("tripEdit");
                let tripView = this.byId("tripView");

                let oTravelMasterModel = this.getOwnerComponent().getModel("travelMasterData");
                let oTravelMasterData = oTravelMasterModel.getData();

                console.log(oTravelMasterData);

                tripEdit.setVisible(false);
                tripView.setVisible(true);
                this.toggleButtonSaveAndEdit(false);
            },
            editTrip: function () {
                let tripEdit = this.byId("tripEdit");
                let tripView = this.byId("tripView");

                let oTravelMasterModel = this.getOwnerComponent().getModel("travelMasterData");
                let oTravelMasterData = oTravelMasterModel.getData();

                console.log(oTravelMasterData);

                tripEdit.setVisible(true);
                tripView.setVisible(false);
                this.toggleButtonSaveAndEdit(true);

            },
            toggleButtonSaveAndEdit: function (active) {
                this.byId("editTrip").setVisible(!active);
                this.byId("saveTrip").setVisible(active);
            },
            onComboBoxChange: function (oEvent) {
                let oTravelMasterModel = this.getOwnerComponent().getModel("travelMasterData");
                let oTravelMasterData = oTravelMasterModel.getData();

                let selectedValue = oEvent.getParameters().value;
                let selectedId = oEvent.getParameters().id.split("--")[1];

                if (selectedId === "country") {
                    oTravelMasterData.country = selectedValue;
                } else if (selectedId === "destination") {
                    oTravelMasterData.destination = selectedValue;
                } else if (selectedId === "activity") {
                    oTravelMasterData.activity = selectedValue;
                }

                // set the new data to the model 
                oTravelMasterModel.setData(oTravelMasterData);
            },
            sendForApproval: function (oEvent) {
                let that = this;
                let oModel = this.getOwnerComponent().getModel();
                let oTravelMasterModel = this.getOwnerComponent().getModel("travelMasterData");
                let oTravelMasterData = oTravelMasterModel.getData();
                let oEmployeeMasterModel = this.getOwnerComponent().getModel("employeeMasterData");
                let existingEmployeeData = oEmployeeMasterModel.getData();

                oTravelMasterData.saveAs = "F";
                // Set the association between the travel record and the existing employee
                oTravelMasterData.employee = {
                    "empID": existingEmployeeData[0].empID
                }
                oTravelMasterModel.setData(oTravelMasterData);

                let sPath = "/travelMaster"; 
                let oBindList = oModel.bindList(sPath);
                let oContext = oBindList.create(oTravelMasterData);

                oContext.created().then(function (data) {
                    console.log("data saved successfully", data);
                }).catch(function (error) {
                    console.log("something wrong", error);
                });
            },
            saveAsDraft: function () {

            }

        });
    });
