let val = [12, 5, 8, 130, 44].filter(function(i) {
    return i > 5;
});
console.log(val);

val = [12, 5, 8, 130, 44].filter((x) => {
    if(x > 5){
        return true;
    } else {
        return false;
    }

});

console.log(val);