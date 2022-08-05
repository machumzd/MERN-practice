
//let,var difrence

function hello() {
    var i = 0 //var chooses the latest object so it confuse the devoloper
    let hey = 200
    if (i === 0) {
        let hey = 30
        console.log(hey) // let kodthank ori scopil ille onn mathre execute aavum 
    }
    console.log(hey)

}
hello()


//in the case of function inside another fuction var also uses latest statement that depends upon the  insidefunction