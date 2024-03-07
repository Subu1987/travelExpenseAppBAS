//travelExpenseDB - db - service.js

// const cds = require('@sap/cds');

// module.exports = cds.service.impl(async (srv) => {
//     const { travelMaster, ExpenseClaimMaster } = srv.entities;
//     srv.on('CREATE', travelMaster, async (req) => {
//         const result = await cds.transaction(req).run(
//             INSERT.into(travelMaster).entries(req.data)
//         );
//         return result;
//     });
// });
