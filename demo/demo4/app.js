// types: s62 number string boolean
string singel quate dubel qute dont mix

// gå igenom ["",""] {asd : "sadf"}


// sida array s71 object s.100


// selection elemnts

//Events s.281 monitorEvents(document.body)

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