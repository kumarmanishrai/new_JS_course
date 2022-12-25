let arr = [45,87,65]

// map creates anew array by performing some operations on each array element
let a = arr.map((value, index, array)=> {
    console.log(value);
    return value;
})
console.log(a);