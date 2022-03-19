import BaseUserService from "./baseService.js";

export default class EmployeeService extends BaseUserService {
  constructor(userRepository, userValidation, logger) {
    super(userRepository, userValidation, logger);
  }
}
