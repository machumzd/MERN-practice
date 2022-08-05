var r = require('readline-sync')
var num1 = r.question("enter minimum number:-")
var num2 = r.question("enter maximum number:-")
for (i = num1; i <= num2; i++) {
    if (i % 2 === 0)
        console.log("even=" + i)
    else
        console.log("odd=" + i)
}