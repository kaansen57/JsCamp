import BaseLogger from "./baseLogger.js";

export default class ElasticLogger extends BaseLogger {
    log(data) {
      console.log("Elastic Logger ", data);

    }
  }
  