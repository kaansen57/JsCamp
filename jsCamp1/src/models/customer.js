import User from "./user.js";
export default class Customer extends User {
  constructor(id, firstName, lastName, age, city, creditCardNumber) {
    super(id, firstName, lastName, age, city);
    this.creditCardNumber = creditCardNumber;
  }
}
