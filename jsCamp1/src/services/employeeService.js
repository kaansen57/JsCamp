import BaseService from "./baseService.js";

export default class EmployeeService extends BaseService {
  constructor(userRepository, userValidation, logger) {
    super(userRepository, userValidation, logger);
  }
}
