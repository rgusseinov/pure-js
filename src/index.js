import Validator from "./components/Validator";


const v = new Validator();
const schema = v.object();

// Позволяет описывать валидацию для свойств объекта
/* schema.shape({
  name: v.string().required(),
  age: v.number().positive(),
}); */

// schema.shape({a: 10});
schema.myShape({
  name: v.string().required(),
  age: v.number().positive(),
});

schema.isValid({ name: 'kolya', age: 100 }); // true

// console.log(schema);

/*
console.log(schema.isValid({ name: 'kolya', age: 100 })); // true
console.log(schema.isValid({ name: 'maya', age: null })); // true
console.log(schema.isValid({ name: '', age: null })); // false
console.log(schema.isValid({ name: 'ada', age: -5 })); // false
 */

/* const schema = v.array();
console.log(schema.isValid(null)); // true

schema.required();
schema.sizeOf(2);
console.log(schema.isValid([1, 2, 3]));
 */


// const v = new Validator();
/* const schema = v.string();

console.log(schema.isValid(123)); // false
console.log(schema.isValid(" ")); // true
console.log(schema.isValid("Almaty")); // true
console.log(schema.isValid("")); // true
console.log(schema.isValid(null)); // true
console.log(schema.isValid(undefined)); // true

console.log("---Required----");
schema.required();
console.log(schema.isValid("what does the fox say")); // true
console.log(schema.isValid("hexlet")); // true
console.log(schema.isValid(null)); // false
console.log(schema.isValid("")); // false

console.log("---Min length----");
schema.minLength(5);
console.log(schema.isValid("what does the fox say")); // true
console.log(schema.isValid("whay")); // false

console.log("---Contains----");
console.log(schema.contains("what").isValid("what does the fox say")); // true;
console.log(schema.contains("whatthe").isValid("what does the fox say")); // false;
console.log(schema.isValid("what does the fox say")); // false */

/* console.log("---Number----");
const schema2 = v.number();
console.log(schema2.isValid(123)); // true
console.log(schema2.isValid("hello")); // false
console.log(schema2.isValid(null)); // true

console.log("---required----");
schema2.required();
console.log(schema2.isValid(null)); // false
console.log(schema2.isValid(7)); // true

console.log("---positive----");
console.log(schema2.positive().isValid(112)); // true

console.log("---range----");
schema2.range(-5, 5);
console.log(schema2.isValid(6));
 */
// console.log(schema2);

