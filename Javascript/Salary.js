let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
    }
var sum =0;

    for (let i=0;i<Object.keys(salaries).length;i++){
        sum+=Object.values(salaries)[i];
    }
    console.log(sum);