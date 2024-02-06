const path = require('path');
function checkFileExtension(filePath, expectedExtension) {
    const actualExtension = path.extname(filePath);
    if (actualExtension === expectedExtension) {
        console.log("The file has the expected extension.");
    }
    else {
        console.log("The file does not have the expected extension.");
    }
}

checkFileExtension("../test.txt", ".txt");
checkFileExtension("../test.txt", "doc");