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

let weight = 50;
let height = 1.8 ; // as Meter 

let bmi = parseFloat((weight /  Math.pow(height, 2)).toFixed(1));

if(bmi < 18.5){
    p1.innerHTML = `Your BMI Is : ${bmi}`;
    console.log("you are underweight.");

}
else if (bmi>=18.5 && bmi<=24.9){
    p1.innerHTML = `Your BMI Is : ${bmi}`;
    console.log("you are normal.");
}
else if (bmi>=25 && bmi<=29.9){
    p1.innerHTML = `Your BMI Is : ${bmi}`;
    console.log("you are overweight.");
}
else {
    p1.innerHTML = `Your BMI Is : ${bmi}`;
    console.log("you are obese");
}





