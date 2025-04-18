function CallBackFunction(){
    console.log("------------------CallBackFunction------------------");
    // 콜백 함수 : 매개변수에 전달하는 함수

    // forEach()
    const animals=["강아지", "고양이", "호랑이"];
    animals.forEach((value, index, array)=>{
        console.log("index : "+index+" value : "+value+" array : "+array);
    });

    // map()
    const numbers=[1, 2, 3, 4, 5];
    let numbers_map=numbers.map((value)=>{
        return value*5;
    });
    console.log("Original Values");
    numbers.forEach((value, index, array)=>{
        console.log("index : "+index+" value : "+value+" array : "+array);
    });

    console.log("Changed Values");
    numbers_map.forEach((value, index, array)=>{
        console.log("index : "+index+" value : "+value+" array : "+array);
    });
    
    // filter()
    const name=["나강아", "나고양", "나호랑"]
    const find_name=name.filter((value)=>{
        return value.includes("호");
    })
    console.log(find_name);


    console.log("----------------------------------------------------");
}

export default CallBackFunction;