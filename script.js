console.clear();

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


// let div2 = document.getElementById("div2");
// let arr = ["dhaka", "pabna", "natore", "sylet"]
// let p2 = document.createElement("select");

// for(let item of arr){
    
//     let option = document.createElement("option");
//     let text = document.createTextNode(item);
//     p2.appendChild(option);
//     let zela = option.appendChild(text);
//     div2.appendChild(p2);
//     if(zela==="dhaka"){
//         zela.addEventListener("click",function (){
//           let select = document.createElement("select");
//           let suboption = document.createElement("option");
//           let subtext = document.createTextNode("iswardi");
//           select.appendChild(suboption);
//           option.appendChild(subtext);
//           zela.appendChild(select);

//         });
//     }
   
// }






// let div2 = document.getElementById("div2");
// let arr = ["dhaka", "pabna", "natore", "sylhet"];
// let p2 = document.createElement("select");


// for (let item of arr){
//     let option = document.createElement("option");
//     option.value = item;
//     option.text = item;
//     p2.appendChild(option);
   
// }
//  div2.appendChild(p2);

// p2.addEventListener("change", function(){
//     let selectedValue = p2.value;

// //     let existingSubSelect = document.getElementById("subSelect");
// //   if (existingSubSelect) {
// //     existingSubSelect.remove();
// //   }

//     if(selectedValue==="pabna"){
//         let subSelect = document.createElement("select");
//         subSelect.id = "subSelect";
//         let subOption = document.createElement("option");
//         subOption.text = "mirpur";
//         subOption.value = "mirpur";
//         subSelect.appendChild(subOption);
//         div2.appendChild(subSelect);
//     }
// })


// let div2 = document.getElementById("div2");
// let zela = {
//     dhaka : ["mirpur", "uttora"],
//     pabna : ["bera", "chatmohor","iswardi"]
    
// };
// let select = document.createElement("select");

// for(let item in zela){
//     let option = document.createElement("option");
//     option.value = item;
//     option.text = item;
//     select.classList.add("text-4xl", "w-[300px]", "p-4", "bg-blue-300");
//     select.appendChild(option);
//     option.classList.add("text-sm")
// }
// div2.appendChild(select);
// select.addEventListener("change", function(){
//     let selectedValue = select.value;

    

//          if(selectedValue){
//             let subSelect = document.createElement("select");
//             subSelect.classList.add("text-3xl")
//             subSelect.id = "subSelect";
//             for (let item2 of zela[selectedValue]){
//                 let subOption = document.createElement("option"); 
//                     subOption.value = item2
//                     subOption.text = item2
//                     subSelect.appendChild(subOption);
//             }
//             let existingSubSelect = document.getElementById("subSelect");
//             if (existingSubSelect) {
//                 existingSubSelect.remove();
//                }
            
//             div2.appendChild(subSelect);
//         }

 
// });

//Write a function that checks if a string is a palindrome (reads the same backward).

// let data = "madam";

// function display(str){
//     let result = true;    
// revStr = str.split("").reverse().join("");

// if(str===revStr){
//    result = true
// }
// else{
//     result = false
// }
// return result;
// }
// console.log(display(data));


// console.log(Math.floor(Math.random()*(80-70)+1)+70);


// let arr = ["i am fine", "i am ok", "fine", "i am good","very good"];

// let index = Math.floor(Math.random()*arr.length);

// let x= "how are you ";
// if(x.trim()==="how are you"){
//     console.log(arr[index]);
// }
// else{
//     console.log("i cant under stand");
// }



// function tempConverter(clecius){
//   let farenhite = (clecius * (9/5)) + 32;
//   return farenhite;
// };

// console.log(tempConverter(30));

// let number = [5,6,11,12,98, 5, 6,5];
// let inputNumber = 5;

// function repetNumber (arr, num){
//     let count= 0 ;
//   for(let item of arr){
//     if(num===item){
//       count++;
//     }
//     else{
//         count;
//     }
//   }
//   return count;
// }
// console.log(repetNumber(number, inputNumber));



// let str = " I am learning Programming to become a programmer";

// function display(name){
//    name = name.split(" ");
//    let BigName = "";
//    let length = 0;
//    for(let item of name){
//       if(BigName.length<item.length){
//         BigName = item;
//         length = item.length;
//       }
//    }
   
//    return `" ${BigName} " and Word Count: ${length}`;
// }
// console.log(display(str));



// let num1 = 10;
// let num2 = 20;

// function random(num1, num2){
    
//     let randomNumber = Math.round(Math.random()*(num2-num1)+num1);

//     return randomNumber;

// }
// console.log(random(num1, num2));



// let arr = [167, 190, 10, 165, 137];

// function display(number){
//     let lowNumber = number[0];
//     for(let item of arr){
//        if(item<lowNumber){
//         lowNumber = item;
//        }
//     }
//     return lowNumber;
// };
// console.log(display(arr));


// let str = "I am learning Programming to become a programmer";

