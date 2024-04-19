sap.ui.define([
    "sembcorp/com/travelexpense/controller/BaseController",
    "sap/m/MessageBox"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (BaseController, MessageBox) {
        "use strict";

        return BaseController.extend("sembcorp.com.travelexpense.controller.components.CreateTravelRequest", {
            onInit: function () {
                let oElement = this.byId("idIconTabBar");
                console.log(oElement);

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

                let oTravelModel = this.getOwnerComponent().getModel("travelData");
                let oTravelData = oTravelModel.getData();

                console.log(oTravelData);

                tripEdit.setVisible(false);
                tripView.setVisible(true);
                this.toggleButtonSaveAndEdit(false);
            },
            editTrip: function () {
                let tripEdit = this.byId("tripEdit");
                let tripView = this.byId("tripView");

                let oTravelModel = this.getOwnerComponent().getModel("travelData");
                let oTravelData = oTravelModel.getData();

                console.log(oTravelData);

                tripEdit.setVisible(true);
                tripView.setVisible(false);
                this.toggleButtonSaveAndEdit(true);

            },
            toggleButtonSaveAndEdit: function (active) {
                this.byId("editTrip").setVisible(!active);
                this.byId("saveTrip").setVisible(active);
            },
            onComboBoxChange: function (oEvent) {
                let oTravelModel = this.getOwnerComponent().getModel("travelData");
                let oTravelData = oTravelModel.getData();

                let selectedValue = oEvent.getParameters().value;
                let selectedId = oEvent.getParameters().id.split("--")[1];

                if (selectedId === "country") {
                    oTravelData.country = selectedValue;
                } else if (selectedId === "destination") {
                    oTravelData.destination = selectedValue;
                } else if (selectedId === "activity") {
                    oTravelData.activity = selectedValue;
                }

                // set the new data to the model 
                oTravelModel.setData(oTravelData);
            },
            sendForApproval: function (oEvent) {
                let that = this;
                let oModel = this.getOwnerComponent().getModel();
                let oTravelModel = this.getOwnerComponent().getModel("travelData");
                let oTravelData = oTravelModel.getData();
                let oEmployeeMasterModel = this.getOwnerComponent().getModel("employeeMasterData");
                let existingEmployeeData = oEmployeeMasterModel.getData();

                oTravelData.saveAs = "F";
                oTravelData.status = "P";
                // Set the association between the travel record and the existing employee
                oTravelData.employee = {
                    "empID": parseInt(existingEmployeeData.empID)
                }
                oTravelModel.setData(oTravelData);

                let sPath = "/travelMaster";
                let oBindList = oModel.bindList(sPath);
                let oContext = oBindList.create(oTravelData);

                oContext.created().then(function (data) {
                    console.log("data saved successfully", data);

                    // show messageBox 


                }).catch(function (error) {
                    console.log("something wrong", error);
                });
            },
            saveAsDraft: function () {

            }

        });
    });
