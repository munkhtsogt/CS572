function isWeekend(){
    const todayDate = new Date();
    const day = todayDate.getDay();
    return ["weekend", "weekday"][day % 6]; 
}

console.log(isWeekend());