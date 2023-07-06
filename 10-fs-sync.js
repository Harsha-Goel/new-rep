const { readFileSync, writeFileSync} =require("fs");
const first = readFileSync("./content/first.txt",'utf8')
const second = readFileSync("./content/second.txt",'utf8')
//console.log(first,second);
console.log("start");
writeFileSync(
    './content/result-syc.txt',
    `Here is the result : ${first} ,${second}`,
    {flag: 'a'}
)

console.log("done with this task");
console.log("starting with the next one");
//by adding flag we will gett he resuklt as many times we run the code else we will get it only once