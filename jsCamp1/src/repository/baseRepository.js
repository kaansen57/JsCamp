import { users } from "../data/data.js";
export default class BaseRepository {
  constructor() {
    this.users = users.filter((user) => user.type === "user");
  }

  add(user) {
    this.users.push(user);
  }
  delete(user) {
    let deleteUser = this.users.findIndex((usr) => usr.id === user.id);
    this.users.splice(deleteUser,1);
  }
  getAll() {
    return this.users;
  }
  getById(id) {
    return this.users.find((user) => user.id === id);
  }
}
