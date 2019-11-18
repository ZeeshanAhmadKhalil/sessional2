class Car{
    constructor(brand,name){
        console.log("the name of my car is "+name)
        this.brand=brand
        this.name=name
    }
    print_full_car_name(){
        console.log("Full name of car is "+this.brand+" "+this.name)
    }
}
car=new Car("Bogatti","Chyron")
car.print_full_car_name()

class Model extends Car{
    constructor(brand,name,model){
        super(brand,name)
        this.model=model
    }
    car_full_name_with_model(){
        console.log("This is "+this.brand+" "+this.name+" "+this.model)
    }
}
car1=new Model("koenigsegg","agera","r")
car1.print_full_car_name()
car1.car_full_name_with_model()

simple_hello=function(){
    console.log("Hello Zeeshan")
}

arrow_hello=()=>{
    console.log("Arrow Hello Zeeshan")
}

arrow_hello1=(name)=>console.log("Arrow Hello1 "+name)

arrow_hello2=name=>console.log("Arrow Hello2 "+name)

simple_hello()
arrow_hello()
arrow_hello1("Moon")
arrow_hello2("Faizan")

class Simple_Student{
    constructor(name){
        this.name=name
    }
    show_name(){
        console.log("my name is "+this.name)
        console.log("this="+this)
    }
}

class Arrow_Student{
    constructor(name){
        this.name=name
    }
    show_name=()=>{
        console.log("my name is "+this.name)
        console.log("this="+this)
    }
}

simple_stu=new Simple_Student("Zeeshan Ahmad")
arrow_stu=new Arrow_Student("Moon Khan")
window.addEventListener("load",simple_stu.show_name)
window.addEventListener("load",arrow_stu.show_name)
document.getElementById("btn1").addEventListener("click",simple_stu.show_name)
document.getElementById("btn2").addEventListener("click",arrow_stu.show_name)
// console.log("Calling simple function printing this inside class")
// simple_stu.show_name()
// console.log("Calling arrow function printing this inside class")
// arrow_stu.show_name()

var a=2
var a=2.5
console.log(a)
{
    var a=3
    console.log(a)
    a=4
}
let b=2
// let b=2.5  Error
console.log(b)
{
    let b=3
    console.log(b)
    b=4
}
const c=2
// const c=2.5 Error
console.log(c)
{
    const c=3
    console.log(c)
    // c=4  error
}

// Testing

a=[1,2,3,4,5]
b=a.splice(2,1)
console.log(a)
console.log(b)