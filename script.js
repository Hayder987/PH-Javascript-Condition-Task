console.clear();
let p1 = document.querySelector("#p1");


let btn1 = document.querySelector("#btn1");
btn1.addEventListener("click", function (){
    window.location.reload();
});

/***
// -------------------------task -1-----------------------------------------------------
Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/

// let burgerPrice = 400;

// if(burgerPrice>=500){
//    console.log("You Get Free coke");
// }
// else{
//     console.log("You need Buy Coke at 30 Tk");
// }

// -------------------------task - 2-----------------------------------------------------
/*** 
BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/

// let weight = 50;

// let height = 1.8 ; // as Meter 

// let bmi = parseFloat((weight /  Math.pow(height, 2)).toFixed(1));

// if(bmi < 18.5){
//     p1.innerHTML = `Your BMI Is : ${bmi}`;
//     console.log("you are underweight.");

// }
// else if (bmi>=18.5 && bmi<=24.9){
//     p1.innerHTML = `Your BMI Is : ${bmi}`;
//     console.log("you are normal.");
// }
// else if (bmi>=25 && bmi<=29.9){
//     p1.innerHTML = `Your BMI Is : ${bmi}`;
//     console.log("you are overweight.");
// }
// else {
//     p1.innerHTML = `Your BMI Is : ${bmi}`;
//     console.log("you are obese");
// }

// -------------------------task - 3-----------------------------------------------------
/***
Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

// let marks = 82;

// let grade = marks<=100 && marks>=90 ? "A" :
//             marks<=89 && marks>=80 ? "B":
//             marks<=79 && marks>=70 ? "C" : 
//             marks<=69 && marks>=60 ? "D" :
//             marks<=59 && marks>=0 ? "Fail" : "invalid Marks";

// console.log(grade);

// let marks = 100;

// if (marks>=90 && marks<=100){
//     console.log("A");
// }
// else if(marks>=80 && marks<=89){
//     console.log("B");
// }
// else if(marks>=70 && marks<=79){
//     console.log("C");
// }
// else if(marks>=60 && marks<=69){
//     console.log("D");
// }
// else if(marks>=0 && marks<=59){
//     console.log("F");
// }
// else {
//     console.log("Invalid Marks");
// };

// -------------------------task - 4-----------------------------------------------------
/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/

// let myMarks = 84;
// let frndMarks = 39

// if (myMarks>=80){
//    if(frndMarks>=80){
//     console.log("lets go for a lunch.");
//    } 
//    else if (frndMarks<80 && frndMarks>=60){
//     console.log("good luck next time for lunch");
//    }
//    else if (frndMarks<60 && frndMarks>=40){
//     console.log("friend's message unseen.");
//    }
//    else if (frndMarks<40){
//     console.log("block your friend");
//    }
// }
// else{
//     console.log("go to home and sleep and act sad");
// }

// -------------------------task - 5-----------------------------------------------------
/***
you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not,
 then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

 */

// let num1 = 10;
// let num2 = 15;

// let result = 0;

// // if (num1>num2){
// //     result = Math.pow(num1, 2);
// // }
// // else {
// //     result = num1+num2;
// // }

// result = num1>num2 ? Math.pow(num1, 2) : num1+num2;

// console.log(result);

