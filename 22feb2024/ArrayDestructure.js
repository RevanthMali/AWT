const  num = ["one","two","three","four"];
const {...num1} = num;

// elements in num array are copied to num1 using spread operator
console.log(num1); 

// specific Element can be accessed by its index
console.log(num1[2]);  

const [a,b,...num2] = num;
console.log(a);
console.log(b);
console.log(num2);

