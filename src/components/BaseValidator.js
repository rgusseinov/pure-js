export default class BaseValidator {
  constructor(assignValidators = {}) {
    this.rules = [];
    this.shape = {};
    this.assignValidators = assignValidators;
  }

  test(fn, ...args) {
    // console.log(`fn`, fn);
    return this.addRule((value) => this.assignValidators[fn](value, ...args));
  }

  addAssignValidators(ruleName, fn) {
    this.assignValidators[ruleName] = fn;
  }

  shape(data) {
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
