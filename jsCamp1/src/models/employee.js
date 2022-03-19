import User from './user.js';
export default class Employee extends User{
    constructor(id,firstName,lastName,age,city,salary){
        super(id,firstName,lastName,age,city);
        this.salary = salary;
    }
}