import BaseValidator from "./BaseValidator";

export default class ShapeValidator extends BaseValidator {
  constructor() {
    super();
    this.rules = [(value) => typeof value === "object"];
  }

  myShape(data){
    return this.shape = data; 
  }

  isValid(obj){
    Object.entries(obj).every((item) => {
      console.log(item);
    });
  };

}


/* schema.shape({
  name: v.string().required(),
  age: v.number().positive(),
});

schema.isValid({ name: 'kolya', age: 100 }); // true
schema.isValid({ name: 'maya', age: null }); // true
schema.isValid({ name: '', age: null }); // false
schema.isValid({ name: 'ada', age: -5 }); // false */