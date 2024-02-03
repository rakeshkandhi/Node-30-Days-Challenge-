const { log } = require('node:console');
const fs = require('node:fs');
function readFile(filePath) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('The content of the file is:\n');
        console.log(data);
    });
}

readFile('test.txt');
