import Validator from "./components/Validator";
const v = new Validator();

const fn = (value, start) => value.startsWith(start);
// Метод добавления новых валидаторов
// addValidator(type, name, fn)
v.addValidator("string", "startWith", fn);

// Новые валидаторы вызываются через метод test
const schema = v.string().test("startWith", "H");
console.log(schema.isValid("exlet")); // false
console.log(schema.isValid("Hexlet")); // true

/* const schema = v.object();

schema.myShape({
  name: v.string().required(),
  age: v.number().positive(),
});

console.log(schema.isValid({ name: "kolya", age: 100 })); // true
console.log(schema.isValid({ name: "maya", age: null })); // true
console.log(schema.isValid({ name: "", age: null })); // false
console.log(schema.isValid({ name: "ada", age: -5 })); // false
console.log(schema.isValid({ name: "ada" })); // false */

/* 
import * as yup from "yup";

let schema = yup.object().shape({
  name: yup.string().required(),
  age: yup.number().positive(),
});

// schema.isValid({ name: "jimmy", age: 100 }).then((valid) => console.log(valid)); // true

schema
  .isValid({ name: "jimmy", age: null })
  .then((valid) => console.log(valid)); // true
 */
