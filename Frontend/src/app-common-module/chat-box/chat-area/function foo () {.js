function foo () {
    let a = "hello";
    bar.bind(this);
}
function bar () {
    console.log('--- value of a ---',this.a);
}
foo();



Foo = function () {
    this.a = "hello";
    console.log(" --- object created ----", this.a);
}
var x = new Foo();
console.log(x);

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.getName = () => {
          console.log("good one");
    }
}


var x = new Person("jack","jill");
x.getName = () => {
           console.log("not good one");
}
console.log("x -- ", x);


var y = new Person("went","hill");
console.log("y -- ", y);

// var x = new Person("jack","son")




var x = {
  name: "xxxx"

}
console.log(x)


const factoryX = () => {
  return {
    'fName':"yajuvendra",
    'lName':"thakur",
  }
}
factoryX.prototype.show = () => {
  console.log("----- this is goof fish")
}
var x = factoryX();
console.log(x);
