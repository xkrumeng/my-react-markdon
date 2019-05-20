const fs = require('fs');

let conponents = []

const files = fs.readdirSync('./node_modules/brace/theme');

for (let i = 0; i< files.length; i++) {
  conponents.push((files[i].split('.')[0]))
}

console.log(conponents)