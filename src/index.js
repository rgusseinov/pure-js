export default class Validator {
  constructor(type) {
    this.validTypes = type;
    this.options = { required: false, contains: null, minLength: null };
    this.rules = [];
  }

  string() {
    return new Validator("string");
  }

  required() {
    this.options.required = true;
  }

  minLength(length) {
    this.options.minLength = length;
  }

  isValid(value) {
    if (this.options.required) {
      if (!value) return false;

      if (this.options.contains) return value.includes(this.options.contains);
      if (this.options.minLength) return value.length >= this.options.minLength;

      return Boolean(value);
    } else {
      if (this.options.contains) {
        if (!value) return false;
        return value.includes(this.options.contains);
      }
      if (Number.isInteger(value)) return false;
      if (this.options.minLength) return value.length >= this.options.minLength;
    }
    return value != " ";
  }
  contains(value) {
    this.options.contains = value;
    return this;
  }
}
const v = new Validator();
const schema = v.string();

console.log(schema.isValid(123));
console.log(schema.isValid("Almaty")); // true
console.log(schema.isValid("")); // true
console.log(schema.isValid(null)); // true
console.log(schema.isValid(undefined)); // true

console.log("---Min length----");
schema.minLength(5);
console.log(schema.isValid("Ruslan")); // true

schema.required();

console.log("---Required----");
console.log(schema.isValid("what does the fox say")); // true
console.log(schema.isValid("hexlet")); // true
console.log(schema.isValid(null)); // false
console.log(schema.isValid("")); // false

console.log("---Min length----");
schema.minLength(5);
console.log(schema.isValid("what does the fox say")); // true

console.log("---Contains----");
console.log(schema.contains("what").isValid("what does the fox say")); // true;
console.log(schema.contains("whatthe").isValid("what does the fox say")); // false;
console.log(schema.isValid("what does the fox say")); // false

// console.log(Number.isInteger("122"));
