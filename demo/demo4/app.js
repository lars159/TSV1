/*
alert("confirm")


var person = prompt("Please enter your name", "Harry Potter");
if (person != null) {
    document.querySelector("#msg").innerHTML =
    "Hello " + person + "! How are you today?";
}

if(confirm("data")){
    
}
*/

document.querySelector("#calcBtn").addEventListener("click", function(){
    var a = document.querySelector("#a").value;
    var b = document.querySelector("#b").value;
    var intA = parseInt(a);
    var intB = parseInt(b);
    var intC = intA + intB;
    document.querySelector("#c").innerHTML = c;
})