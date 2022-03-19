import BaseValidator from "./baseValidator.js";

export default class CustomerValidator extends BaseValidator {
  getCardNumber(user) {
    if (user.creditCardNumber) return true;
    else {
      return false;
    }
  }
}
