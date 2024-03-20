//storing a person name which include whitespace characters

let personname: string = "\t \n Sami Khan \t \n";
console.log("name with whitespcae:");
console.log(personname)

let trimmedname: string = personname.trim();
console.log("\nName after stripping whitespace:");
console.log(trimmedname);
