const cds = require("@sap/cds")
const {ConnectBackend} = require('./lib/ConnectionHandler')
module.exports = cds.service.impl(function(){
    const {ProductSet} = this.entities;
    this.on('READ', ProductSet, ConnectBackend)
})