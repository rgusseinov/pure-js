// Algoritms 

// 1. Stack

function Stack(){

  this.count = 0;
  this.storage = {};

  this.push = function(value){
    this.storage[this.count] = value
    this.count ++;
  }

  this.pop = function(){
    if (this.count === 0) return;
    this.count --;
    const result = this.storage[this.count]
    delete this.storage[this.count]
    return result
  }

  this.peek = function(){
    return this.storage[this.count - 1]
  }

  this.size = function(){
    return this.count
  } 

}

const stack = new Stack();

stack.push(5);
stack.push(2);
stack.push(10);
console.log(stack)



console.log(stack.peek())
