//array


const myArray=[0,1,2,3,4,5];
const myHeros=["Shaktiman", "Naagraj"];
const Arr2=new Array(1,2,3,4);
console.log(typeof myArray);


//ARRAY METHODS


/* 
myArray.push(6);
myArray.push(7);
myArray.pop();
 */

/*myArray.unshift(9);
myArray.shift();
*/
/* 
console.log(myArray.includes(9));//questioning method
console.log(myArray.indexOf(90));
console.log(myArray.indexOf(2));
 */


/* 
const newArr= myArray.join();
console.log(typeof newArr);
console.log(newArr);//my array has been converted into string from an object
console.log(myArray);
 */


//slice,splice

console.log("A:",myArray);
const myN1= myArray.slice(0,4);
console.log(myN1);

console.log("B:",myArray);
const myN2= myArray.splice(0,5);
console.log("C:",myArray);
console.log(myN2);

