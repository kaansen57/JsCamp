import BaseValidator from "./baseValidator.js";


export default class CustomerValidator extends BaseValidator {
  constructor() {
    super();
    this.requiredFields = this.requiredFields.concat('creditCardNumber');
  }
}
