
// class Person{
//     // default constructor
//     constructor(){
//         this.name = "Revanth";
//     }
//     PrintName(){
//         console.log(this.name);
//     }
// } 
// const person = new Person();
// person.PrintName();  

class Person{
    constructor(name,age) {
        this.name = name;
        this.age = age;
    } 
    printName(){
        console.log(this.age);
    }
} 
const p1 = new Person('revanth',20);
p1.printName()