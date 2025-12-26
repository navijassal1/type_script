"use strict";
/**
 * ENUMS
 * An enum is a special "class" that represents a group of constants (unchangeable variables).
 * Enums come in two flavors string and numeric.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var status;
(function (status) {
    status[status["SUCCESS"] = 200] = "SUCCESS";
    status[status["NOT_FOUND"] = 404] = "NOT_FOUND";
    status[status["BAD_REQUEST"] = 400] = "BAD_REQUEST";
})(status || (status = {}));
console.log('SUCCESS ', status.SUCCESS);
console.log('NOT_FOUND ', status.NOT_FOUND);
console.log('BAD_REQUEST ', status.BAD_REQUEST);
var cities;
(function (cities) {
    cities["PUNJAB"] = "PUNJAB";
    cities["DELHI"] = "DELHI";
    cities["CHANDIGARH"] = "CHANDIGARH";
})(cities || (cities = {}));
console.log('cities ', cities.PUNJAB);
console.log('cities ', cities.DELHI);
console.log('cities ', cities.CHANDIGARH);
