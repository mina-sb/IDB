import { IDBAdapter } from "../idb";

export class MySQLAdapter implements IDBAdapter {
  findAll(where: object): void {
    console.log("mysql select");
  }
  findOne(where: object): Promise<object> {
    throw new Error("Method not implemented.");
  }
  insert(data: object): void {
    throw new Error("Method not implemented.");
  }
  update(data: object, where?: object | undefined): Promise<object> {
    throw new Error("Method not implemented.");
  }
  delete(where: object): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
}
