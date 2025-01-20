let array= ["James", "Bernie"];
console.log(array);
array.push("Robert");
console.log(array);

function ReplaceMid(arr){
    n= arr.length;
    if (n%2!=0){
        mid= Math.floor(n/2);
        arr[mid]= "Calvin";
    }
    return arr;
}

ReplaceMid(array);
console.log(array);
newarray2 = array.shift();
console.log(array);

res = array.unshift("Rose", "Regal");
console.log(array);