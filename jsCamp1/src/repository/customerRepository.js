import { users } from "../data/data.js";
export default class CustomerRepository {
  constructor() {
    this.customers = users.filter((user) => user.type === "customer");
  }
  add(user) {
    this.customers.push(user);
  }
  delete(user) {
    let deleteUser = this.customers.findIndex((usr) => usr.id === user.id);
    this.customers.splice(deleteUser, 1);
  }
  update(user) {
    const updateUser = this.customers.findIndex((usr) => usr.id === user.id);
    this.customers[updateUser] = user;
  }
  getAll() {
    return this.customers;
  }
  getById(id) {
    return this.customers.find((user) => user.id === id);
  }
}
