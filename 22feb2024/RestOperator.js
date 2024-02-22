function square(...Args){
            let total = 0;
            for(const x of Args){
                total += (x*x);
            } 
            return total;
} 
console.log("Total sum of square of given numbers:",square(1,2,3));