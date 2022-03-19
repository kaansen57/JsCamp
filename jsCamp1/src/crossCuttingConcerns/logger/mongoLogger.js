import BaseLogger from "./baseLogger.js";

export default class MongoLogger extends BaseLogger {
    log(data) {
      console.log(`Mongo Logger ${data}`);
    }
  }
  