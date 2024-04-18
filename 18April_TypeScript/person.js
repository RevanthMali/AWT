"use strict";
class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    setName(name) {
        this.name = name;
    }
    setAge(age) {
        this.age = age;
    }
    setGender(gender) {
        this.gender = gender;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
    getGender() {
        return this.gender;
    }
}
const p = new Person("revanth", 21, "male");
p.setName("raman");
p.setAge(21);
p.setGender("male");
console.log(`name: ${p.getName()}`);
console.log(`age: ${p.getAge()}`);
console.log(`gender: ${p.getGender()}`);
