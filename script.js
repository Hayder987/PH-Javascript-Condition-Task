console.clear();
let p1 = document.querySelector("#p1");


let btn1 = document.querySelector("#btn1");
btn1.addEventListener("click", function (){
    window.location.reload();
});

/***

Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/

let burgerPrice = 400;

if(burgerPrice>=500){
   console.log("You Get Free coke");
}
else{
    console.log("You need Buy Coke at 30 Tk");
}


