const name = "Guri";
const repoCount=50;
//console.log(name+ " "+repoCount);

//ideal way of concatenation--string interpolation
//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName= new String('gurigaming');
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
console.log(gameName.charAt(6));
console.log(gameName.indexOf('m'));


const newString= gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-9,4);
console.log(anotherString);

const newStringOne= "       heyyyyy.      ";
console.log(newStringOne);
console.log(newStringOne.trim());//trims white spaces

const url = "https://guri.com/guri%20kaur";
console.log(url.replace('%20','-'));
console.log(url.includes('my'));
console.log(gameName.split(' '));














