"use strict";
var exports = {};
Object.defineProperty(exports, "__esModule", { value: true });
var db_communicator_1 = require("./database/db-communicator");
var dbCommunicator = new db_communicator_1.DBCommunicator(3);
dbCommunicator.findAll({});
