import MongoLogger from '../crossCuttingConcerns/logger/mongoLogger.js';
import CustomerValidator from '../crossCuttingConcerns/validation/customerValidator.js';
import CustomerRepository from '../repository/customerRepository.js';
import CustomerService from '../services/customerService.js';
import Customer from './../models/customer.js';

let customer  = new Customer(1,"kaan","şen",24,"sinop","32132132")
let customer2  = new Customer(2,"kaan",null,"24","sinop") // hatalı veri
let customerService = new CustomerService(new CustomerRepository(),new CustomerValidator(), new MongoLogger());

// console.log(customerService.add(customer));
console.log(customerService.add(customer2));
console.log(customerService.getAll());
console.log(customerService.getById());//kullanıcı bulunamadı hatası verir
console.log(customerService.getById(1));

// let customerService = new CustomerService(new CustomerValidator());
// customerService.add(customer)
// customerService.add(customer2)
// console.log(customerService.getAll());
// console.log(customerService.getById(2));
