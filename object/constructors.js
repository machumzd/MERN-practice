function person(name,age,place)
{
    this.name=name
    this.age=age
    this.place=place
    this.display=function(){
        console.log("name: "+name,"age: "+age,"place: "+place)

    }
}
var machu=new person("machu",21,"ksd")
var bichu=new person("bichu",22,"uuolampaara")

machu.display()
bichu.display()