// -------------------------task - 6-----------------------------------------------------
/***
Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

// let isStudent = false;
// let age = 62;
// let fare = 800;
// let ticket;


// if(age<10 ){
//  ticket = 0;
// }
// else if(isStudent){
//  ticket = fare-(fare*50/100);
// }
// else if (age>=60){
//     ticket = fare-(fare *15/100);
// }
// else{
//     ticket = fare;
// }

// console.log(`The ticket price is : ${ticket}`);

// let data = [62, false]

// let display =(function ticketPrice (age, isStudent){
//       const fare = 800;
//     if(age<10){
//         return 0;
//     }
//     else if(isStudent){
//         ticket = fare - (fare*50/100);
//         return ticket
//     }
//     else if (age>=60){
//         ticket = fare - (fare*15/100);
//         return ticket
//     }
//     else{
//         return fare;
//     }
// })(data[0],data[1]);

// console.log(`Your Ticket Price Is: ${display}`);




// let input1 = document.querySelector("#input1");
// let input2 = document.querySelector("#input2");
// let select = document.querySelector("#select");
// let btn2 = document.querySelector("#btn2");


// btn2.addEventListener("click", function(){
//    let age = parseFloat(input2.value);
//     let   fare = parseFloat(input1.value);
//     let isStudent = select.value;
//     isStudent = isStudent=="yes"? true : false;

//     let price = 0;
//     if(age<10){
//       price ;
        
//     }
//     else if (isStudent ){
//         price = fare- (fare*50/100);
//         input2.classList.add("hidden");       
//     }
//     else if (age>=60){
//         price = fare- (fare*15/100);
          
//     }
//     else{
//         price = fare;
        
//     }

//     p1.innerHTML = `Your Ticket Price is : ${price}`;
// });


// let date = new Date();
// let hour = date.getHours();
// let text = "";

// if(hour>=5 && hour<12){
//    text = "Good Morning";
// }
// else if(hour>=12 && hour<18){
//     text = "Good Afternoon";
// }
// else if(hour>=18 && hour<22){
//     text = "Good Evening";
// }
// else {
//     text = "Good night";
// }

// console.log(text);


// const number = 12;

// let text = "";
// if(number===0){
//   text = "zero";
// }
// else if (number>=1 && number<=10){
//     text = "Low Range";
// }
// else if(number>=11 && number<=20){
//     text = "Mid Range";
// }
// else if(number>=21 && number<=30){
//     text = "high Range";
// }
// else{
//     if(number<0){
//         text = "negative Number";
//     }
//     else{
//         text = "out of range";
//     }
// }
// console.log(text);


// let cost = 600;
// let price = 0;

// if(cost>500){
//    price = cost-(cost*20/100); 
// }
// else if(cost<=500 && cost>=200){
//    price = cost-(cost*10/100); 
// }
// else{
//     price = cost;
// }
// console.log(price);


// let light = "Yellow";
//     light = light.toLocaleLowerCase();

// if(light=="green"){
//     console.log("go");
// }
// else if(light=="yellow"){
//     console.log("caution");
// }
// else if(light=="red"){
//     console.log("Stop");
// }
// else{
//     console.log("invalid light")
// }


// let year = 2013;

// if(year%4===0 && year%100!==0 || year%400===0){
//     console.log("leap Year");
// }
// else{
//     console.log("Not Leap year");
// }

// let marks = 75;
// let assigment = 7;

// let text = "";
// if(marks>=90 && marks<=100 && assigment>=10){
//    text = "A";
// }
// else if(marks>=80 && marks<=89 && assigment>8 ){
//     text = "B";
//  }
//  else if(marks>=70 && marks<=79 && assigment>6 ){
//     text = "C";
//  }
//  else if(marks>=60 && marks<=69 && assigment>4 ){
//     text = "D";
//  }
//  else if(marks<60 && marks>=0 && assigment<4 ){
//     text = "F";
//  }
//  else{
//     text = "invalid Number";
//  }

//  console.log(text);







// Given a shopping amount, membership status (member or non-member), 
// and if the purchase is on a special sale day, calculate the discount:

// Non-member: No discount
// Member: 10% discount
// Special sale day: Additional 5% discount on top of the member discount


// let member = true;
// let day = true;
// let cost = 100;

// let price = 0;

// if(member){
//   if(day){
//     price = cost- (cost*15/100) ;
//   }
//   else{
//     price = cost- (cost*10/100);
//   }
// }
// else{
//     price = cost;
// }

// console.log(price);


// let arr = [3, 1, 5, 8, 3, 9, 12, 5, 14];
//    let number = [];
//    let count = 0;
// for(let x=0; x<arr.length; x++){
//     if(arr[x]%2 === 0){
//         number.push(arr[x]) ;
//         count++;
        
     
//     }   
// };
// console.log(Array.isArray(number));
// console.log(number);
// console.log(count);


// let arr = [1, 3, 5, 7, 2, 9 ];
// let value = 4;
// let bigValue = [];

//   let count = 0;
// for(let x=0; x<arr.length; x++){
//    if(arr[x]>value){
//     bigValue.push(arr[x]);
//     count++;
//    }
// }
// console.log(count);
// console.log(bigValue);
// p1.innerHTML= bigValue.join(" ");

// let arr = [1, 2, 2, 3, 4, 4,2,5];

//    number = [];
// for(let x=0; x<arr.length; x++){
//     if(!number.includes(arr[x])){
//         number.push(arr[x]);
//     }
// }
// console.log(number);
// console.log(arr.indexOf(5));

// let arr = [5, 3, 8, 1, 5];
  
// let count = arr[0];
// for(let x=0; x<arr.length; x++){
//    if(count>arr[x]){
//     count = arr[x]
//    }
// }
// console.log(count);

// console.log(arr.length===0);

// let arr = [2, 4, 6,4];
//   let sum = 0;
// for( let x=0; x<arr.length; x++){
//    sum += arr[x];
// }
// console.log(sum/arr.length);

// let num = 1;

// while(num<10){
//     console.log(num);
//     if(num%2===0){
//         console.log("even number", num);
//     }
//     num++;
// };

// let num=206;
// let sum=0;
// while(num<=311){
//     num++;
//     if(num%2===0){
//         sum+=num;
//         console.log("sum:",sum);
//     }
// }
// console.log(sum);

// const number = 5;



// let num = 5;

// let x =0;
// let multi =0 ;
// while(x<=9){
//     x++;
//    multi = num*x;
//    data = `${num} x ${x} = ${multi}`;
//    console.log(data);
// };
 
// let num=22;
// while(num>15){
//     num--;
//     console.log(num);
// }

// let num = 9;
// let multi;
// for(let x=1; x<=10; x++){
//   multi = num*x;
//   data = num +" "+"x"+" "+ x + " "+"="+" "+multi;
//   console.log(data);
// };
   
// let data =0;
// for(let x=1; x<=200; x++){
    
//     if(x>=100){
//         data=x;
//         break;     
//     }
    
// }
// console.log(data);


// Write a while loop that adds numbers starting from 1, 
// but stops (using break) as soon as the sum reaches or exceeds 100

// let sum = 0;
// let num ;
// for(let x=1; x<=50; x++){
//    sum += x;
//    num = x;
//    if(sum>=100){
//     break;
//    }
// }
// console.log(sum);
// console.log(num);


/* 
Write a loop that goes from 1 to 100, but stops (using break) 
when it encounters the first square number (like 4, 9, 16, etc.)
*/

