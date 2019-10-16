const fs = require('fs');

// import fs from 'fs'
var output = fs.readFileSync('data.txt', 'utf8')
.trim()
.split('\n')
.map(line => line.split('\t'))
.reduce((contact, line) => {
    // console.log('hello', line);
    contact[line[0]] = contact[line[0]] || []
    contact[line[0]].push({
        firstName: line[1],
        lastName: line[2],
        //add more items here
    })
    return contact
}, {})


console.log('output', JSON.stringify(output, null, 1));