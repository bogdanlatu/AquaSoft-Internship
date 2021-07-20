const obj1 = {a : 1};
const obj2 = {b : 2};
const obj3 = {c : 3};

const array = ["New York","Washington","Boston","Los Angeles","Bucharest"];

const numbers = [4,5,6,7,8,9];

const sumOfFirstThree = (x,y,z) => {
    return x + y + z;
};


// ES6 methods: assign, find, findIndex, repeat, startsWith, endsWith, includes, sign

Object.assign(obj1,obj2,obj3);

console.log(obj1);

console.log(array.findIndex(x => x == "Los Angeles"));

const stringFromArray = array.find(x => x == "Bucharest");

console.log(stringFromArray);

console.log(stringFromArray.startsWith("arest",4));
console.log(stringFromArray.endsWith("est",9));
console.log(stringFromArray.includes("char"));

const repeat = "ceva".repeat(3);
console.log(repeat);

console.log(Math.sign(obj1.c));


// spread operator

console.log(sumOfFirstThree(...numbers));


// how to iterate through an object

for (let key in obj1){
    console.log(key, obj1[key]);
}


// promise/callback

let promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve("Success!"), 1000);
  });
  
  promise.then(
    result => console.log(result),
    error => console.log(error)
  );


// async/await

async function something() {

    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("Success!"), 1000)
    });
  
    let result = await promise; // wait until the promise resolves
  
    console.log(result);
  }
  
  something();


// closures