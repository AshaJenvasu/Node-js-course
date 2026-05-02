const { format } = require("date-fns");
//require mean import in the CommonJS
const { v4: uuid } = require("uuid");

console.log(format(new Date(), "yyyyMMdd\tHH:mm:ss"));

console.log(uuid());

console.log();