// function display(name){
//    name = name.trim().split(" ");
//    let smallName = name[0];
//    let length = 0;
//    for(let item of name){
//       if(smallName.length>item.length){
//         smallName = item;
//         length = item.length;
//       }
//    }
   
//    return `" ${smallName} " and Word Count: ${length}`;
// }
// console.log(display(str));




// let name = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

// function display(arr){
//   let smallName = arr[0];
  
// for(let item of arr){
//    if(smallName.length>=item.length){
//      smallName = item;
//    }
// }
// return smallName;
// }
// console.log(display(name));


   

// function totalPrice(lap, tab, mob){
//     let laptop = 35000 ;
//     let tablet = 15000 ;
//     let mobile = 20000 ;

//     let price = (lap*laptop) + (tab*tablet) + (mob*mobile);

//     return price;
// }
// let laptop = 1;
// let tablet = 3;
// let mobile = 2;

// console.log(totalPrice(laptop, tablet, mobile));



// const phones = [
//     { model: "PhoneA", brand: "Iphone", price: 95000 },
//     { model: "PhoneB", brand: "Samsung", price: 40000 },
//     { model: "PhoneC", brand: "Oppo", price: 26000 },
//     { model: "PhoneD", brand: "Nokia", price: 35000 },
//     { model: "PhoneE", brand: "Iphone", price: 105000 },
//     { model: "PhoneF", brand: "HTC", price: 48000 },
// ];

// function display (arr){
//     let sum = 0;
// for(let item of arr){
//   sum += item["price"];
// }
//   average = sum / arr.length;
//   average = Math.round(average);
// return average;
// }

// console.log(display(phones));


// const employees = [
//     { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
//     { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
//     { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
//     { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
// ];


// function totalSalary (arr){
//     let totalSalary = 0;
//     let employe = [];
//     for (let item of arr){
//         let salary = item["starting"] + (item["experience"]*item["increment"]);
//         employe.push(`${item["name"]} : ${salary}`);
//         totalSalary += salary;   
//     }
//     console.log(employe);
//     return ` ${employe.join("|")} and Total : ${totalSalary}`;
// };

// console.log(totalSalary(employees));

// let arr = [3, 5, 8, 10, 13, 17, 19, 21];

// function isPrime (num){

//     if(num<2){
//         return false;
//     }
//     for(let x=2; x<=Math.sqrt(num); x++){
//         if(num%2===0){
//             return false
//         }
//     }
//     return true;
// }
// function countPrimes(arr){
//    let primeCount = 0;
//    for(let item of arr ){
//     if(isPrime(item)){
//         primeCount++;
//     }
//    }
//    return primeCount;
// }

// console.log(countPrimes(arr));




// function add(num1, num2){
//     return num1+num2
// }

// function subtract(num1, num2){
//     return num1-num2
// }

// function multi(num1, num2){
//     return num1*num2
// }

// function calculate(a, b, value){
// let result =0;
//     if(typeof a !== "number" || typeof a !== "number"){
//         return console.log("Not a number plz add number") ;
//     }
//     else{
//         if(value==="add"){
//             result = (add(a, b));
//           }
       
//           else if(value==="subtract"){
//             result = (subtract(a, b));
//           }
       
//           else if(value==="multi"){
//             result = (multi(a, b));
//           }
//           else{
//             result = "plz Enter 'add' 'subtract' 'multi'";
//           }
//     }
  
//    return result;
// };

// console.log(calculate(6, 5, "multi"));


// let arr = [1, NaN, {},7, [],5,"sting",6 ,undefined];

// function numberArray(arr){
//     if(!Array.isArray(arr)){
//         return "It is not Array";
//     }
//     let newArr = [];
//     for(let item of arr){
//         if(typeof item === "number" && !isNaN(item)){
//             newArr.push(item);
//         }
//     }
//     return newArr;
// }

// let data = numberArray(arr);

// console.log(data);


// 0 -100 = 100;
//    101-150 = 80
//    avobe 150 = 70

// function display(quantites){
//    let item100price = 100;
//    let item150price = 50;
//    let avobe150price = 10;

//    if(typeof quantites !== "number"){
//     return "Plz Enter Number value";
//    }

//     let totalPrice = 0;

//    if(quantites<=100 && quantites>=0){
//       totalPrice = quantites*item100price;
//       return totalPrice;
//    }
//    else if(quantites>=101 && quantites<=150){
//       totalPrice = quantites*item150price;
//       return totalPrice;
//    }
//    else if(quantites>150){
//     totalPrice = quantites*avobe150price;
//     return totalPrice;
//    }
//    else{
//     return "Invalid Quntites";
//    }
// }

// console.log(display(152));


// 0 -100 = 100;
//    101-150 = 80
//    avobe 150 = 70


// function display(qty){
//    let item100price = 10;
//    let item150price = 5;
//    let above150price = 3;

//    let totalPrice = 0;

//    if(qty<=100){
//     totalPrice = item100price*qty;
//     return totalPrice;
//    }
//    else if(qty>100 && qty<=150){
//     let qty100price = item100price*100;
//     let restPrice = (qty-100)*item150price;
//     return totalPrice = qty100price + restPrice;
//    }
//    else if(qty>150){
//     let qty100price = item100price*100;
//     let next50price = 50*item150price;
//     let restPrice = (qty-150)*above150price;

