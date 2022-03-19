import DataError from "../../core/utilities/results/dataError.js";

export default class BaseValidator {
  constructor() {
    this.errors = [];
    this.requiredFields = ["id", "firstName", "lastName", "age", "city"];
  }

  emptyFieldsCheck(user) {
    // this.getId(user);
    // this.getFirstName(user);
    // this.getLastName(user);
    // this.getAge(user);
    // this.getCity(user);
    this.requiredFieldsCheck(user);
    return this.errors.length > 0 ? false : true;
  }
  requiredFieldsCheck(user) {
    this.requiredFields.forEach((field) => {
      if (!user[field]){
        this.errors.push(
          new DataError(`Validation problem. ${field} is required`, user)
        );
      }
    });
    return this.errors.length === 0;
  }

  getId(user) {
    if (user["id"]) {
      return true;
    }
    this.errors.push(new DataError("user id is empty", user));
    return false;
  }
  getFirstName(user) {
    if (user.firstName) {
      return true;
    }
    this.errors.push(new DataError("user firstname is empty", user));
    return false;
  }

  getLastName(user) {
    if (user.lastName) {
      return true;
    }
    this.errors.push(new DataError("user lastname is empty", user));
    return false;
  }

  getAge(user) {
    if (user.age) {
      return true;
    }
    this.errors.push(new DataError("user age is empty", user));
    return false;
  }

  getCity(user) {
    if (user.city) {
      return true;
    }
    this.errors.push(new DataError("user city is empty", user));
    return false;
  }

  // getType(user) {
  //   if (user.type) {
  //     if (user.type == "customer") {
  //       if (user.creditCardNumber) return true;
  //       else {
  //         this.errors.push(new DataError("credit card number empty", user));
  //         return false;
  //       }
  //     } else if (user.type == "employee") {
  //       if (user.salary) return true;
  //       else {
  //         this.errors.push(new DataError("salary empty", user));
  //         return false;
  //       }
  //     }
  //     return true;
  //   }
  //   this.errors.push(new DataError("user type is empty", user));
  //   return false;
  // }

  getErrorList() {
    return this.errors;
  }
}
