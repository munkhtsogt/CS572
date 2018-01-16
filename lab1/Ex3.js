function isWeekend(){
    const todayDate = new Date();
    const day = todayDate.getDay();
	const i = Math.ceil((day % 6) / (day + Number.EPSILON));
	return ["weekend", "weekday"][i];
}

console.log(isWeekend());