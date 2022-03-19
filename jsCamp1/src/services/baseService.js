export default class BaseService {
  constructor(userRepository, userValidation, logger) {
    this.userValidation = userValidation;
    this.logger = logger;
    this.userRepository = userRepository;
    this.errors = [];
  }

  add(user) {
    if (this.userValidation.emptyFieldsCheck(user)) {
      this.userRepository.add(user);
      this.logger.log(user);
    } else {
      this.errors = this.userValidation.getErrorList();
      console.log(this.errors);
    }
  }
  delete(user) {
    this.userRepository.delete(user);
  }
  getAll() {
    return this.userRepository.getAll();
  }

  getById(id) {
    return this.userRepository.getById(id);
  }
}
