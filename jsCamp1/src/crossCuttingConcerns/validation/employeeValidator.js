import BaseValidator from "./baseValidator.js";

export default class EmployeeValidator extends BaseValidator {
  constructor() {
    super();
    this.requiredFields = this.requiredFields.concat("salary");
  }
}
