import BaseResult from "./baseResult.js";

export default class ErrorResult extends BaseResult {
  constructor(message, data) {
    super(message, data);
  }
}
