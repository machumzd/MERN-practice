var person={
    name:"mzd",
    age:30,
    place:"ksd",
    display:function ()
    {
        // var name="hello"
        console.log(this.name)
    }
}
person.dob="2000000"
person.displayPlace=function(){
    console.log(this.place)
}
console.log(person.displayPlace())
// for(x in person)
// console.log(person[x])

// console.log(person["name"])