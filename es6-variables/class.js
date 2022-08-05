class hello {
    constructor(num1, num2) //to pass the arguments
    {
        this.num1 = num1  //this means to use the num1 from that scope only
        this.num2 = num2
    }
    Hello() //to call a function without a function attribte
    {
        console.log("hello the sum is " + (this.num1 + this.num2))
    }

}
let hey = new hello(10, 20) //new variable declared and pass new arguements to the function
hey.Hello() //pass the values to function and print