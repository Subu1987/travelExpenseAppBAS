//travelExpenseDB - db - service.js

const cds = require('@sap/cds');

module.exports = cds.service.impl(async (srv) => {
    const { travelMaster } = srv.entities;

    srv.before('CREATE', 'travelMaster', async (req) => {
        // Optional: manipulate or validate request data here
    });

    srv.after('CREATE', 'travelMaster', async (data, req) => {
        // Assuming 'data' contains the inserted record
        // Modify or enrich 'data' as needed before sending response
        // return data; // Ensure the modified/enriched data is returned
    });



});

