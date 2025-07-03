//Stack and Heap

/*   STACK    */
let myYtName="gurikaur";
let anotherName= myYtName;
anotherName="gurinoori";
console.log(myYtName);
console.log(anotherName);
//copy of the value has been changed and not the original value

/*    HEAP    */
//a function-reference datatype
let userOne= {
    Email: "user@domain.com",
    upi:"user@upi",
}

let userTwo=userOne;
userTwo.Email="guri@google.com";
console.log(userOne.Email);

console.log(userTwo.Email);



