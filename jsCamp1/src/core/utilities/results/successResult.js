import BaseResult from "./baseResult.js";

export default class SuccessResult extends BaseResult {
  constructor(message, data) {
    super(message, data);
  }
}
