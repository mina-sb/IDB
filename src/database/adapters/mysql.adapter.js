"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MySQLAdapter = void 0;
var MySQLAdapter = /** @class */ (function () {
    function MySQLAdapter() {
    }
    MySQLAdapter.prototype.findAll = function (where) {
        console.log("mysql select");
    };
    MySQLAdapter.prototype.findOne = function (where) {
        throw new Error("Method not implemented.");
    };
    MySQLAdapter.prototype.insert = function (data) {
        throw new Error("Method not implemented.");
    };
    MySQLAdapter.prototype.update = function (data, where) {
        throw new Error("Method not implemented.");
    };
    MySQLAdapter.prototype.delete = function (where) {
        throw new Error("Method not implemented.");
    };
    return MySQLAdapter;
}());
exports.MySQLAdapter = MySQLAdapter;
