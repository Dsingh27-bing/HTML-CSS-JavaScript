function truncate(str, maxlength){
    if (str.length>maxlength){
        let newstring= str.slice(0,maxlength)+ "...";
        return newstring;
    }
    return str;
}

let example= "What I'd like to tell on this topic is:";
console.log(truncate(example, 20));
console.log(truncate(example,100));