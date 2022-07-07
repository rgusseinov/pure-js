export default class Validator {
  constructor(type) {
    this.stringValidTypes = ["", null, undefined];
    this.validTypes = { string: this.stringValidTypes };
    this.activeTypes = this.validTypes[type];
    this.isRequired = false;
    this.value = null;
  }

  string() {
    return new Validator("string");
  }

  required() {
    this.isRequired = true;
  }

  isValid(value) {
    if (!this.isRequired) {
      console.log(this.activeTypes.includes(value));
    } else {
      console.log(!this.activeTypes.includes(value) && value.length > 0);
    }
  }
  contains(value) {
    this.value = value;
    return this;
  }
}

const v = new Validator();
const schema = v.string();
schema.isValid(); // true
schema.isValid(null); // true
schema.isValid(undefined); // true

schema.required();

console.log("-------");
schema.isValid("what does the fox say"); // true
schema.isValid("hexlet"); // true
schema.isValid(null); // false
schema.isValid(""); // false

console.log("-------");
console.log(schema.contains("what").isValid("what does the fox say")); // true;
// console.log(schema.contains("what")); // true;
