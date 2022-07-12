import BaseValidator from "./BaseValidator";

export default class ShapeValidator extends BaseValidator {
  constructor() {
    super();
    this.rules = [(value) => typeof value === "object"];
  }

  myShape(data) {
    return (this.shape = data);
  }

  isValid(obj) {
    return (
      Object.keys(obj).every((key) => this.shape[key].isValid(obj[key])) &&
      Object.keys(obj).length === Object.keys(this.shape).length
    );
  }
}

/* schema.shape({
  name: v.string().required(),
  age: v.number().positive(),
});

schema.isValid({ name: 'kolya', age: 100 }); // true
schema.isValid({ name: 'maya', age: null }); // true
schema.isValid({ name: '', age: null }); // false
schema.isValid({ name: 'ada', age: -5 }); // false */
