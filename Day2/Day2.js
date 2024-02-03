const fs = require('fs');

function writeFile(filePath, data) {
    fs.writeFile(filePath, data, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('The file has been saved!\t' + filePath);
    });
}

writeFile('test.txt', 'Hello World!\nWelcome to the node 30 days challenge');
