export class LocalStorage {
  constructor(storage) {
    this.storage = storage;
  }

  get(key) {
    return JSON.parse(this.storage.getItem(key));
  }

  save(key, value) {
    this.storage.setItem(key, JSON.stringify(value));
  }
}
