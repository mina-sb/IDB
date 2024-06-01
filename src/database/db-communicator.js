"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DBCommunicator = void 0;
var mysql_adapter_1 = require("./adapters/mysql.adapter");
var postgresql_adapter_1 = require("./adapters/postgresql.adapter");
var indexed_db_adapter_1 = require("./adapters/indexed-db.adapter");
var DBCommunicator = /** @class */ (function () {
    function DBCommunicator(db) {
        this.db = 1 | 2 | 3;
        this.db = db;
    }
    DBCommunicator.prototype.findAll = function (where) {
        switch (this.db) {
            case 1:
                var mysql = new mysql_adapter_1.MySQLAdapter();
                mysql.findAll({});
                break;
            case 2:
                var postgresql = new postgresql_adapter_1.PostgreSQLAdapter();
                postgresql.findAll({});
                break;
            case 3:
                var indexeddb = new indexed_db_adapter_1.IndexedDBAdapter();
                indexeddb.findAll({});
        }
    };
    DBCommunicator.prototype.findOne = function (where) {
        throw new Error("Method not implemented.");
    };
    DBCommunicator.prototype.insert = function (data) {
        throw new Error("Method not implemented.");
    };
    DBCommunicator.prototype.update = function (data, where) {
        throw new Error("Method not implemented.");
    };
    DBCommunicator.prototype.delete = function (where) {
        throw new Error("Method not implemented.");
    };
    return DBCommunicator;
}());
exports.DBCommunicator = DBCommunicator;
