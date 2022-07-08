export default class Validator {
  constructor(type) {
    this.stringValidTypes = ["", null, undefined];
    this.validTypes = { string: this.stringValidTypes };
    this.activeTypes = this.validTypes[type];
    this.options = {required: false, contains: null, minLength: null};
  }

  string() {
    return new Validator("string");
  }

  required() {
    this.options.required = true;
  }

  isValid(value = "") {
    if (this.options.required) {
      if (!value) return false;
      if (this.options.contains) {
        return value.includes(this.options.contains);
      }
     
      return Boolean(value);
    } else {
      if (this.options.contains){
        if (!value) return false;
        return value.includes(this.options.contains);
      }
    }
    return (this.activeTypes.includes(value) || !value != undefined);
  }
  contains(value) {
    this.options.contains = value;
    return this;
  }
  minLength(value){
    if (!value) return false;
    this.options.minLength = value.length;
    return this;
  }
}

const v = new Validator();
const schema = v.string();
console.log(schema.minLength(10)); // true


/* console.log(schema.isValid("fghfgh")); // true
console.log(schema.isValid()); // true
console.log(schema.isValid(null)); // true
console.log(schema.isValid(undefined)); // true


schema.required();

console.log("---Required----");
console.log(schema.isValid("what does the fox say")); // true
console.log(schema.isValid("hexlet")); // true
console.log(schema.isValid(null)); // false
console.log(schema.isValid("")); // false


console.log("---Contains----");
console.log(schema.contains("what").isValid("what does the fox say")); // true;
console.log(schema.contains('whatthe').isValid('what does the fox say')); // false;
console.log(schema.isValid("what does the fox say")); // false */
 

