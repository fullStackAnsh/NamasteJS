// Hoisting in JS
console.log(x);//undefined
getName();//function will be run successfully
console.log(getName);//function body will be printed
var x=7;
function getName(){
    console.log("get name");
}
