import StringValidator from "./StringValidator";
import NumberValidator from "./NumberValidator";
import ArrayValidator from "./ArrayValidator";
import ShapeValidator from "./ShapeValidator";

export default class Validator {
  constructor() {
    this.assignValidators = {};
  }

  addValidator(type, name, fn) {
    if (!this.assignValidators[type]) {
      this.assignValidators[type] = {};
    }
    this.assignValidators[(type, name)] = fn;
  }

  // v.addValidator('string', 'startWith', fn);

  /*   fn = (value, start) => value.startsWith(start);
  // Метод добавления новых валидаторов
  // addValidator(type, name, fn)
  v.addValidator('string', 'startWith', fn);

  // Новые валидаторы вызываются через метод test
  const schema = v.string().test('startWith', 'H');
  schema.isValid('exlet'); // false
  schema.isValid('Hexlet'); // true
 */
  string() {
    return new StringValidator(this.assignValidators.string);
  }

  number() {
    return new NumberValidator("number");
  }

  array() {
    return new ArrayValidator("array");
  }

  object() {
    return new ShapeValidator("object");
  }
}
