var fs = require('fs');

let arr = [];

const allFileContents = fs.readFileSync('src/dictionary.ts', 'utf-8');
allFileContents.split(/\r?\n/).forEach(line =>  {
    arr.push(line);
});

fs.writeFile('better-dictionary.ts', JSON.stringify(arr), err => {
    console.error(err);
});