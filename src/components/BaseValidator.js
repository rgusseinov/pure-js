export default class BaseValidator {
  constructor() {
    this.rules = [];
    this.shape = {};
  }
  shape(data){
    this.shape = data;
    return this;
  }
  addRule(rule) {
    this.rules.push(rule);
    return this;
  }
  isValid(value) {
    return this.rules.every((rule) => rule(value));
  }
}
