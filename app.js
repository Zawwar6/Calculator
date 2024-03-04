alert("Calculator");
var firstNum = prompt("Enter first number");
var operator = prompt("Enter the operator +,-,*,/");
var secondNum = prompt("Enter the second number");

if(operator =="+"){
    var result = parseInt(firstNum) + parseInt(secondNum);
    alert("Addition of two value is " + result);
}
 else if(operator =="-"){
    var result = parseInt(firstNum) - parseInt(secondNum);
    alert("Subtraction of two value is " + result);
}
else if(operator =="*"){
    var result = parseInt(firstNum) * parseInt(secondNum);
    alert("Multiplication of two value is " + result);
}
else if(operator =="/"){
    var result = parseInt(firstNum) / parseInt(secondNum);
    alert("Division of two value is " + result);
}
else{
    alert("Enter correct operator");
}