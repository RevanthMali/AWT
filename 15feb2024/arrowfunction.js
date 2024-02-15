  // Traditional anonymous function
(function (a, b) {
    return a + b + 100;
  });
  
  // Arrow function
  const sum = (a, b) => { return a + b + 100};
  const a = 4;
  const b = 2;
  console.log("Arrow function result: ",sum(a,b));
  // Traditional anonymous function (no parameters)
   (function () {
    return a + b + 100;
  }); 
  
  
  // Arrow function (no parameters)
  const sum1 = () =>{return a + b + 100}; 
  const result = sum1();
  console.log("Arrow function with no parameters:",result);