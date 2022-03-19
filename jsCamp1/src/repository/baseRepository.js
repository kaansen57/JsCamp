import { users } from "../data/data.js";
export default class BaseRepository {
  constructor() {
    this.users = users.filter((user) => user.type === "user");
  }

  add(user) {
    this.users.push(user);
  }
  delete(user) {
    const deleteUser = this.users.findIndex((usr) => usr.id === user.id);
    this.users.splice(deleteUser, 1);
  }
  update(user) {
    const updateUser = this.users.findIndex((usr) => usr.id === user.id);
    this.users[updateUser] = user;
  }
  getAll() {
    return this.users;
  }
  getById(id) {
    return this.users.find((user) => user.id === id);
  }
}
