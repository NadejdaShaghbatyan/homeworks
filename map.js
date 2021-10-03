//1) Make an array of numbers that are doubles of the first array
let doubles = [2, 5, 100].map((arr)=>{
    return arr * 2 ;
});
console.log(doubles)
//2) Take an array of numbers and make them strings
let numbers = [2, 5, 100]

numbers[0] = "2";
numbers[1] = "5";
numbers[2] = "100";
console.log(numbers)


//3) Capitalize each of an array of names


//4) Make an array of strings of the names  
   let names =[
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
   ]; 
   let newName = names.map((a)=>{
     return a.name
   })
   console.log(newName)

//5) Make an array of strings of the names saying whether or not they can go to The Matrix


//6) Make an array of the names in h1s, and the ages in h2s


function readyToPutInTheDOM(arr) {
     return arr.map(function(obj) {
       return "<h1>" +obj.name +"</h1>" + "<h2>" + obj.age +"</h2>";
     });
   }
   
   var result = readyToPutInTheDOM([
        {name:"Angelina Jolie",age:80},
        {name:"Eric Jones",age:2},
        {name:"Paris Hilton",age:5},
        {name:"Kayne West",age:16},
        {name:"Bob Ziroll",age:100}
     ]);
   console.log(result);