// let square =0;
// let num;
// for(let x=1; x<=100; x++){
//    square = Math.pow(x,2);
//    if(square%1===0){
//     if(x===1){
//         continue;
//     }
//     num=x**2;
//     break;
//    }
// }
// console.log(num);

// for(let x=1; x<=40; x++){
//     if(x%2!==0){
        
//       continue;
      
//     }
//     console.log(x);
    
// }

// for(let x=55; x<=85; x++){
//     if(x%5===0){
//         continue;
//     }
//     console.log(x);
// }


// Think of an array with elements [1, 2, 3, 4, 5]. 
// How would you loop through the array to reverse its order?

// let arr = [1, 2, 3, 4, 5];
// let arr2 = [];
// for(let x=arr.length-1; x>=0; x--){
//     arr2.push(arr[x]);
    
// }
// console.log(arr2);


// Check whether a string contains all the vowels a, e, i, o, u;

// let name = "Javascript";
//     name = name.toLowerCase();
// let arr = [];
// let count = 0;
//  for(let x=0; x<name.length; x++){
//     if(name[x]=="a" || name[x]=="e" || name[x]=="i" ||name[x]=="o" || name[x]=="u"){
//        count++;
//        arr.push(name[x]);
//     }
//  }
//  console.log("Total Vowel Letter Count:" + " "+count);
//  console.log("And Letter Is:"+ " "+ arr.join(" "));



// let name = "Rakib";
    
// let reverseName = [];
// for(let x=name.length; x>-1; x--){
//     reverseName.push(name[x])
// };
// console.log(reverseName.join(""));

// let name1 = "haYder ";
// let name2 = "    hayder";

// if(name1.toLowerCase().trim()===name2.toLocaleLowerCase().trim()){
//     console.log("soman");
// }
// else{
//     console.log("not match");
// }

