//1) Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
let numbers=[3, 6, 8, 2].filter((arr)=>{
  return arr > 5;
});
console.log(numbers)

//2) Given an array of numbers, return a new array that only includes the even numbers.





//3) Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length





//4) Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.






//5) Make a filtered list of all the people who are old enough to see The Matrix (older than 18)
let array = [
  { 
    name: "Angelina Jolie", 
    age: 80
  },
  { 
    name: "Eric Jones", 
    age: 2
  },
  { 
    name: "Paris Hilton", 
    age: 5
  },
  { 
    name: "Kayne West", 
    age: 16 
  },
  { 
    name: "Bob Ziroll", 
    age: 100
  }
]

let newArray = array.filter((a)=>{
  return a.age > 18
})

console.log(newArray);


