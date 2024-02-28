/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/Device",
    "sembcorp/com/travelexpense/model/models",
    "sap/ui/model/odata/v4/ODataModel"
],
    function (UIComponent, Device, models, ODataModel) {
        "use strict";

        return UIComponent.extend("sembcorp.com.travelexpense.Component", {
            metadata: {
                manifest: "json"
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                // Initialize OData v4 model
                // var oModel = new ODataModel({
                //     serviceUrl: "/odata/v4/travel-expense-dbdb/"
                // });
                // this.setModel(oModel);

                // console.log(oModel);


                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);

                // enable routing
                this.getRouter().initialize();

                // set the device model
                this.setModel(models.createDeviceModel(), "device");
            }
        });
    }
);