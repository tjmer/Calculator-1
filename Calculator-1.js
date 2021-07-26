const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


reader.question("What would you like to calculate?", function(input){
    tokens = input.split(' ');

    mathSymbol = tokens[0];
    num1 = Number(tokens[1]);
    num2 = Number(tokens[2]);
    
    console.log(mathSymbol)
    console.log(num1)
    console.log(num2)

    // Ian used the else if and I liked it so I used.
    if (mathSymbol === "+"){
        console.log(num1 + num2);
    } else if (mathSymbol === "-"){
        console.log(num1 - num2)
    } else if (mathSymbol === "*"){
        console.log(num1 * num2)
    } else if (mathSymbol === "/"){
        console.log(num1 / num2)
    } else if (mathSymbol === "^"){
        console.log(Math.sqrt(num1))
    } else {
        console.log("No Calculation, good-bye")
    }

    reader.close()

});