const Person= {
    name:
    {
        firstName : "Revanth",
        LastName: "Reddy"
    },
    age:18,
    Address: {
        city : "Hyderabad",
        State: "Telanagana"
    },
}  
// coping the instance  of Person Object to another object
const {...PersonDetails} = Person; 
console.log(PersonDetails); 

// Iterating through the Object Using Keys() Method
for(const x of Object.keys(PersonDetails)){
    const y = PersonDetails[x];
    console.log(x,y);
}

// Using Object.entries()
for (const [x, y] of Object.entries(PersonDetails)) {
    console.log(x, y);
  }