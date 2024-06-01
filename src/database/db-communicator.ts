import { IDBAdapter } from "./idb";
import { MySQLAdapter } from "./adapters/mysql.adapter";
import { PostgreSQLAdapter } from "./adapters/postgresql.adapter";
import { IndexedDBAdapter } from "./adapters/indexed-db.adapter";

export class DBCommunicator implements IDBAdapter {
  db: number = 1 | 2 | 3;
  constructor(db) {
    this.db = db;
  }

  findAll(where: object): void {
    switch (this.db) {
      case 1:
        const mysql = new MySQLAdapter();
        mysql.findAll({});
        break;
      case 2:
        const postgresql = new PostgreSQLAdapter();
        postgresql.findAll({});
        break;
      case 3:
        const indexeddb = new IndexedDBAdapter();
        indexeddb.findAll({});
    }
  }
  findOne(where: object): Promise<object> {
    throw new Error("Method not implemented.");
  }
  insert(data: object): Promise<object> {
    throw new Error("Method not implemented.");
  }
  update(data: object, where?: object | undefined): Promise<object> {
    throw new Error("Method not implemented.");
  }
  delete(where: object): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
}
