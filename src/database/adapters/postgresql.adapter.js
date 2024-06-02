"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostgreSQLAdapter = void 0;
var PostgreSQLAdapter = /** @class */ (function () {
    function PostgreSQLAdapter() {
    }
    PostgreSQLAdapter.prototype.findAll = function (where) {
        console.log("postgresql select");
    };
    PostgreSQLAdapter.prototype.findOne = function (where) {
        throw new Error("Method not implemented.");
    };
    PostgreSQLAdapter.prototype.insert = function (data) {
        throw new Error("Method not implemented.");
    };
    PostgreSQLAdapter.prototype.update = function (data, where) {
        throw new Error("Method not implemented.");
    };
    PostgreSQLAdapter.prototype.delete = function (where) {
        throw new Error("Method not implemented.");
    };
    return PostgreSQLAdapter;
}());
exports.PostgreSQLAdapter = PostgreSQLAdapter;
