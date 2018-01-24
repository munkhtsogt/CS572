const course = [
    {course: 'WAP', prof: 'Tina', code: 'cs472'},
    {course: 'MWA', prof: 'Asaad', code: 'cs572'},
    {course: 'WAA', prof: 'Rakesh', code: 'cs545'}
];

function* loop(arr){
    console.log('Start');
    console.log(arr);
    for(const item of arr){
        yield item;
    }
    console.log('End');
}

const courseGen = loop(course);
for(const i of courseGen){
    console.log(i);
}
console.log(courseGen.next());
courseGen.next();