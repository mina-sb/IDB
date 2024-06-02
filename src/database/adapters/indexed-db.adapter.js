"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndexedDBAdapter = void 0;
var IndexedDBAdapter = /** @class */ (function () {
    function IndexedDBAdapter() {
    }
    IndexedDBAdapter.prototype.findAll = function (where) {
        var db = null;
        function createDatabase() {
            var request = window.indexedDB.open("MyDatabase", 1);
            request.onerror = function (e) {
                // console.error(`IndexedDB error: ${request.errorCode}`);
            };
            request.onsuccess = function (e) {
                console.info("Successful database connection");
                db = request.result;
                console.log(db);
            };
            request.onupgradeneeded = function (e) {
                console.info("Database created");
                var db = request.result;
            };
        }
        createDatabase();
    };
    IndexedDBAdapter.prototype.findOne = function (where) {
        throw new Error("Method not implemented.");
    };
    IndexedDBAdapter.prototype.insert = function (data) {
        throw new Error("Method not implemented.");
    };
    IndexedDBAdapter.prototype.update = function (data, where) {
        throw new Error("Method not implemented.");
    };
    IndexedDBAdapter.prototype.delete = function (where) {
        throw new Error("Method not implemented.");
    };
    return IndexedDBAdapter;
}());
exports.IndexedDBAdapter = IndexedDBAdapter;
