 class DataBaseError {
    constructor(message) {
        this.type = "Db Error";
        this.message = message;
    }
  }

module.exports = DataBaseError