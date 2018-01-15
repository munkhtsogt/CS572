function isWeekend(){
    const todayDate = new Date();
    const day = todayDate.getDay();

    dic = {
        1: "weekday",
        2: "weekday",
        3: "weekday",
        4: "weekday",
        5: "weekday",
        6: "weekend",
        0: "weekend",
    }
    
    return dic[day]; 
}

console.log(isWeekend());