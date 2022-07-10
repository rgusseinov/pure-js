import BaseValidator from "./BaseValidator";

export default class NumberValidator extends BaseValidator {
  constructor() {
    super();
    this.rules = [(value) => typeof value === "number"];
  }
  positive() {
    return this.addRule((value) => value > 0);
  }
}
