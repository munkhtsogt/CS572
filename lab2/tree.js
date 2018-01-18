"use strict";
const tree = { 
	name : "home", 
	files : ["notes.txt","todo.txt"], 
	subFolders: [	
		{ name : "payroll", 
		  files : ["paper.pdf","funds.csv"], 
		  subFolders: [] 
		}, 
		{ name: "misc", 
		  files : ["summer1.jpg","summer2.jpg", "summer3.jpg"], 
		  subFolders: [
			{ name : "logs", 
			  files : ["logs1","logs2","logs3","logs4"], 
			  subFolders: [] 
		  }] 
	}] 
}; 

const find = f => t => {
    function recursive(t){
        if(t.files.indexOf(f) !== -1) return true;
        else {
            for(let i = 0; i < t.subFolders.length; i++)
                if(recursive(t.subFolders[i])) return true;
            return false;
        }
    }
    return recursive(t);
};

console.log(find("paper.pdf")(tree)); // true 
console.log(find("randomfile")(tree)); // false
