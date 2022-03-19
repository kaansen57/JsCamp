import ElasticLogger from "../crossCuttingConcerns/logger/elasticLogger.js";
import MongoLogger from "../crossCuttingConcerns/logger/mongoLogger.js";
import BaseValidator from "../crossCuttingConcerns/validation/baseValidator.js";
import User from "../models/user.js";
import BaseRepository from "../repository/baseRepository.js";
import BaseService from "../services/baseService.js";
console.log("******* User *********");

let user = new User(9, "Ahmet", "Özcan", "20");
let user2 = new User(10, "Ender", "Özcan", 30, "Sinop");

let baseService = new BaseService(new BaseRepository(),new BaseValidator(),new ElasticLogger());
console.log(baseService.add(user2));
console.log(baseService.getAll());
console.log(baseService.getById(7));

user2 = new User(10, "Önder", "Özcan", 30, "Sinop");
console.log(baseService.update(user2));
console.log(baseService.getAllSorted("asc","age"));
// console.log(baseService.getAllSorted("asc","firstName"));
