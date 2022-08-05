//default parameter= it means we set a value defaultly to a argument when in that function that value is not defined the default will be set that corresponding value

function hello(num1 = 100, num2 = 20) {
    console.log(num1 + num2)

}
// hello(10,30)
hello(undefined, 30) //in arguement a value 30 was passed as num2 but num 1 i undefined so default value 100 is stored to the place of num1