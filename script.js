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









