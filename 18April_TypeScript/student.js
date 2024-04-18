function createStudent(args) {
    if (args.length < 4) {
        throw new Error("Insufficient arguments");
    }
    var id = parseInt(args[0]);
    var name = args[1];
    var age = parseInt(args[2]);
    var grade = args[3];
    return { id: id, name: name, age: age, grade: grade };
}
var args = process.argv.slice(2);
var per;
try {
    per = createStudent(args);
}
catch (error) {
    console.log(error);
    process.exit(1);
}
console.log("id: ", per.id);
console.log("name: ", per.name);
console.log("age: ", per.age);
console.log("grade:", per.grade);
