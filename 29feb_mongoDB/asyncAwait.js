 function sum(x,y)
{  return new Promise((resolve)=>{
    setTimeout(()=>{ 

        resolve(x+y)
    },5000);
})

}  
async function calculateSum(){ 
    console.log("calling the function")
    const res = await sum(3,5);
    console.log("resolved after 5 seconds",res);
}
 calculateSum();