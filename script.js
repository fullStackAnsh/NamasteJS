a(); // hoisted
b(); //typeError
// function statement 
function a(){
    console.log("a");
}
//function expression
var b=function(){
    console.log("b");
}