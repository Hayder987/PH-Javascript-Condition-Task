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

let marks = 75;
let assigment = 7;

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






 









