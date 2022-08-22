                    //ASSIGNMENT NO 10

                    //Question no 1

//Write a function that displays current date & time in your browser

function date(){
    var time = new Date()
    console.log(time)
}
date()

                    //Question no 2
//Write a function that takes first & last name and then it greets the user using his full name.

function fullname(){
    var first_name = prompt("enter your first name");
    var last_name = prompt("enter your last name");
    var full_name = first_name + " " + last_name;
    console.log(full_name)
}
fullname()


                    //Question no 3
//Write a function that adds two numbers (input by user) and returns the sum of two numbers.

function sum(){
    var num1 = +prompt("enter first number:");
    var num2 = +prompt("enter first number:");
    return num1 + num2;   
}
console.log(sum())


                    //Question no 4
// Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and
// show the desired result in your browser.

function calculaor(number1,operator,number2){
    var number1 = +prompt("enter first number:");
    var operator = prompt("enter operator:");
    var number2 = +prompt("enter second number:");
    if(operator === "+"){
        return number1 + number2
    }
    if(operator === "-"){
        return number1 - number2
    }
    if(operator === "*"){
        return number1 * number2
    }
    if(operator === "/"){
        return number1 / number2
    }
    if(operator === "**"){
        return number1 ** number2
    }
    if(operator === "%"){
        return number1 % number2
    } 
}
console.log(calculaor())

                    //Question no 5
//Write a function that squares its argument.

function squares(num){
    var num = +prompt("enter a number");
    var squares = num * num;
    console.log(squares)
}
squares()


                    //Question no 6
//Write a function that computes factorial of a number.

function factorial(num){
    var num = +prompt("enter a number")
    var fact = 1;
    if(num === 0){
        console.log("factorial of 0: is 1")
    }
    else{
        for(var i = 1; i<= num; i++){
            fact = fact * i;      
        }
        console.log(fact) 
    }
}
factorial()



                    //Question no 7
//Write a function that take start and end number as inputs & display counting in your browser                

function count(start,end){
    var start = prompt("enter start number");
    var end = prompt("enter end number");
    for(var i = start; i<=end; i++){
        console.log(i);
    }
}
count()


                    //Question no 8
// Write a nested function that computes hypotenuse of a right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2.

function calculateHyp() {
    var base = +prompt("Enter Base");
    var per = +prompt("Enter Perpendicular");
    var hyp = base*base + per*per;
    function calculateSquare() {
        hyp = Math.sqrt(hyp);
    }
    calculateSquare();
    console.log("Hypotneous=" + hyp);
}
calculateHyp();


                    //Question no 9
// Write a function that calculates the area of a rectangle. 
// A = width * height Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables

function area(height,width){
    var height = +prompt("enter height");
    var width = +prompt("enter width");
    var area_of_rectangular = width * height;
    console.log("Area of rectangular is: " + area_of_rectangular)
} 
area()


                    //Question no 10
// Write a JavaScript function that checks whether a passed string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam.

function palindrome() {
    var input = prompt("Enter a word to check its palindrome or not");
    var reverse = input.split("").reverse().join("");

    if (input === reverse) {
        alert("Yes its a palindrome")
    } else {
        alert("its not a palindrome")
    }
}

palindrome();


                    //Question no 11

// Create 2 functions that calculate properties of a circle, using the definitions here. Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output "The circumference is NN". Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area is NN".
// Circumference of circle = 2πr
// Area of circle = πr2

function calcCircumference() {
    var radius = +prompt("Enter radius of the circle");
    circleCircumference = 2 * 3.142 * radius;
    return circleCircumference;
}
calcCircumference();
console.log("Circumference of circle: " + circleCircumference);

function calcArea() {
    var radius = +prompt("Enter radius of the circle");
    circleArea = (3.142 * (radius * radius));
    return circleCircumference;
}
calcArea();
console.log("Area of circle: " + circleArea);





















