interface Student{
 id:number;
 name:string;
 age:number;
 grade:string;
} 
function createStudent(args:string[]):Student{
    if(args.length<4){
        throw new Error("Insufficient arguments");
    } 
    const  id =  parseInt(args[0]);
    const name = args[1];
    const age = parseInt(args[2]);
    const grade = args[3];
    return {id,name,age,grade};
} 
const args = process.argv.slice(2);
let per : Student ;
try {
    per = createStudent(args);
} catch (error) {
    console.log(error);
    process.exit(1);
}
console.log("id: ",per.id);
console.log("name: ",per.name);
console.log("age: ",per.age);
console.log("grade:", per.grade);
