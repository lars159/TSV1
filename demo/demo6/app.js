console.log("start");

/*
let b = "let b";

if(true){
    let a = "var a";
}

const c = {item : 1};
console.log(c);
c.item = 2;
console.log(c);
c = {};


for(let i=0;i<4;i++){
    console.log(items[i]);
}


for(let i : items){
    console.log(items[i]);
}

var items = ["a", "b", "c", "d"];
items.forEach(function(i){
    console.log(i);
})



function doSomthing(callback){
    console.log("doSomthing");
    callback();
}

doSomthing(function(){
    console.log("end of call");
})



let books = [{titel :"java", pages : 10},
             {titel :"javaScript", pages : 50},
             {titel :"css", pages : 100}];

let filterResult = books.filter(function(b){
    if(b.pages > 30){
        return true;
    } else {
        return false;
    }
});
console.log(filterResult);

let newArray = [];
for(let i=0;i<4;i++){
    console.log(books[i]);
    if(b.pages > 30){
        newArray.push(books[i]);
    }
}

let items = ["a", "b", "c", "d"];
let mapResult = items.map(function(i){
    return {titel : i};
})
console.log(mapResult);



var items = ["a", "b", "c", "d"];
items.forEach(i => console.log(i))



let items = ["a", "b", "c", "d"];
let mapResult = items.map(i => return {titel : i})
console.log(mapResult);
*/

class Book {
    
    constructor(p){
        this.pages = p;
    }
    
    getPages(){
        return this.pages;
    }
    
    toString(){
        return "Titel of book";
    }
    
    static getVendor() {
        return "Bonier";
    }
    
}
 
//let b = new Book(100)};
//b.titel = "JAVA";

console.log(Book.getVendor());



