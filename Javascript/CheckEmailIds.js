function checkEmail(s){
    if(s.length == 0){
        return false;
    }
    else if (s.includes("@") && s.includes(".")){
        ind= s.indexOf("@");
        if (s[ind+1]!= "." && s[ind-1] && s[(s.indexOf("."))+1]){
            return true
        }
    return false
    }
}

console.log(checkEmail("@gmail.com"));
console.log(checkEmail("dimple@gmail.com"));
console.log(checkEmail("@.com"));
console.log(checkEmail("@l.com"));
console.log(checkEmail("l@l.com"));
console.log(checkEmail("l@l."));

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter email id: ', (user_input) => {
    console.log(checkEmail(user_input));
    rl.close();
});


