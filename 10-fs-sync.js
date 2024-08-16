const {readFileSync, writeFileSync} = require('fs')
//is same as 
// const fs = require('fs');
// fs.read....

const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');
console.log(first,second)

writeFileSync(
    './content/result-sync.txt',`Here is the result ${first}, ${second}`,
    {flag:'a'}
)