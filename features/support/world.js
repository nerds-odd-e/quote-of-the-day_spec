const { QOTDWorld } = require("./QOTDWorld");
const { setWorldConstructor } = require('cucumber')

setWorldConstructor(QOTDWorld)
