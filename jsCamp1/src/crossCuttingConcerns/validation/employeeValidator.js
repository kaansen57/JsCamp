import BaseValidator from "./baseValidator.js";

export default class EmployeeValidator extends BaseValidator {
  getSalary(user) {
    if (user.salary) return true;
    else {
      console.log("hata");
      return false;
    }
  }
}
