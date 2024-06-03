export interface IDBAdapter {
  findAll(where: object): void;
  findOne(where: object): Promise<object>;
  insert(data: object): void;
  update(data: object, where?: object): Promise<object>;
  delete(where: object): Promise<boolean>;
}
