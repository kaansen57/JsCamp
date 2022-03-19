import ErrorResult from "../core/utilities/results/errorResult.js";
import SuccessResult from "../core/utilities/results/successResult.js";
import ResultMessages from '../core/constants/resultMessages.js';
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
    } 
    else {
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
    return this.userRepository.getAll().length !== 0 
    ? new SuccessResult(ResultMessages.userGetAll,this.userRepository.getAll())
    : new ErrorResult(ResultMessages.userGetAllError,[])
  }

  getById(id) {
    return this.userRepository.getById(id) 
    ? new SuccessResult(ResultMessages.userGetById(id),this.userRepository.getById(id)) 
    : new ErrorResult(ResultMessages.userGetByIdError)
  }

  getAllSorted(sortingType,sortingBy){
    return this.userRepository.getAllSorted(sortingType,sortingBy);
  }
}