// let emil = "rakib";

// console.log(emil.split('').reverse().join(''));

// let computer = {
//     brand : "Asus",
//     model : "UX-40",
//     price : 26000,
//     processor : "AMD",
//     ssd : ["hp", "wd", "samsung"],
//     casing : {
//         color: "blue",
//         isMetal : true,
//         fan:{
//             rgb: false,
//             rpm : 1200
//         }
//     }
// }

// for( let x in computer){
//     console.log(x, ":", computer[x]);
// }


// let props = Object.keys(computer);

// for(let value of props){
//     console.log(value,":", computer[value]);
// };


// const colors = {
//     red: "#ff0000",
//     green: "#00ff00",
//     blue: "#0000ff",
//     "golden rod": '#daa520'
// };
//   let x = "golden rod";
// console.log(colors[x]);

// For this object below add a property named passenger capacity with value 5

// const car = {
//     make: "Toyota",
//     model: "Corolla",
//     year: 2020
// };
//   car.passenger = 5;
// console.log(car);

// task-4------------------------------------
// let student = {
//     name: 'Ariana Grande',
//     age: 21,
//     city: 'Gaibandha',
//     isStudent: true
// };

// let propertes = Object.values(student);
// console.log(propertes);




// task -5-------------------------------


// let home = {
//     name: 'John Doe',
//     age: 25,
//     city: 'Example City',
//     isStudent: true
// }


// for(let props in home){
//     console.log("Key:", props, "|", "Type:", typeof(home[props]));

//     // console.log(`Key: ${props} | Type: ${typeof(home[props])}`);
// }



// let str = "This is a stringX with X and x.";
// let result = "";

// for(let x of str){
//     if(x==="x"){
//         result+="y"
//     }
//     else if(x==="X"){
//         result += "Y"
//     }
//     else{
//         result += x;
//     }
    
// }
// console.log(result);


// // task-----make frist word UpperCase---------------------;
// let myString = "hello world from javascript";
// let arr = myString.split(" ");
// let data = [];
// for(let x=0; x<arr.length; x++){
    
//     let upperName = arr[x].charAt(0).toLocaleUpperCase() ;
//      data.push(upperName+arr[x].slice(1));
    
    
// }
// let result = data.join(" ");

// console.log(result);


// Array Task-2-------------------------------------------------------------

// Task 1---------------------
// const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
// let revColors = [];
// for(let color of colors){
//    revColors.unshift(color); 
// }

// console.log(revColors);

//task-2------------------------------
// const numbers = [12, 98, 5, 41, 23, 78, 46];
// let evenNumber = [];
// for(let number of numbers){
//     if(number%2===0){
//       evenNumber.push(number);
//     }
// }

// console.log(evenNumber);
// console.log(evenNumber.sort());

//task 3 ---------------------
// method-1------
// var numbers = ['Tom', 'Tim', 'Tin', 'Tik'];

// let result = numbers.join("");

// console.log(result);

//method-2--------------
// var numbers = ['Tom', 'Tim', 'Tin', 'Tik'];
// let result = '';
// for(let num of numbers){
//     result += num;
// }
// console.log(result);

//task 4 -----------------------------------
// method 1 -------------------
// const statement = 'I am a hard working person';

// let result = statement.split(" ").reverse().join(" ");
// console.log(result);

// method 2 ----------------------
// const statement = 'I am a hard working person';

// let arr = statement.split(" ");
// let revArr = [];

// for (let x of arr){
//     revArr.unshift(x);

// }
// let result = revArr.join(" ");
// console.log(result);


// object concat / 2 ta object jora dewa;
// const address = {
//     street: "123 Main St",
//     city: "Pabna",
//     zip: "6600"
// };
// const contact = {
//     phone: "555-1234",
//     email: "example@example.com"
// };

// let profile = {
//     ...address,
//     ...contact
// }

// console.log(profile);


// let name = "The cat sat on the cat mat.";


// name = name.split(" ");
// let arr = [];
// for(let x of name){
    
//     if(x==="cat"){
//         x="dog";
//         arr.push(x);
//     }
//     else{
//         arr.push(x);
//     }
    
    
// }
// console.log(arr);

