class Person{
    constructor(age){
        this.age = age;
    }

    PrintAge(){
        console.log(this.age);
        return this.age;
    }
} 
class user extends Person{
    constructor(age,name,address){
        super(age); 
        this.name = name;
        this.address = address
    } 
    PrintDetails(){
        console.log(super.PrintAge(),this.name, this.address);
    }
}  
const p1 = new Person(20);
const u1 = new user(21,"revanth","Hyderabad");
p1.PrintAge();
u1.PrintDetails();
