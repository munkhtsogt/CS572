String.prototype.filterWords = function(words){
    let str = this;
    for(let word of words){
        str = str.replace(new RegExp(word, 'g'), '***');
    }
    return str;
};

console.log("This house is nice!".filterWords(["house", "nice"]));