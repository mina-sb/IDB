import { DBCommunicator } from "./database/db-communicator";

const dbCommunicator = new DBCommunicator(3);
dbCommunicator.findAll({});
