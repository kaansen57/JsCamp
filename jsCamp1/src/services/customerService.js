import BaseUserService from "./baseUserService.js";

export default class CustomerService extends BaseUserService {
  constructor(userValidation) {
    super(userValidation);
    this.customers = [];

  }

  add(customer) {
    if (this.userValidation.checkEmptyFields(customer)) {
      console.log(customer.firstName + " eklendi");
      this.customers.push(customer);
    }else{
        console.log("hata");
    }
  }
  getById(id) {
      return this.customers.find(customer => customer.id === id);
  }

  getAll() {
    return this.customers;
  }
}
