let menu = {
    width: 200,
    height: 300,
    title: "My menu"
    };

    function multiplyNumeric(Obj){
        for (var i in Obj){
            if (typeof Obj[i]==='number'){
                Obj[i]=Obj[i]*2;
            }
        }
    }

    multiplyNumeric(menu);
    console.log(menu);