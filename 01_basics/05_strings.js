const name1 = "Arpit";
const repoCount = 50;

//String interpolation
console.log(`Hello my name is ${name1.toLowerCase()} `);

const gameName = new String("arpit-jain");

console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.toLocaleUpperCase());

console.log(gameName.charAt(1));
console.log(gameName.indexOf("t"));

const anotherstring = gameName.slice(-8, 4);

console.log(anotherstring);

console.log();

const newStringOne = " aa     ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary";

console.log(url.replace("%20", "-"));

console.log(url.includes("sundar"));

console.log(gameName.split("-")); // .split converts string into array

