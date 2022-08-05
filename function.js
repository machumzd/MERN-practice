// function hello(num1,num2)
// {
//     var sum=num1+num2
//     console.log("the sum is")
//     return sum
// }
// sum=hello(20,30)
// console.log(sum)


//num enter akkit

var r = require("readline-sync")
num1 = r.question("enter two numbers")
num2 = r.question("")
console.log("you enter the numbers are" + num1, "&", +num2)

function hello(num1, num2) {

    var sum = num1 + num2

    return sum
}
sum = hello(parseInt(num1), parseInt(num2))
console.log("and the sum is:" + sum)