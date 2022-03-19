import ResultMessages from "../core/constants/resultMessages.js";
import ErrorResult from "../core/utilities/results/errorResult.js";
import SuccessResult from "../core/utilities/results/successResult.js";
export default class BaseService {
  constructor(userRepository, userValidation, logger) {
    this.userValidation = userValidation;
    this.logger = logger;
    this.userRepository = userRepository;
  }

  add(user) {
    if (this.userValidation.emptyFieldsCheck(user)) {
      this.userRepository.add(user);
      this.logger.log(user);
      return new SuccessResult(ResultMessages.userAdded,user);
    } else {
      return new ErrorResult(ResultMessages.userAddError,this.userValidation.getErrorList());
    }
  }
  delete(user) {
    this.userRepository.delete(user);
    return new SuccessResult(ResultMessages.userDelete,user);
  }
  update(user){
    this.userRepository.update(user);
    return new SuccessResult(ResultMessages.userUpdate,user);
  }
  getAll() {
    return new SuccessResult(ResultMessages.userGetAll,this.userRepository.getAll());
  }

  getById(id) {
    return new SuccessResult(ResultMessages.userGetById(id),this.userRepository.getById(id));
  }
}
