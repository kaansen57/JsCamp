import ResultMessages from "../../core/constants/resultMessages.js";
import ErrorResult from "../../core/utilities/results/errorResult.js";

export default class BaseValidator {
  constructor() {
    this.errors = [];
    this.requiredFields = ["id", "firstName", "lastName", "age", "city"];
  }
  emptyFieldsCheck(user) {
    this.ageIsNumberCheck(user);
    this.requiredFieldsCheck(user);
    return this.errors.length === 0;
  }
  requiredFieldsCheck(user) {
    this.requiredFields.forEach((field) => {
      if (!user[field]) {
        this.errors.push(
          new ErrorResult(ResultMessages.fieldRequiredError(field), user)
        );
      }
    });
    return this.errors.length === 0;
  }

  ageIsNumberCheck(user) {
    if (Number.isInteger(user.age)) {
      return true;
    }
    this.errors.push(new ErrorResult(ResultMessages.ageNaNError, user));
    return false;
  }

  getErrorList() {
    return this.errors;
  }

  // getId(user) {
  //   if (user["id"]) {
  //     return true;
  //   }
  //   this.errors.push(new DataError("user id is empty", user));
  //   return false;
  // }
  // getFirstName(user) {
  //   if (user.firstName) {
  //     return true;
  //   }
  //   this.errors.push(new DataError("user firstname is empty", user));
  //   return false;
  // }

  // getLastName(user) {
  //   if (user.lastName) {
  //     return true;
  //   }
  //   this.errors.push(new DataError("user lastname is empty", user));
  //   return false;
  // }
  // getCity(user) {
  //   if (user.city) {
  //     return true;
  //   }
  //   this.errors.push(new DataError("user city is empty", user));
  //   return false;
  // }
}
