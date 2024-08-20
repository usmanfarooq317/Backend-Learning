//array 
let numbers = [1, 2, 3, 4, 5];
numbers.push(6); 
numbers.pop();          
let doubled = numbers.map(n => n * 2);
let even = numbers.filter(n => n % 2 === 0);
console.log(numbers,doubled,even)

//object literals
let person = {
    name: 'Usman',
    age: 21,
    info: function() {
      console.log('Hello, ' + this.name)
    }
  };
  person.info();

//object spread 

  let x=[11,22,33,44,55];

  let person1={...x,Name:'Ahmed'};
  console.log(person1)
  


//event loop
  console.log('Start');

setTimeout(() => {
    console.log('Timeout');
}, 0);

console.log('Hello World!');
console.log('End');



//promises
let prom1 = new Promise((resolve,reject)=>{
    let x=5
    if(x>0.5)
        resolve("a is greater")
    else{
        reject("a is smaller")
    }
})
prom1.then((result) => {
    console.log(result);
}).catch((error) => {
    console.error(error);
});

  
