class Person{
    private name:string;
    private age:number;
    private gender:string;
    constructor(name:string,age:number,gender:string){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }  
    setName(name:string):void{
        this.name = name;
    }
    setAge(age:number):void{
        this.age = age;
    }
    setGender(gender:string):void{
        this.gender = gender;
    }
    getName():string { 
        return this.name;
    } 
    getAge():number{
        return this.age;

    }
    getGender():string{
        return this.gender;
    }

} 
const p = new Person("revanth",21,"male");
 p.setName("raman");
 p.setAge(21);
 p.setGender("male");
console.log(`name: ${p.getName()}`); 
console.log(`age: ${p.getAge()}`);
console.log(`gender: ${p.getGender()}`);
