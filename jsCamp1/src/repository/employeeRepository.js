import { users } from "../data/data.js";
export default class EmployeeRepository {
  constructor() {
    this.employees = users.filter((user) => user.type === "employee");
  }

  add(user) {
    this.employees.push(user);
  }
  delete(user) {
    let deleteUser = this.employees.findIndex((usr) => usr.id === user.id);
    this.employees.splice(deleteUser, 1);
  }
  getAll() {
    return this.employees;
  }
  getById(id) {
    return this.employees.find((user) => user.id === id);
  }
}