// let number = "5";

// for (let x=0; x<5; x++){
//     if(number.length<5){
//          number = "0" + number;
//     }
    
// }
// console.log(number);



// name = name.split("");
// let data;
// for(let x of name){
//     if(x==="s"){
//         data = (name.indexOf(x));
//         break
//     }
// }
// console.log(data);

// let square =0;
// let num;
// for(let x=1; x<=100; x++){
//    square = Math.pow(x,2);
//    if(square%1===0){
//     if(x===1){
//         continue;
//     }
//     num=x**2;
//     break;
//    }
// }
// console.log(num);

//    let square = 0;
//    let num = 0;
//    let squareNum = 0;

// for(let x=1; x<=100; x++){
//     square = x**2;
//     if(square===4 || square===9  || square===16){
//         num = x;
//         squareNum = square;
//         break;
//     }
    
// }
// console.log("Found Square Number:" + " " + squareNum + " " + "and Number is:" + " "+ num );


// let square = 0;

// for(let x = 1; x <= 50; x++) {
//     if(x % 1 === 0) {
//         square = x ** 2;
//         if(square === 4 || square === 9 || square === 16) { // এখানে শর্তগুলো যোগ করা হয়েছে
//             console.log(`Square number ${square} found at x = ${x}`);
//             break; // শর্ত মিললে লুপ ব্রেক হবে
//         }
//     }
// }




// const car = {
//     make: 'Toyota',
//     model: 'Corolla',
//     year: 2020,
//     description : function (){
//         return `this car ${this.model} made by ${this.make}`;
//     }
    
//   };
  
//   console.log(car.description());


// function Student (name, age, year){
//     this.name = name;
//     this.age  = age;
//     this.year = year;
//     this.display = function(){
//         console.log(name);
//         console.log(age);
//         console.log(year);
//     }
// }

// let student1 = new Student("hayder", 25, 2021);
// let student2 = new Student("jony", 30, 2024);

// for(let item in student1){
//     let result = `${item} : ${student1[item]}`;
//     console.log(result);
// }



 // function task----------------------------------------------------------------

 //Take four parameters. Multiply the four numbers and then return the result

//  function multi(a,b,c,d){
//     let result = a*b*c*d;
//     return result;
//  }

//  let data = multi(2,3,4,5);

//  console.log(data);



//Take a number if the number is odd multiply it by 2 and return the result.
// If the number is even divide it by two and return the result.

// function calculate (number){
//     let result=0;
//    if(number%2===0){
//       result = number / 2;
//    }
//    else{
//     result = number*2;
//    }
//    return result;
// }
// let data = calculate(40)

// console.log(data);



//Write a function called make_avg() which will take an array of integers and the size of 
//that array and return the average of those values.

// function make_avg(arr){
//   let sum = 0;
//   let result;
  
//   for(let item of arr){
//     sum += item;
//     result = sum/2;
//   }
//   return result
  
// }

// let number = [2,45,12,3,6,7,8,6,9,14];
// let data = make_avg(number);

// console.log(data);


// function make_avg(arr) {
//   let result;
//   let sum = 0;
//   for (let item of arr){
//     sum += item;
//   }
//   result = sum / arr.length;
//   return result;
// }

// let number = [1,2,3,4,5,6];
// console.log(make_avg(number));



//Write a function called count_zero() which will take a binary string 
// (Binary string is a string which is consist of only 0 and 1) as parameter and 
// count how many 0’s are there in that string.


// function count_zero(bin){
//   bin = bin.split("");
// //   let count = 0;
//   let zeroNumber = [];
//   for(let item of bin){
//     item = parseFloat(item);
//    if(item===0){
//     // count ++
//     zeroNumber.push(item);
//    }

//   }
//  return zeroNumber;
// }

// let number = "1011011100101010";
// let data = count_zero(number);
// console.log(`Total zero : ${data.length} and Number is:${data}`);




//Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. 
//If even return Even. If odd return Odd


// function odd_even(num){
//   let result = num%2===0 ? "Even-Number" : "Odd-Number";
   
//    return `${result} and Number is ${num}`;

// }

// let number = 40;
// let output = odd_even(number);

// console.log(output);
























