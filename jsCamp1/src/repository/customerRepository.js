import { users } from "../data/data.js";
export default class CustomerRepository {
  constructor() {
    this.customer = users.filter((user) => user.type === "customer");
  }

  add(user) {
    this.customer.push(user);
  }
  delete(user) {
    let deleteUser = this.customer.findIndex((usr) => usr.id === user.id);
    this.customer.splice(deleteUser, 1);
  }
  getAll() {
    return this.customer;
  }
  getById(id) {
    return this.customer.find((user) => user.id === id);
  }
}
