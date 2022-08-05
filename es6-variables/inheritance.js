class sample {
    samplepro() {
        console.log("helllo")
    }
}



class Hello extends sample { //to call another class statements in current class 
    constructor(num1, num2) {
        super() //to call base class constructor
        this.num1 = num1
        this.num2 = num2

    }
    hai() {
        console.log("hai: " + (this.num1 + this.num2))
    }
}
let hey = new Hello(10, 20)
hey.hai()
hey.samplepro()