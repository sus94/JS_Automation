/* eslint-disable no-mixed-spaces-and-tabs */
/* 2)	Create prototype Animal class with its prototype methods, after that create class (dog, cat, etc.), which inherits Animal class and implement its methods. Create objects of that class with constructors and call class methods with using methods.  */

class Animal {
    constructor(name) {
  	this.name = name;
    }
    sayName() {
  	return this.name;
    }
}


class Dog extends Animal {
    constructor(name, age, color) {
        super(name);
        this.age = age;
        this.color = color;
    }
    talk() {
  	console.log(`${this.name } says Woof`);
    }
}

class Cat extends Animal {
    talk() {
  	console.log(`${this.name } says mew`);
    }
}


const dog1 = new Dog('Bobby', 3, 'white');

const cat1 = new Cat('Kitty', 4, 'black');

console.log(dog1);
console.log(cat1);
