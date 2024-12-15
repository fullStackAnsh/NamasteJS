// event listeners and callback functions
function event(){
    document.getElementById('click').addEventListener('click',function xyz(){console.log("Clicked");});
}
event(); //xyz forms a closure with event , xyz is a callback function here