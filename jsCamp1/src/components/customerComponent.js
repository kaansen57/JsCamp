import CustomerService from "./services/customerService.js";
import Customer from "./models/customer.js";
import CustomerValidator from "./crossCuttingConcerns/validation/customerValidator.js";


let customer  = new Customer(1,"kaan","şen",24,"sinop","customer","32132132")
let customer2  = new Customer(2,"kaan","şen",24,"sinop","customer","32132132")


let customerService = new CustomerService(new CustomerValidator());
customerService.add(customer)
customerService.add(customer2)
console.log(customerService.getAll());
console.log(customerService.getById(2));
