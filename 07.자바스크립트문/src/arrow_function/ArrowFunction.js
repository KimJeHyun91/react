function ArrowFunction(){

    console.log("----------------ArrowFunction-----------------------");

    const test1=function(a, b){
        return a+b;
    }
    console.log("test1 : "+test1(1, 1));

    const test2=(a, b)=>{
        return a+b;
    }
    console.log("test2 : "+test2(2, 2));

    const test3=(a, b)=> a+b
    console.log("test3 : "+test3(3, 3));
    
    const test4=a=> a+4
    console.log("test4 : "+test4(4));

    const test5=(num)=>{
        return function(value){
            return num+value;
        };
    }

    let num=test5(5);
    let result=num(7);
    console.log("num : "+num);
    console.log("result : "+result);

    let result2=test5(5)(7);
    console.log("result2 : "+result2);

    const test6=num=>value=>num+value;
    let result3=test6(1)(2);
    console.log("result3 : "+result3);

    console.log("----------------------------------------------------");
}

export default ArrowFunction;