//     return totalPrice = qty100price + next50price + restPrice;
//    }
//    else{
//     return "Invalid Number";
//    }

// }
// console.log(display(200));

// let phones = [
//     {name: "samsung", price:25000, color:"blue"},
//     {name: "Lg", price:11000, color:"blue"},
//     {name: "HTC", price:55000, color:"blue"},
//     {name: "Oppo", price:45000, color:"blue"}
// ];

// function lowestPhone(arr){
//     let price = arr[0].price;
//     let name = "";
//     for(let item of arr){
//         if(price>item.price){
//             name = item.name;
//             price = item.price;
//         }
//     };
//    return `${name} : ${price}`;
// }

// console.log(lowestPhone(phones));


// const employees = [
//     { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
//     { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
//     { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
//     { name: "shohel", experience: 0, starting: 29000, increment: 4000 }
// ];


// function salary(arr){
//      let eachSalary = 0;
//      let totalSalary = 0;
//      let newArr = [];
//     for(let item of arr){
//        eachSalary = (item.experience*item.increment) + item.starting;
//        newArr.push(`${item.name} : ${eachSalary}`);
       
//       totalSalary += eachSalary;
//     } 
//    return `${newArr.join(" | ")} and Total salary is : ${totalSalary}`;
// };

// console.log(salary(employees));


// B9-A-4 Problem Task----------------------------------------------------------->

//problem 1------------------------------------------------>

// function calculateMoney(ticketSale) {
//     if(ticketSale<0){
//         return "Invalid Number";
//     }
//     else{
//         let ticketPrice = 120;
//         let stafCost = 50;
//         let result = (ticketPrice*ticketSale) - 500 - stafCost*8;
//         return result;
//     }
// };
// let data = calculateMoney(45);

// console.log(data)


//problem 2------------------------------------------------>

// function checkName(name) {
//     if(typeof name !== "string"){
//         return "Input Correct Name";
//     }

//     name = name.toLowerCase();
//     let arr = ["a", "y", "i" , "e" , "o" , "u", "w"];
//     let lastChart = name.slice(-1);
//     // let result = false;



//    return result = arr.includes(lastChart) ? "Good Name" : "Bad Name";
//     // for(let item of arr){

//     //     if(lastChart === item){
//     //         result = !false;
//     //     }
        
//     // }
    
//     // return result ? "Good Name" : "bad Name"; 
// }

// console.log(checkName("salman"));
// console.log(checkName("rafee"));
// console.log(checkName("Jhankar"));
// console.log(checkName(199));
// console.log(checkName(["Rashed"]));



//problem 3------------------------------------------------>
  
// function deleteInvalids(arr){

// if(!Array.isArray(arr)){
//     return "invalid Array";
// }
// let newArr = [];
// for(let item of arr){
//    if(typeof item === "number" && !isNaN(item)){
//     newArr.push(item);
//    }
// }
// return newArr;

// }

// console.log(deleteInvalids([1, null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }]));
// console.log(deleteInvalids(["1" , {num:2} , NaN ]));
// console.log(deleteInvalids([ 1 , 2 , -3 ]));
// console.log(deleteInvalids({num: [ 1 , 2 , 3 ]}));

//problem 4------------------------------------------------>

// function password(obj){
   
//     if( obj.name===undefined ||  obj.birthYear===undefined ||  obj.siteName=== undefined || obj.birthYear.toString().length !==4){
//         return "invalid";
//     }
//     let FristCapital = obj.siteName.charAt(0).toUpperCase();
//     let passWord ;
//     passWord =  FristCapital + obj.siteName.slice(1) + "#" + obj.name + "@" + obj.birthYear;

//    return passWord;
// };
// console.log(password({ name: "kolimuddin" , birthYear: 1999 , siteName: "google" }));
// console.log(password({ name: "rahat", birthYear: 2002, siteName: "Facebook" }));
// console.log(password({ name: "toky", birthYear: 200, siteName: "Facebook" }));
// console.log(password({ name: "maisha", birthYear: 2002 }));

//problem 5------------------------------------------------>
// function monthlySavings(arr, cost){
//     if(!Array.isArray(arr) || typeof cost !=="number"){
//       return "Invalid Input";
//     }
//      let savings = 0;
//      let totalIncome = 0;

//     for(let item of arr){
//         let data = item>=3000 ? true : false
//        if(data){
//         totalIncome += item - (item*20/100); // 20% tax deduct;
//        }
//        else {
//         totalIncome += item;
//        }
       
//     }
//     savings = totalIncome - cost;

//     return savings>=0 ? savings : "earn more";

// }

// console.log(monthlySavings([ 1000 , 2000 , 3000 ] , 5400));
// console.log(monthlySavings([ 1000 , 2000 , 2500 ] , 5000));
// console.log(monthlySavings([ 900 , 2700 , 3400] , 10000));
// console.log(monthlySavings(100, [ 900 , 2700 , 3400]));









