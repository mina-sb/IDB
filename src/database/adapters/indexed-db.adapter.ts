import { IDBAdapter } from "../idb";

export class IndexedDBAdapter implements IDBAdapter {
  findAll(where: object): void {
    let db: IDBDatabase | null = null;
    function createDatabase(): void {
      const request: IDBOpenDBRequest = window.indexedDB.open("MyDatabase", 1);

      request.onerror = (e: Event) => {
        // console.error(`IndexedDB error: ${request.errorCode}`);
      };

      request.onsuccess = (e) => {
        console.info("Successful database connection");
        db = request.result;
        console.log(db);
      };

      request.onupgradeneeded = (e) => {
        console.info("Database created");
        const db = request.result;
      };
    }
    createDatabase();
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
