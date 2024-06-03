import { IDBAdapter } from "../idb";

export class IndexedDBAdapter implements IDBAdapter {
  private db: IDBDatabase | null = null;

  private async openDatabase(): Promise<void> {
    const databasePromise = new Promise<IDBDatabase>((resolve, reject) => {
      const request: IDBOpenDBRequest = window.indexedDB.open("MyDatabase", 1);
      request.onerror = (e) => {
        reject(e);
      };
      request.onsuccess = (e) => {
        this.db = request.result;
        resolve(this.db);
      };

    });
    this.db = await databasePromise;
  }
  async insert(data: object): Promise<void> {
    await this.openDatabase();
  }
  findAll(where: object): void {}
  findOne(where: object): Promise<object> {
    throw new Error("Method not implemented.");
  }
  update(data: object, where?: object | undefined): Promise<object> {
    throw new Error("Method not implemented.");
  }
  delete(where: object): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
}
