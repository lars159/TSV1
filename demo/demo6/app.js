console.log("hello world");

if(true){
    var a = 4 +3;
    
    let b = 4 +3;
    
}
console.log("a ", a);

for(let a=0;a<10;a++){
    console.log(a);
}

var items = ["a","b","c","d","e"];
for(let i in items){
    console.log(items[i]);
}

items.forEach(function(i){
    console.log(i);
})

let filterResult = items.filter(function(i){
    if(i == "a") {
        return true;
    } else {
        return false;
    }
})

let map = items.map(function(i){
    return {item : i};
})


console.log(map);


items.forEach( (i) => {
    console.log(i);
})

items.forEach(i => console.log(i))

class Book {
     constructor(x ) {
        this.x = x; 
    }
    toString() {
        return  this.x ;
    }
}
let b = new Book(100);
console.log(b);
