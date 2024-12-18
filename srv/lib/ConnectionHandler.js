const cds = require('@sap/cds')

async function ConnectBackend(req) {
    const backendconnect = await cds.connect.to('GWSAMPLE')
    const tx = backendconnect.tx(req);
    return tx.run(req.query)

}

module.exports = {
    ConnectBackend
}