
import EmployeeService from "./services/employeeService.js";
import EmployeeValidator from "./crossCuttingConcerns/validation/employeeValidator.js";
import Employee from "./models/employee.js";

let employee1 = new Employee(1,"eren","bozkurt",23,"sivas",112);
let employeeService = new EmployeeService(new EmployeeValidator());

employeeService.add(employee1);
console.log(employeeService.getAll());