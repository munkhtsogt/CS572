function isWeekend(){
    const todayDate = new Date();
    const day = todayDate.getDay();
	dic = {
		0: "weekend",
		6: "weekend",
		1: "weekday",
		2: "weekday",
		3: "weekday",
		4: "weekday",
		5: "weekday",
	}
    return dic[day];
}

console.log(isWeekend());