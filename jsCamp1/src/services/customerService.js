
import BaseService from "./baseService.js";
export default class CustomerService extends BaseService {
  constructor(userRepository, userValidation, logger) {
    super(userRepository, userValidation, logger);
  }
}
